import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Icon from "./ui/Icon";
import { otherProjects } from "../data/content";
import styles from "./OtherProjects.module.css";

function OtherProjects() {
  if (!otherProjects.length) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.label}>Other Notable Projects</div>
      <div className={styles.list}>
        {otherProjects.map((project) => (
          <Card key={project.name} className={styles.item}>
            <div className={styles.name}>{project.name}</div>
            <p className={styles.desc}>{project.description}</p>
            <div className={styles.tags}>
              {project.tech.map((tech) => (
                <Badge key={tech} variant="neutral">
                  {tech}
                </Badge>
              ))}
            </div>
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.repoLink}
              >
                <Icon name="github" size={16} />
                View on GitHub
              </a>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default OtherProjects;
