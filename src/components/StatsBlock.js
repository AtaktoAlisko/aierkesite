import React from "react";

const StatsBlock = () => {
  return (
    <section className="pt-16 pb-24 bg-gradient-to-b from-pink-50 via-pink-100 to-pink-200">
      <div className="container mx-auto px-6 text-center">
        {/* Заголовок */}
        <h2 className="text-5xl font-extrabold text-pink-800 leading-tight max-md:text-4xl">
          Актуальные данные <br />
          <span className="text-pink-600">по репродуктивному здоровью</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-md:text-base">
          38 женщин погибли от насилия в семье в Казахстане в прошлом году.
        </p>

        {/* Статистика */}
        <div className="mt-14 bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 rounded-3xl shadow-xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Карточка */}
            {[
              { value: "3-е место", label: "по числу абортов в стране" },
              { value: "6 из 10", label: "семей сталкиваются с бесплодием" },
              { value: "31 тыс.", label: "людей живут с ВИЧ в Казахстане" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 flex flex-col items-center bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <p
                  className="text-5xl font-bold mb-3 text-transparent bg-clip-text
                           bg-gradient-to-r from-yellow-400 to-pink-500"
                >
                  {stat.value}
                </p>
                <p className="text-gray-600 text-lg md:text-xl tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBlock;
