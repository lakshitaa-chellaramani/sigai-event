import React, { useState, useRef } from "react";

export default function QuestionAnswer() {
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const h1Ref = useRef(null);
  let interval = null;
  const handleMouseOver = () => {
    const targetText = h1Ref.current.dataset.value; // Replace with your initial text
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      h1Ref.current.textContent = targetText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return targetText[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= targetText.length) {
        clearInterval(interval);
      }

      iteration += 1;
    }, 30);
  };

  // const handleMouseLeave = () => {
  //   clearInterval(interval);
  //   h1Ref.current.textContent = h1Ref.current.dataset.value || 'Your Text Here';
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 my-20">
      <div className="w-full md:w-4/6 lg:w-3/5 bg-gray-900 p-4 border border-gray-900 rounded-l-md">
        {/* Question Title */}
        <h1
          onMouseOver={handleMouseOver}
          ref={h1Ref}
          data-value="Your Text Here"
          className="mb-4 font-bold text-transparent text-3xl lg:text-6xl bg-clip-text bg-gradient-to-r from-teal-300 to-blue-600 text-center"
        >
          QUESTION TITLE
        </h1>

        {/* Image */}
        <img
          src="https://via.placeholder.com/150" // Replace with your image URL
          alt="Question"
          className="w-full mb-4"
        />

        {/* Answer Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Answer..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md"
            value={answer}
            onChange={handleAnswerChange}
          />
          
        </div>
        <div className="flex justify-center">
        <button className="text-black bg-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
