import React, { useState, useEffect } from "react";

const TextChange: React.FC = () => {
  const texts = ["Adam", "a Database Developer", "a Frontend Developer", "a Backend Developer"];
  const [currentText, setCurrentText] = useState("");
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setDisplayIndex((prev) => (prev + 1) % texts.length); 
        }
      } else {
        if (charIndex < texts[displayIndex].length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      }
      setCurrentText(texts[displayIndex].substring(0, charIndex));
    };

    const typingSpeed = isDeleting ? 90 : 160; 
    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, displayIndex, texts]);

  return <span className="animated-text">{currentText}</span>;
};

export default TextChange;