import { Link } from "react-router-dom";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Icon from "./ui/Icon";
import { featuredProjects } from "../data/content";
import styles from "./FeaturedProjects.module.css";

function FeaturedProjects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Proof of capability, not just a tech list"
      subtitle="Each case study breaks down the problem, what I built, and how — pulled from real production work and independent projects."
    >
      <div className={styles.grid}>
        {featuredProjects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card hoverable className={styles.card}>
              <Badge variant="accent" className={styles.kind}>
                {project.kind}
              </Badge>
              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.summary}>{project.summary}</p>
              <div className={styles.tags}>
                {project.tech.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="neutral">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className={styles.footer}>
                <span className={styles.link}>
                  View case study
                  <Icon name="arrowRight" size={15} />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default FeaturedProjects;
