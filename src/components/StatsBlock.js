import React from "react";

const StatsBlock = () => {
  return (
    <section className="pt-24 pb-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 text-center">
        {/* Заголовок */}
        <h2 className="text-5xl font-extrabold text-blue-900 leading-tight max-md:text-4xl">
          Жетісу облысындағы <br />
          <span className="text-indigo-700">№1 білім беру орталығы</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-md:text-base">
          Бізбен бірге болашаққа сенімді қадам жасаңыз
        </p>

        {/* Статистика */}
        <div className="mt-14 bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] rounded-3xl shadow-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Карточка */}
            {[
              { value: "18 000", label: "оқушы 11 жылда" },
              { value: "90%", label: "республика жүлдегерлері" },
              { value: "№1", label: "алғашқылардың бірі бол" },
            ].map((stat, index) => (
              <div key={index} className="p-6 flex flex-col items-center">
                <p
                  className="text-5xl font-black mb-3 text-transparent bg-clip-text
                           bg-gradient-to-r from-green-300 via-blue-300 to-purple-400
                           drop-shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  {stat.value}
                </p>
                <p className="text-gray-200 text-lg md:text-xl tracking-wide">
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
