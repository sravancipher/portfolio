import styles from "./Card.module.css";

function Card({ hoverable = false, className = "", children, ...rest }) {
  const classes = [styles.card, hoverable ? styles.hoverable : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

export default Card;
