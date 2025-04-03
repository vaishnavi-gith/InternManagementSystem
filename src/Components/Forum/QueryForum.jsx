import React, { useState, useEffect } from "react";
import { FaQuestionCircle, FaRegCommentDots } from "react-icons/fa";
import mockData from "./QueryData.json"; // Importing mock data

const QueryForum = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const loggedInUser = "John Doe"; // Mock logged-in user

  useEffect(() => {
    setQuestions(mockData.questions); // Load mock data
  }, []);

  const handleQuestionSubmit = () => {
    if (newQuestion.trim() !== "") {
      const newQ = {
        id: questions.length + 1,
        question: newQuestion,
        askedBy: loggedInUser,
        answers: [],
      };
      setQuestions([...questions, newQ]);
      setNewQuestion("");
    }
  };

  const handleAnswerSubmit = (index, answer) => {
    if (answer.trim() !== "") {
      const updatedQuestions = [...questions];
      updatedQuestions[index].answers.push({ answer, answeredBy: loggedInUser });
      setQuestions(updatedQuestions);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-black rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
      <h2 className="text-center text-red-500 text-2xl font-bold mb-4">Query Forum</h2>
      
      {/* Post Question Section */}
      <div className="flex flex-col gap-4">
        <textarea
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Ask a question..."
          className="w-full h-20 p-3 border rounded-md resize-none"
        />
        <button
          onClick={handleQuestionSubmit}
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition"
        >
          Post
        </button>
      </div>

      {/* Questions List */}
      <div className="mt-6 space-y-4">
        {questions.length === 0 ? (
          <p className="text-gray-400 text-center">No questions yet. Be the first to ask!</p>
        ) : (
          questions.map((q, index) => (
            <div key={q.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="font-bold flex items-center gap-2">
                <FaQuestionCircle className="text-blue-500" /> {q.askedBy}: {q.question}
              </p>

              {/* Answers Section */}
              <div className="mt-3">
                {q.answers.length > 0 ? (
                  q.answers.map((ans, ansIndex) => (
                    <p key={ansIndex} className="bg-gray-300 p-2 rounded-md mt-2 flex items-center gap-2">
                      <FaRegCommentDots className="text-gray-600" /> <strong>{ans.answeredBy}:</strong> {ans.answer}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-500">No answers yet.</p>
                )}
              </div>

              {/* Answer Input */}
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Write your answer..."
                  className="w-full p-2 border rounded-md"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAnswerSubmit(index, e.target.value);
                      e.target.value = "";
                    }
                  }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default QueryForum;
