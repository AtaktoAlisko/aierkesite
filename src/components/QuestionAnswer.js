import React, { useState } from "react";

const QuestionAnswer = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <div
        className="text-lg font-semibold cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </div>
      {isOpen && (
        <div className="text-gray-700 mt-2">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionAnswer;
