import styles from "./Button.module.css";

const variantClass = {
  primary: styles.primary,
  secondary: styles.secondary,
  onDark: styles.onDark,
};

function Button({
  as = "button",
  variant = "primary",
  size,
  icon,
  iconEnd,
  className = "",
  children,
  ...rest
}) {
  const Component = as;
  const classes = [
    styles.btn,
    variantClass[variant] || styles.primary,
    size === "small" ? styles.small : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...rest}>
      {icon}
      {children}
      {iconEnd}
    </Component>
  );
}

export default Button;
