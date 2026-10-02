import Section from "./ui/Section";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import { useCopyEmail } from "../hooks/useCopyEmail";
import { profile, mailtoHref } from "../data/content";
import styles from "./Contact.module.css";

function Contact() {
  const { contact } = profile;
  const [ctaCopied, copyCta] = useCopyEmail();
  const [rowCopied, copyRow] = useCopyEmail();

  return (
    <Section id="contact">
      <div className={styles.panel}>
        <div className={styles.glow} />
        <div>
          <h2 className={styles.heading}>Hiring, or have a project in mind?</h2>
          <p className={styles.desc}>
            Whether you're evaluating me for a full-time role or need help on
            an AI/ML, GenAI, backend or full-stack project — I'm happy to
            talk it through. No obligation either way.
          </p>
          <span className={styles.availability}>
            <Icon name="check" size={14} />
            {profile.availability}
          </span>
          <div className={styles.ctaRow}>
            <Button as="a" href={mailtoHref} onClick={copyCta}>
              <Icon name={ctaCopied ? "check" : "mail"} size={16} />
              {ctaCopied ? "Copied!" : "Email Me"}
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              download
              variant="onDark"
            >
              <Icon name="download" size={16} />
              Download Resume
            </Button>
          </div>
        </div>

        <div className={styles.list}>
          <a className={styles.row} href={mailtoHref} onClick={copyRow}>
            <span className={styles.iconWrap}>
              <Icon name={rowCopied ? "check" : "mail"} size={18} />
            </span>
            <span>
              <div className={styles.label}>{rowCopied ? "Copied!" : "Email"}</div>
              <div className={styles.value}>{contact.email}</div>
            </span>
          </a>
          <a className={styles.row} href={`tel:${contact.phoneHref}`}>
            <span className={styles.iconWrap}>
              <Icon name="phone" size={18} />
            </span>
            <span>
              <div className={styles.label}>Phone</div>
              <div className={styles.value}>{contact.phone}</div>
            </span>
          </a>
          <a
            className={styles.row}
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.iconWrap}>
              <Icon name="linkedin" size={18} />
            </span>
            <span>
              <div className={styles.label}>LinkedIn</div>
              <div className={styles.value}>Sravan Potnuru</div>
            </span>
          </a>
          <a
            className={styles.row}
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.iconWrap}>
              <Icon name="github" size={18} />
            </span>
            <span>
              <div className={styles.label}>GitHub</div>
              <div className={styles.value}>@sravancipher</div>
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
