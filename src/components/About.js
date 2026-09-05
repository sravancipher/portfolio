import Section from "./ui/Section";
import Icon from "./ui/Icon";
import { profile } from "../data/content";
import styles from "./About.module.css";

const highlights = [
  "Production video-intelligence systems",
  "Direct collaboration with US CEO/CTO stakeholders",
  "Government-facility surveillance deployments",
];

function About() {
  return (
    <Section id="about">
      <div className={styles.grid}>
        <div className={styles.photoWrap}>
          <img
            src={profile.photo}
            alt={profile.name}
            className={styles.photo}
          />
        </div>
        <div>
          <span className="eyebrow">About</span>
          <p className={styles.summary} style={{ marginTop: "12px" }}>
            {profile.summary}
          </p>
          <div className={styles.highlights}>
            {highlights.map((item) => (
              <span className={styles.highlight} key={item}>
                <Icon name="check" size={14} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
