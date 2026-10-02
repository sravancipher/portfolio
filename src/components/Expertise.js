import Section from "./ui/Section";
import Badge from "./ui/Badge";
import { techStack } from "../data/content";
import styles from "./Expertise.module.css";

function Expertise() {
  return (
    <Section
      id="expertise"
      eyebrow="Technical Toolkit"
      title="Technologies I build with"
      subtitle="The stack behind the systems above — from model serving to the databases and pipelines that keep them fed."
    >
      <div className={styles.wrap}>
        <div className={styles.grid}>
          {techStack.map((group) => (
            <div key={group.category}>
              <div className={styles.category}>{group.category}</div>
              <div className={styles.items}>
                {group.items.map((item) => (
                  <Badge key={item} variant="neutral">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Expertise;
