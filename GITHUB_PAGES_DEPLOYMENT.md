# Deploying a React App to GitHub Pages with a Custom Domain

End-to-end steps used to get this project live at `sravanpotnuru.thetechvoyager.in`.
Reuse this for any other Create React App / static project + GoDaddy domain.

Deployment is automatic via GitHub Actions: push to your main working branch (e.g. `develop`)
and a workflow builds the app and publishes it — no separate branch to manage, no manual
build/deploy command.

## 1. Decide the URL

Pick one:
- **Subdomain** (e.g. `project.yourdomain.com`) — simpler DNS, only needs one CNAME record. Recommended default.
- **Apex/root domain** (e.g. `yourdomain.com`) — needs 4 `A` records instead of a CNAME (GitHub doesn't allow CNAME at the root).

## 2. Prep the repo

In `package.json`, set `homepage` so CRA builds asset paths correctly:

```json
{
  "homepage": "https://project.yourdomain.com"
}
```

Add a `public/CNAME` file with just the domain (no protocol, no trailing slash):

```
project.yourdomain.com
```

This file gets copied into every build automatically (CRA copies everything in `public/`
into `build/`), so the custom domain survives every deploy without extra steps.

If using React Router, no `basename` is needed as long as the site is served at the root
of its own (sub)domain rather than a subpath.

## 3. Add the GitHub Actions workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [develop]   # your working branch
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - run: cp build/index.html build/404.html
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

`workflow_dispatch` lets you manually re-trigger a deploy from the Actions tab (or the API)
without needing a new commit.

The `cp build/index.html build/404.html` step matters if you use client-side routing
(React Router or similar): GitHub Pages is a static file host, so a hard refresh or direct
link to e.g. `/projects/some-slug` makes the browser ask the server for that exact path,
which doesn't exist as a file — only `index.html` at the root does. Publishing an identical
`404.html` means GitHub Pages serves that instead of a real 404, the app's JS loads, and the
router reads `window.location` and renders the correct route client-side. Without this step,
every route except `/` 404s on refresh or direct navigation.

## 4. Push the workflow file (PAT needs `workflow` scope)

GitHub blocks pushes that add/modify anything under `.github/workflows/` unless the token
doing the push has the **`workflow`** scope — a normal `repo`-scope token isn't enough, and
this only shows up as an error at push time:

```
! [remote rejected] develop -> develop (refusing to allow a Personal Access Token
  to create or update workflow `.github/workflows/deploy.yml` without `workflow` scope)
```

If you hit that:

1. **github.com/settings/tokens** → **Generate new token (classic)**
2. Check scopes: **`repo`** and **`workflow`**
3. Copy the token immediately (shown once)
4. Store it for git to use, then push:
   ```bash
   printf "protocol=https\nhost=github.com\nusername=<your-username>\npassword=<token>\n" | git credential approve
   git push origin develop
   ```
   (On Windows with Git Credential Manager, this caches it the same way a browser login would —
   no need to repeat it on future pushes.)

Treat any token that's been typed into a terminal, chat, or shared screen as burned — revoke
it afterward from the same tokens page and generate a fresh one if you need to authenticate
again later.

## 5. Point GitHub Pages at the Actions workflow

By default, a repo's Pages source is either unset or "Deploy from a branch" — that needs to
change to "Actions" or the workflow's output will just sit there unused.

**Via the UI:**
1. Repo → **Settings → Pages**
2. **Build and deployment → Source**: select **GitHub Actions** (not "Deploy from a branch")
3. **Custom domain**: enter `project.yourdomain.com` → Save
4. Leave **Enforce HTTPS** unchecked until DNS is verified (it's greyed out until then anyway)

**Via the API** (equivalent, useful if scripting this):
```bash
curl -X PUT -H "Authorization: token <PAT>" -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/<owner>/<repo>/pages \
  -d '{"build_type":"workflow"}'
```
Check current state any time with `GET` on the same URL — look for `"build_type": "workflow"`.

## 6. Configure DNS in GoDaddy

Go to **My Products → (domain) → DNS / Manage DNS**.

**For a subdomain** (recommended):
| Type  | Name        | Value                     |
|-------|-------------|---------------------------|
| CNAME | `project`   | `<github-username>.github.io` |

**For an apex/root domain**, add 4 `A` records instead:
| Type | Name | Value             |
|------|------|--------------------|
| A    | `@`  | `185.199.108.153`  |
| A    | `@`  | `185.199.109.153`  |
| A    | `@`  | `185.199.110.153`  |
| A    | `@`  | `185.199.111.153`  |

Before adding, **check for existing conflicting records** at the same Name (especially on a
domain bought via marketplace/aftermarket/expired-domain purchase — it can carry over stale
DNS records from a previous owner, e.g. an old `www` CNAME pointing at someone else's GitHub
Pages site). Delete anything pointing elsewhere for that Name — if you can open the domain's
DNS management page at all, you're the current owner and it's safe to edit or remove them.

## 7. Wait for DNS + verify

- Propagation typically takes 15 minutes to a few hours.
- Check resolution yourself before assuming something's broken:
  ```bash
  nslookup project.yourdomain.com 8.8.8.8
  ```
  It should eventually resolve to `<github-username>.github.io` (via CNAME) or the GitHub
  Pages IPs (via A records).
- An `NXDOMAIN` / "can't find" result right after saving the DNS record is usually just
  propagation delay or resolver negative-caching — recheck after 15–30 minutes before
  troubleshooting further.
- Once DNS resolves correctly, GitHub's Pages settings page will show a green "DNS check
  successful". Only then check **Enforce HTTPS** — GitHub needs the working DNS first to
  issue the certificate.

## 8. First deploy

Push the workflow file (step 4 already did this) and it runs automatically. To trigger it
manually instead of waiting for a push:

```bash
curl -X POST -H "Authorization: token <PAT>" -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/<owner>/<repo>/actions/workflows/deploy.yml/dispatches \
  -d '{"ref":"develop"}'
```

Watch it in the **Actions** tab on GitHub, or poll:
```bash
curl -s -H "Authorization: token <PAT>" \
  https://api.github.com/repos/<owner>/<repo>/actions/runs?per_page=1
```
Look for `"status": "completed"` and `"conclusion": "success"`.

## 9. Clean up the legacy branch (if migrating from `gh-pages` package)

If this project previously deployed with the `gh-pages` npm package (`npm run deploy` pushing
to a `gh-pages` branch), that branch and the `gh-pages` devDependency/scripts are no longer
needed once `build_type` is `workflow` — Pages now serves the Actions artifact directly, not
branch content:

```bash
npm uninstall gh-pages
# remove "predeploy"/"deploy" scripts and "homepage" duplication if any from package.json
git push origin --delete gh-pages
```

## 10. Redeploying later

Nothing to run manually — just push to the watched branch:

```bash
git push origin develop
```

The Actions workflow rebuilds and republishes automatically. Check the **Actions** tab on
GitHub to watch progress or debug a failed run.
