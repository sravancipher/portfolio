import { useEffect, useState } from "react";

function RotatingText({ words, typingSpeed = 55, holdMs = 1400, className }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typingSpeed
        );
      } else {
        timeout = setTimeout(() => setPhase("deleting"), holdMs);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          typingSpeed / 1.6
        );
      } else {
        setPhase("typing");
        setWordIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, typingSpeed, holdMs]);

  return (
    <span className={className}>
      {text}
      <span aria-hidden="true">|</span>
    </span>
  );
}

export default RotatingText;
