import React, { useEffect, useState } from "react";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const phrases = ["ARTIFICIAL INTELLIGENCE WECLOMES YOU"];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let typingTimeout;

    const type = () => {
      if (currentIndex === phrases.length) {
        currentIndex = 0;
      }

      const currentPhrase = phrases[currentIndex];
      currentText = currentPhrase.substring(0, currentText.length + 1);
      setText(currentText);

      if (currentText === currentPhrase) {
        clearTimeout(typingTimeout);
        setTimeout(() => {
          typingTimeout = setTimeout(erase, 1500);
        }, 1000);
      } else {
        typingTimeout = setTimeout(type, 100);
      }
    };

    const erase = () => {
      if (currentText.length === 0) {
        currentIndex++;
        setTimeout(type, 500);
      } else {
        currentText = currentText.substring(0, currentText.length - 1);
        setText(currentText);
        typingTimeout = setTimeout(erase, 50);
      }
    };

    typingTimeout = setTimeout(type, 1000);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <div>
      <h1 id="typing-text" className="font-bold text-transparent text-4xl lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-700 via-blue-700 to-red-800">
        {text}
      </h1>
    </div>
  );
};

export default TypingEffect;
