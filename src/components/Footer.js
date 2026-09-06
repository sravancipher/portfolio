import Icon from "./ui/Icon";
import { useCopyEmail } from "../hooks/useCopyEmail";
import { profile, mailtoHref } from "../data/content";
import styles from "./Footer.module.css";

function Footer() {
  const [copied, copyEmail] = useCopyEmail();

  return (
    <footer className={styles.footer}>
      <div className={["container", styles.inner].join(" ")}>
        <span>
          &copy; {new Date().getFullYear()} {profile.name}. All rights
          reserved.
        </span>
        <div className={styles.social}>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Icon name="github" size={18} />
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Icon name="linkedin" size={18} />
          </a>
          <a href={mailtoHref} onClick={copyEmail} aria-label={copied ? "Email copied" : "Email"}>
            <Icon name={copied ? "check" : "mail"} size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
