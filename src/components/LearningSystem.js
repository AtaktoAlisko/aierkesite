import React from "react";
import platformImg from "../assets/images/platform.png";
import liveImg from "../assets/images/tv.png";
import testImg from "../assets/images/karar.png";
import analysisImg from "../assets/images/spiker.png";
import curatorImg from "../assets/images/kurator1.png";
import supportImg from "../assets/images/support.png";
import FeatureCard from "./FeatureCard";

const TeachingSystemSection = () => {
  const features = [
    {
      id: 1,
      title: "Платформа",
      description: "Интерактивті платформада сабақтарды кез келген уақытта қарау",
      img: platformImg,
      backgroundImage: "bg-gradient-to-r from-blue-500 to-indigo-700",
    },
    {
      id: 2,
      title: "Тікелей эфир",
      description: "Әр сабақтан аптасына екі рет тікелей эфирге қатысу",
      img: liveImg,
      backgroundImage: "bg-gradient-to-r from-purple-500 to-pink-700",
    },
    {
      id: 3,
      title: "Көрініс қарар",
      description: "Апта сайын көрініс қарар анализдеу",
      img: testImg,
      backgroundImage: "bg-gradient-to-r from-green-500 to-teal-700",
    },
    {
      id: 4,
      title: "Спикерлермен кездесу",
      description: "Атақты тұлғалармен кездесу (блогер, актер, журналист)",
      img: analysisImg,
      backgroundImage: "bg-gradient-to-r from-yellow-500 to-orange-700",
    },
    {
      id: 5,
      title: "Куратор",
      description: "Куратор әр студентің үлгерімін қадағалап, қолдау көрсетеді",
      img: curatorImg,
      backgroundImage: "bg-gradient-to-r from-red-500 to-pink-700",
    },
    {
      id: 6,
      title: "Қолдау",
      description: "Сабақ барысында туындаған кез келген сұраққа жедел жауап",
      img: supportImg,
      backgroundImage: "bg-gradient-to-r from-gray-500 to-gray-900",
    },
  ];

  // Функция для разбивки массива на группы по 2 элемента
  const chunkArray = (array, size = 2) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const rows = chunkArray(features, 2);

  return (
    <section className="flex flex-col justify-center items-center p-24 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1231px] max-md:max-w-full mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
            Оқыту жүйесі
          </h2>
        </div>

        {rows.map((pair, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          const leftWidth = isEvenRow ? "w-[45%]" : "w-[55%]";
          const rightWidth = isEvenRow ? "w-[55%]" : "w-[45%]";

          return (
            <div className="mt-5 max-md:max-w-full" key={rowIndex}>
              <div className="flex gap-5 max-md:flex-col">
                <div className={`${leftWidth} max-md:w-full border border-gray-300 rounded-xl p-4 shadow-md`}>
                  <FeatureCard
                    backgroundImage={pair[0].backgroundImage}
                    title={pair[0].title}
                    description={pair[0].description}
                    img={pair[0].img}
                  />
                </div>
                {pair[1] && (
                  <div className={`${rightWidth} max-md:w-full border border-gray-300 rounded-xl p-4 shadow-md`}>
                    <FeatureCard
                      backgroundImage={pair[1].backgroundImage}
                      title={pair[1].title}
                      description={pair[1].description}
                      img={pair[1].img}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeachingSystemSection;
