import styles from "./Badge.module.css";

const variantClass = {
  accent: styles.accent,
  neutral: styles.neutral,
};

function Badge({ variant = "primary", className = "", children }) {
  const classes = [styles.badge, variantClass[variant], className]
    .filter(Boolean)
    .join(" ");
  return <span className={classes}>{children}</span>;
}

export default Badge;
