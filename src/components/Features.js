import React from "react";

const Features = () => {
  const features = [
    {
      title: "Тәжірибелі мұғалімдер",
      text: "Университет түлектері, халықаралық деңгейдегі ұстаздар",
    },
    {
      title: "Онлайн платформа",
      text: "Бейне сабақтар, интерактивті тапсырмалар және тестілер",
    },
    {
      title: "Жеке бақылау",
      text: "Әрбір оқушыға жеке жоспар құрылады, прогресс бақыланады",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-blue-900 leading-tight mb-12 max-md:text-4xl">
          Неге бізді таңдау керек?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="flex items-center justify-center mb-5">
                <span className="text-indigo-600 text-4xl">✓</span>
              </div>
              <h3 className="text-2xl font-semibold text-indigo-800 mb-3">
                {feat.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
