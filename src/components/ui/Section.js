import styles from "./Section.module.css";

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = "",
  children,
}) {
  return (
    <section id={id} className={[styles.section, className].join(" ")}>
      <div className="container">
        {(eyebrow || title || subtitle) && (
          <div
            className={[styles.header, centered ? styles.centered : ""].join(
              " "
            )}
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
