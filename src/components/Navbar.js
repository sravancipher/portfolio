import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./ui/Button";
import Icon from "./ui/Icon";
import ThemeToggle from "./ui/ThemeToggle";
import { useCopyEmail } from "../hooks/useCopyEmail";
import { profile, mailtoHref } from "../data/content";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { id: "services", label: "Services" },
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";
  const [emailCopied, copyEmail] = useCopyEmail();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const renderLink = (item, onClick) =>
    onHome ? (
      <a key={item.id} href={`#${item.id}`} onClick={onClick}>
        {item.label}
      </a>
    ) : (
      <Link key={item.id} to={`/#${item.id}`} onClick={onClick}>
        {item.label}
      </Link>
    );

  return (
    <header className={[styles.nav, scrolled ? styles.scrolled : ""].join(" ")}>
      <div className={["container", styles.inner].join(" ")}>
        <Link
          to="/"
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Sravan<span>.</span>
        </Link>

        <nav className={styles.links}>
          {NAV_ITEMS.map((item) => renderLink(item))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.desktopCta}>
            {onHome ? (
              <Button as="a" href="#contact" size="small">
                Let's Work Together
              </Button>
            ) : (
              <Button as={Link} to="/#contact" size="small">
                Let's Work Together
              </Button>
            )}
          </div>
          <ThemeToggle className={styles.themeBtn} />
          <button
            type="button"
            className={styles.menuBtn}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobilePanel}>
          {NAV_ITEMS.map((item) => renderLink(item, () => setOpen(false)))}
          {onHome ? (
            <a href="#contact" onClick={() => setOpen(false)}>
              Let's Work Together
            </a>
          ) : (
            <Link to="/#contact" onClick={() => setOpen(false)}>
              Let's Work Together
            </Link>
          )}
          <a href={mailtoHref} onClick={copyEmail}>
            {emailCopied ? "Copied to clipboard!" : profile.contact.email}
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
