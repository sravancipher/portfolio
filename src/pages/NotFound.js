import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";

function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <div
          className="container"
          style={{
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: "var(--nav-height)",
          }}
        >
          <span className="eyebrow">404</span>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginTop: "12px" }}>
            This page doesn't exist
          </h1>
          <p style={{ color: "var(--color-ink-soft)", marginTop: "12px" }}>
            The page you're looking for may have moved or never existed.
          </p>
          <div style={{ marginTop: "28px" }}>
            <Button as={Link} to="/">
              Back to Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
