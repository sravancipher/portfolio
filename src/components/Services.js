import Section from "./ui/Section";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import { services } from "../data/content";
import styles from "./Services.module.css";

function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I Do"
      title="Engineering capability across the AI product lifecycle"
      subtitle="I work across the stack that modern AI products require — from model-serving infrastructure to the UI a business user actually touches."
    >
      <div className={styles.grid}>
        {services.map((service, index) => (
          <Card key={service.title} hoverable>
            <div className={styles.icon}>
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className={styles.name}>{service.title}</h3>
            <p className={styles.desc}>{service.description}</p>
            <div className={styles.tags}>
              {service.tags.map((tag) => (
                <Badge key={tag} variant="neutral">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Services;
