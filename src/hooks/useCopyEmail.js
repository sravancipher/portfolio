import { useState } from "react";
import { profile } from "../data/content";

export function useCopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(profile.contact.email).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return [copied, copy];
}
