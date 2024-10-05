import React, { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";

const lessons = [
  {
    title: "Lesson 1: NGC 3324",
    questions: [
      {
        question: "NGC 3324 is an .......",
        options: ["open cluster", "Galaxy", "Planet"],
        answer: "open cluster",
      },
      {
        question: "NGC 3324 located ........... of the Carina Nebula",
        options: ["northwest", "Northeast", "Southwest"],
        answer: "northwest",
      },
      {
        question: "NGC 3324 was first catalogued by ........",
        options: ["James Dunlop", "Gabriela Mistral", "Jane Dunlop"],
        answer: "James Dunlop",
      },
      {
        question:
          "The distance between NGC 3324 and Earth is ....... light years",
        options: ["9,100", "10,000", "9,000"],
        answer: "9,100",
      },
    ],
  },
  {
    title: "Lesson 2: Carina Nebula",
    questions: [
      {
        question: "The Carina Nebula is primarily composed of what element?",
        options: ["Hydrogen", "Helium", "Oxygen"],
        answer: "Hydrogen",
      },
      {
        question: "The Carina Nebula is located in which galaxy?",
        options: ["Milky Way", "Andromeda", "Whirlpool"],
        answer: "Milky Way",
      },
      {
        question: "Which famous star is located in the Carina Nebula?",
        options: ["Betelgeuse", "Eta Carinae", "Sirius"],
        answer: "Eta Carinae",
      },
    ],
  },
];

function Test() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finishedLesson, setFinishedLesson] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (option) => {
    const currentLesson = lessons[currentLessonIndex];
    const currentQuestion = currentLesson.questions[currentQuestionIndex];

    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
    setAnswers([...answers, option]);
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    const currentLesson = lessons[currentLessonIndex];

    if (currentQuestionIndex < currentLesson.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      setFinishedLesson(true);
    }
  };

  const handleNextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setCurrentQuestionIndex(0);
      setFinishedLesson(false);
      setScore(0);
      setSelectedAnswer("");
      setAnswers([]);
    } else {
      alert("You have completed all lessons!");
    }
  };

  const handleRetakeLesson = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setCurrentLessonIndex(0);
    setFinishedLesson(false);
    setSelectedAnswer("");
    setAnswers([]);
  };

  const getFeedbackMessage = () => {
    const currentLesson = lessons[currentLessonIndex];
    if (score === currentLesson.questions.length)
      return "Amazing! You got all the answers right!";
    if (score >= currentLesson.questions.length / 2)
      return "Great job! You're quite knowledgeable!";
    return "Keep trying! You'll get it next time!";
  };

  const currentLesson = lessons[currentLessonIndex];
  const currentQuestion = currentLesson.questions[currentQuestionIndex];

  return (
    <section className="py-20 px-4 md:px-16">
      <Typography
        variant="h2"
        className="text-3xl md:text-4xl text-black text-center mb-12"
      >
        {currentLesson.title} - Test Your Knowledge
      </Typography>

      {!finishedLesson ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
          <Typography variant="h4" className="text-xl font-semibold mb-4">
            {currentQuestion.question}
          </Typography>
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(option)}
                color={
                  selectedAnswer === option
                    ? option === currentQuestion.answer
                      ? "green"
                      : "red"
                    : "purple"
                }
                variant="outlined"
                className="w-full"
                disabled={selectedAnswer !== ""}
              >
                {option}
              </Button>
            ))}
          </div>
          {selectedAnswer && (
            <div className="mt-4">
              <Button
                onClick={handleNextQuestion}
                color="purple"
                variant="outlined"
              >
                Next Question
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <Typography variant="h4" className="text-xl font-semibold mb-4">
            Your Score: {score} out of {currentLesson.questions.length}
          </Typography>
          <Typography className="text-gray-600 mb-4">
            {getFeedbackMessage()}
          </Typography>
          <div className="space-y-2">
            {currentLesson.questions.map((q, index) => (
              <div key={index} className="flex justify-between">
                <Typography className="text-gray-800">{q.question}</Typography>
                <Typography
                  className={`font-bold ${
                    answers[index] === q.answer
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {answers[index] || "Not answered"}
                </Typography>
              </div>
            ))}
          </div>
          <div className="mt-4">
            {currentLessonIndex < lessons.length - 1 ? (
              <Button
                onClick={handleNextLesson}
                color="purple"
                variant="outlined"
              >
                Next Lesson
              </Button>
            ) : (
              <Button
                onClick={handleRetakeLesson}
                color="purple"
                variant="outlined"
              >
                Retake Test
              </Button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Test;
