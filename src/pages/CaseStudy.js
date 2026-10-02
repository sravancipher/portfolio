import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Icon from "../components/ui/Icon";
import NotFound from "./NotFound";
import { featuredProjects } from "../data/content";
import styles from "./CaseStudy.module.css";

const BLOCKS = [
  { key: "problem", label: "The Problem" },
  { key: "solution", label: "The Solution" },
  { key: "contribution", label: "My Contribution" },
  { key: "outcome", label: "Outcome" },
];

function CaseStudy() {
  const { slug } = useParams();
  const index = featuredProjects.findIndex((p) => p.slug === slug);
  const project = featuredProjects[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <NotFound />;

  const next =
    featuredProjects[(index + 1) % featuredProjects.length];

  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <div className="container">
          <Link to="/#projects" className={styles.back}>
            <Icon name="arrowRight" size={14} style={{ transform: "rotate(180deg)" }} />
            Back to projects
          </Link>
          <div>
            <Badge variant="accent">{project.kind}</Badge>
            <h1 className={styles.title} style={{ marginTop: "16px" }}>
              {project.name}
            </h1>
            <p className={styles.summary}>{project.summary}</p>
          </div>
          <div className={styles.linkRow}>
            {project.repoUrl && (
              <Button
                as="a"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                variant="onDark"
              >
                <Icon name="github" size={16} />
                View Code
              </Button>
            )}
            {project.repoLinks &&
              project.repoLinks.map((repo) => (
                <Button
                  key={repo.url}
                  as="a"
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  variant="onDark"
                >
                  <Icon name="github" size={16} />
                  {repo.label}
                </Button>
              ))}
            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="onDark"
              >
                <Icon name="external" size={16} />
                Live Site
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <div className={styles.layout}>
            <div>
              {BLOCKS.filter((block) => project[block.key]).map((block) => (
                <div className={styles.block} key={block.key}>
                  <div className={styles.blockLabel}>{block.label}</div>
                  <p className={styles.blockText}>{project[block.key]}</p>
                </div>
              ))}
            </div>

            <aside className={styles.sidebar}>
              <div>
                <div className={styles.sideLabel}>Technologies</div>
                <div className={styles.techList}>
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="neutral">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              {project.liveNote && (
                <p className={styles.blockText}>{project.liveNote}</p>
              )}
            </aside>
          </div>

          <div className={styles.nextLink}>
            <span style={{ color: "var(--color-ink-faint)" }}>
              Next case study
            </span>
            <Link
              to={`/projects/${next.slug}`}
              style={{ fontWeight: 700, display: "inline-flex", gap: "8px", alignItems: "center" }}
            >
              {next.name}
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default CaseStudy;
