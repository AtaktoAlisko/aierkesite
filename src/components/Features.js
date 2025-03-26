import React from "react";

const Features = () => {
  const questions = [
    {
      title: "Что такое репродуктивное здоровье?",
      text: "Репродуктивное здоровье включает в себя состояние полного физического и социального благополучия в сфере репродукции, а не только отсутствие заболеваний или нарушений в репродуктивной системе.",
    },
    {
      title: "Почему девушки и женщины должны ежемесячно быть у гинеколога?",
      text: "Регулярные посещения гинеколога помогают предотвратить развитие заболеваний, выявить возможные патологии на ранней стадии и поддерживать здоровье репродуктивной системы.",
    },
    {
      title: "Почему мужчинам важно ходить к андрологу?",
      text: "Андролог помогает диагностировать и лечить заболевания мужской репродуктивной системы, что важно для поддержания здоровья и предотвращения бесплодия.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-pink-100 via-pink-300 to-pink-400"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-pink-800 leading-tight mb-12 max-md:text-4xl">
          Вопросы, на которые вы можете получить ответы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {questions.map((question, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="flex items-center justify-center mb-5">
                <span className="text-pink-600 text-4xl">✓</span>
              </div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-3">
                {question.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {question.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
