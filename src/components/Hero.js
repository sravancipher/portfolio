import Button from "./ui/Button";
import Icon from "./ui/Icon";
import RotatingText from "./ui/RotatingText";
import { profile, roles } from "../data/content";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.glowAccent} />
      <div className={["container", styles.inner].join(" ")}>
        <div>
          <span className={styles.eyebrow}>
            <span className={styles.dot} />
            Open to full-time roles &amp; freelance projects
          </span>

          <h1 className={styles.title}>
            {profile.name}
            <br />
            <span className={styles.roleLine}>
              <RotatingText words={roles} />
            </span>
          </h1>

          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.ctaRow}>
            <Button as="a" href="#projects">
              View My Work
              <Icon name="arrowRight" size={16} />
            </Button>
            <Button as="a" href="#contact" variant="onDark">
              Let's Work Together
            </Button>
            <Button
              as="a"
              href={profile.resumeUrl}
              download
              variant="onDark"
            >
              <Icon name="download" size={16} />
              Resume
            </Button>
          </div>

          <div className={styles.stats}>
            <div>
              <div className={styles.statValue}>2 yrs</div>
              <div className={styles.statLabel}>AI/ML &amp; backend engineering</div>
            </div>
            <div>
              <div className={styles.statValue}>10+</div>
              <div className={styles.statLabel}>Live CCTV streams in production</div>
            </div>
            <div>
              <div className={styles.statValue}>5+</div>
              <div className={styles.statLabel}>AI microservices shipped</div>
            </div>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelRow}>
            <span className={styles.panelLabel}>Focus</span>
            <span className={styles.panelValue}>AI/ML · GenAI · Full-Stack</span>
          </div>
          <div className={styles.panelRow}>
            <span className={styles.panelLabel}>Currently building</span>
            <span className={styles.panelValue}>
              AI chat assistant on SAP data
            </span>
          </div>
          <div className={styles.panelRow}>
            <span className={styles.panelLabel}>Based in</span>
            <span className={styles.panelValue}>{profile.location}</span>
          </div>
          <div className={styles.panelRow}>
            <span className={styles.panelLabel}>Working with</span>
            <span className={styles.panelValue}>US-based stakeholders</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
