// src/App.jsx
import { useState, useEffect } from "react";
import { CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, Home, Shuffle, Lock, AlertCircle } from "lucide-react";
// import quizData from './computerData.js';
// import quizData from './generalScienceData';
// import quizData from './englishData';
// import quizData from './pastPaperData.js';
// import quizData from './organizationsData.js';
import quizData from './fiaPastPApers.js';
// import quizData from './pakistanData.js';
// import quizData from './gkData.js'

// Function to shuffle array and get random questions
const getRandomQuestions = (questions, count = 100) => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export default function App() {
  // ============ CONFIGURATION ============
  const QUESTIONS_PER_QUIZ = 100;

  // ============ STATE ============
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const allQuestions = quizData.questions || [];
  const totalAvailableQuestions = allQuestions.length;

  // ============ FUNCTIONS ============
  const startNewQuiz = () => {
    const randomQuestions = getRandomQuestions(allQuestions, QUESTIONS_PER_QUIZ);
    setQuizQuestions(randomQuestions);
    setQuizStarted(true);
    setShowStartScreen(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizFinished(false);
    setShowExitConfirm(false);
  };

  const handleSelect = (index) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    const question = quizQuestions[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;
    if (isCorrect) setScore(score + 1);
    setAnswers([...answers, { selected: selectedAnswer, correct: isCorrect }]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setShowExitConfirm(false);
    startNewQuiz();
  };

  const goHome = () => {
    setShowExitConfirm(false);
    setShowStartScreen(true);
    setQuizStarted(false);
    setQuizFinished(false);
  };

  const handleBackAttempt = () => {
    // Only show confirm if quiz has started and not finished
    if (quizStarted && !quizFinished) {
      setShowExitConfirm(true);
    } else {
      goHome();
    }
  };

  const questions = quizQuestions;
  const question = questions[currentQuestion] || null;
  const progress = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;
  const totalQuestions = questions.length;

  useEffect(() => {
    // Auto-start disabled
  }, []);

  // ============ EXIT CONFIRMATION MODAL ============
  if (showExitConfirm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 sm:p-8 text-center">
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Exit Quiz?</h2>
          <p className="text-gray-600 mb-6">
            You haven't completed the quiz yet. Your progress will be lost if you exit now.
          </p>
          <div className="flex flex-col xs:flex-row gap-3">
            <button
              onClick={() => setShowExitConfirm(false)}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Continue Quiz
            </button>
            <button
              onClick={goHome}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Exit Anyway
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============ START SCREEN ============
  if (showStartScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-5 sm:p-8 text-center">
          <div className="mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-3xl sm:text-4xl">🧠</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">
              {quizData.title || "Knowledge Quiz"}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">
              {quizData.description || "Test your knowledge with random questions!"}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 text-left">
            <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-200 text-sm sm:text-base">
              <span className="text-gray-600">Total Questions</span>
              <span className="font-semibold text-indigo-600">{totalAvailableQuestions}</span>
            </div>
            <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-200 text-sm sm:text-base">
              <span className="text-gray-600">Per Quiz</span>
              <span className="font-semibold text-indigo-600">{QUESTIONS_PER_QUIZ}</span>
            </div>
            <div className="flex justify-between items-center py-1.5 sm:py-2 text-sm sm:text-base">
              <span className="text-gray-600">Random Selection</span>
              <span className="font-semibold text-green-600">✓</span>
            </div>
          </div>

          <button
            onClick={startNewQuiz}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            <Shuffle className="w-4 h-4 sm:w-5 sm:h-5" />
            Start Random Quiz
          </button>

          <p className="text-[10px] sm:text-xs text-gray-400 mt-3 sm:mt-4">
            {QUESTIONS_PER_QUIZ} random questions from {totalAvailableQuestions} available
          </p>
        </div>
      </div>
    );
  }

  // ============ LOADING SCREEN ============
  if (!quizStarted && !questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
          <div className="animate-pulse">
            <div className="w-16 h-16 mx-auto bg-indigo-200 rounded-full mb-4"></div>
            <div className="h-6 bg-indigo-200 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-indigo-100 rounded w-1/2 mx-auto"></div>
          </div>
          <p className="text-gray-500 mt-4">Loading questions...</p>
        </div>
      </div>
    );
  }

  // ============ RESULTS SCREEN ============
  if (quizFinished) {
    const percentage = Math.round((score / totalQuestions) * 100);
    const message =
      percentage >= 80 ? "Excellent! 🎉" :
      percentage >= 60 ? "Good job! 👍" :
      percentage >= 40 ? "Not bad! 📚" :
      "Keep practicing! 💪";

    const getEmoji = () => {
      if (percentage >= 80) return "🏆";
      if (percentage >= 60) return "🌟";
      if (percentage >= 40) return "📖";
      return "💪";
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-4 sm:p-8">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <button
              onClick={goHome}
              className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-indigo-600 transition-colors text-xs sm:text-sm"
            >
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Home</span>
            </button>
            <button
              onClick={handleRestart}
              className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-indigo-600 transition-colors text-xs sm:text-sm"
            >
              <Shuffle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">New Quiz</span>
            </button>
          </div>

          <div className="text-center">
            <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">{getEmoji()}</div>
            <Trophy className="w-14 h-14 sm:w-20 sm:h-20 mx-auto text-yellow-500 mb-3 sm:mb-4" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2">Quiz Complete!</h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">{message}</p>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-4 sm:p-6 text-white mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm uppercase tracking-wide opacity-90">Your Score</p>
              <p className="text-3xl sm:text-5xl font-bold my-1 sm:my-2">{score} / {totalQuestions}</p>
              <p className="text-xl sm:text-2xl">{percentage}%</p>
            </div>

            <div className="text-left mb-4 sm:mb-6 max-h-48 sm:max-h-64 overflow-y-auto">
              <h3 className="font-semibold text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">Review:</h3>
              {questions.map((q, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5 sm:mb-2 p-2 rounded-lg bg-gray-50">
                  {answers[i]?.correct ? (
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <span className="text-xs sm:text-sm text-gray-700">{q.question}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col xs:flex-row gap-2 sm:gap-3">
              <button
                onClick={handleRestart}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
              >
                <Shuffle className="w-4 h-4 sm:w-5 sm:h-5" />
                New Random Quiz
              </button>
              <button
                onClick={goHome}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
              >
                <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============ QUIZ SCREEN ============
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-4 sm:p-8">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <button
            onClick={handleBackAttempt}
            className="flex items-center gap-1 sm:gap-2 text-gray-500 hover:text-red-600 transition-colors text-xs sm:text-sm"
          >
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Exit Quiz</span>
          </button>
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
            <div className="text-xs sm:text-sm text-gray-500 font-medium">
              {currentQuestion + 1} / {totalQuestions}
            </div>
          </div>
        </div>

        <div className="mb-3 sm:mb-4">
          <h1 className="text-base sm:text-xl font-bold text-gray-800 truncate">{quizData.title || "Quiz"}</h1>
          {quizData.description && (
            <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5 sm:mt-1 truncate">{quizData.description}</p>
          )}
        </div>

        <div className="mb-4 sm:mb-6">
          <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
            <span>Score: {score}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 sm:h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mb-4 sm:mb-6">
          <h2 className="text-base sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 leading-relaxed">
            {question?.question}
          </h2>

          <div className="space-y-2 sm:space-y-3">
            {question?.options.map((option, index) => {
              let buttonClass = "w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all text-sm sm:text-base ";

              if (showResult) {
                if (index === question.correctAnswer) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (index === selectedAnswer) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  buttonClass += "border-gray-200 bg-gray-50 text-gray-500";
                }
              } else if (selectedAnswer === index) {
                buttonClass += "border-indigo-500 bg-indigo-50 text-indigo-800";
              } else {
                buttonClass += "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  disabled={showResult}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 sm:gap-3">
                      <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-current flex items-center justify-center font-semibold text-xs sm:text-sm flex-shrink-0">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-sm sm:text-base break-words">{option}</span>
                    </span>
                    {showResult && index === question.correctAnswer && (
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    )}
                    {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                      <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {showResult && question?.explanation && (
          <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl text-sm sm:text-base ${
            selectedAnswer === question.correctAnswer
              ? "bg-green-50 border border-green-200"
              : "bg-blue-50 border border-blue-200"
          }`}>
            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-0.5 sm:mb-1">
              {selectedAnswer === question.correctAnswer ? "✅ Correct!" : "💡 Explanation:"}
            </p>
            <p className="text-xs sm:text-sm text-gray-700">{question.explanation}</p>
          </div>
        )}

        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-2.5 sm:py-3 rounded-xl transition-colors text-sm sm:text-base"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
          >
            {currentQuestion < totalQuestions - 1 ? "Next Question" : "See Results"}
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>
    </div>
  );
}