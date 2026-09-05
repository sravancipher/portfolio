import Section from "./ui/Section";
import { experience } from "../data/content";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where this has been proven in production"
      subtitle="Hands-on ownership of AI systems that run in production today, working directly with company stakeholders and client teams."
    >
      <div className={styles.timeline}>
        {experience.map((job) => (
          <div className={styles.item} key={`${job.org}-${job.role}`}>
            <div className={styles.meta}>
              <div className={styles.period}>{job.period}</div>
              <div>{job.location}</div>
            </div>
            <div>
              <div className={styles.roleRow}>
                <span className={styles.role}>{job.role}</span>
                <span className={styles.org}>{job.org}</span>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
