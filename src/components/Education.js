import Card from "./ui/Card";
import Section from "./ui/Section";
import { education } from "../data/content";
import styles from "./Education.module.css";

function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education" centered>
      <div className={styles.wrap}>
        <Card>
          {education.map((item) => (
            <div className={styles.eduItem} key={item.degree}>
              <div className={styles.degree}>{item.degree}</div>
              <div className={styles.school}>{item.school}</div>
              <div className={styles.eduMeta}>
                <span>{item.period}</span>
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
}

export default Education;
