import React, { useState, useEffect } from 'react';
const TextTypingAnimation = () => {
  const phrases = ["Sravankumar Potnuru","Full Stack Java Developer"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      const currentTextLength = displayedText.length;

      if (isTyping) {
        // Typing mode: add characters
        if (currentTextLength < currentPhrase.length) {
          setDisplayedText(prevText => prevText + currentPhrase[currentTextLength]);
        } else {
          setIsTyping(false); // Switch to backspacing mode
        }
      } else {
        // Backspacing mode: remove characters
        if (currentTextLength > 0) {
          setDisplayedText(prevText => prevText.slice(0, -1));
        } else {
          setIsTyping(true); // Switch back to typing mode for next phrase
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to next phrase
        }
      }
    }, 150); // Typing speed (adjust for faster/slower typing)

    return () => clearInterval(typingInterval); // Clean up interval on component unmount
  }, [currentPhraseIndex, displayedText, isTyping, phrases]);

  return (
    
      <span style={{color:"red"}}>{displayedText}</span>
    
  );
};

export default TextTypingAnimation;
