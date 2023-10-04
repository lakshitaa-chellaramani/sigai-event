import React, { useEffect, useState } from "react";
import Navbar from "../Homepage/Navbar";
import QuestionAnswer from "../Question-answer/QuestionAnswer";
import ButtonRow from "../Question-answer/ButtonRow";
export default function Question() {
  const questions = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
      imageURL:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answer: "William Shakespeare",
      imageURL: "https://example.com/shakespeare.jpg",
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
      imageURL: "https://example.com/jupiter.jpg",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      answer: "Carbon dioxide (CO2)",
      imageURL: "https://example.com/plant.jpg",
    },
    {
      question: "Who painted the 'Mona Lisa'?",
      answer: "Leonardo da Vinci",
      imageURL: "https://example.com/monalisa.jpg",
    },
    {
      question: "What is the chemical symbol for water?",
      answer: "H2O",
      imageURL: "https://example.com/water.jpg",
    },
  ];
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(
    new Array(6).fill(false) // Initialize with `false` for 6 questions (adjust the number as needed)
  );
  const markQuestionAsSubmitted = (questionIndex) => {
    const updatedArray = [...isQuestionSubmitted]; // Create a copy of the array
    updatedArray[questionIndex] = true; // Set the specific question to submitted
    setIsQuestionSubmitted(updatedArray); // Update the state
    console.log(isQuestionSubmitted)
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const changeQuestion = (newQuestion) =>{
    setCurrentQuestion(newQuestion)
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 my-20">
        <div className="w-full md:w-4/6 lg:w-3/5 bg-gray-900 p-4 border border-gray-900 rounded-l-md">
          <ButtonRow currentQuestion = {currentQuestion} changeQuestion = {changeQuestion} isQuestionSubmitted = {isQuestionSubmitted} />
          <QuestionAnswer question={questions[currentQuestion]} markQuestionAsSubmitted = {markQuestionAsSubmitted} currentQuestion = {currentQuestion}/>
        </div>
      </div>
    </div>
  );
}
