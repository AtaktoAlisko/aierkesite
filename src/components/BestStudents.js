import React, { useRef, useState, useEffect } from "react";
import images1 from "../assets/images/images1.PNG";
import images2 from "../assets/images/images2.PNG";
import images3 from "../assets/images/images3.PNG";
import images4 from "../assets/images/images4.PNG";
import images5 from "../assets/images/images5.PNG";
import images6 from "../assets/images/images6.PNG";
import images7 from "../assets/images/images7.PNG";
import images8 from "../assets/images/images8.PNG";
import images9 from "../assets/images/images9.PNG";

const BestStudents = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  const students = [
    {
      id: 1,
      name: "Еркежан Арқашқызы",
      subject: "Дебат",
      score: "2020",
      desc: "Сұхбаттасу: Пікірсайыс...",
      image: images1,
    },
    {
      id: 2,
      name: "Шырын Ерболқызы",
      subject: "Дебат",
      score: "2020",
      desc: "Сұхбаттасу: Қазақ тілі...",
      image: images2,
    },
    {
      id: 3,
      name: "Ернұр Медет",
      subject: "Дебат & Оратор",
      score: "2018",
      desc: "Сұхбаттасу: Журналистика...",
      image: images3,
    },
    {
      id: 4,
      name: "Ауел Алишер",
      subject: "Дебат",
      score: "2021",
      desc: "Сұхбаттасу: Менің өмірім...",
      image: images4,
    },
    {
      id: 5,
      name: "Нұрасыл Жасқайратұлы",
      subject: "Дебат",
      score: "2021",
      desc: "Сұхбаттасу: Өзгеріс...",
      image: images5,
    },
    {
      id: 6,
      name: "Шырын Шаяхмет",
      subject: "Дебат",
      score: "2019",
      desc: "Сұхбаттасу: Мамандық...",
      image: images6,
    },
    {
      id: 7,
      name: "Қайсар ",
      subject: "Дебат",
      score: "2019",
      desc: "Сұхбаттасу: КТЛ...",
      image: images7,
    },
    {
      id: 8,
      name: "Аяужан Жандосқызы",
      subject: "Дебат",
      score: "2022",
      desc: "Сұхбаттасу: Дебаттын...",
      image: images8,
    },
    {
      id: 9,
      name: "Аяна Айтанқызы",
      subject: "Дебат",
      score: "2022",
      desc: "Сұхбаттасу: Егерде...",
      image: images9,
    },
  ];

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftGradient(container.scrollLeft > 20);
      setShowRightGradient(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 20
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({
      top: 0,
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({
      top: 0,
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Біздің түлектер
          </h2>
        </div>

        <div className="relative">
          <div
            className={`absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
              showLeftGradient ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
              showRightGradient ? "opacity-100" : "opacity-0"
            }`}
          />

          <button
            onClick={scrollLeft}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-indigo-50 text-indigo-700 rounded-full p-3 z-20 shadow-lg border border-indigo-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
              showLeftGradient ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto px-2 py-4 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-thumb-indigo-200 scrollbar-track-transparent pb-8"
          >
            {students.map((student) => (
              <div
                key={student.id}
                className="snap-center w-full sm:w-72 md:w-80 bg-white rounded-2xl shadow-md hover:shadow-xl flex-shrink-0 transform hover:-translate-y-2 transition duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-indigo-600 text-white shadow-md">
                      {student.score}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 mb-1">
                    {student.name}
                  </h3>
                  <div className="inline-block px-2 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium mb-2">
                    {student.subject}
                  </div>
                  <p className="text-sm text-gray-600">{student.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-indigo-50 text-indigo-700 rounded-full p-3 z-20 shadow-lg border border-indigo-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
              showRightGradient
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestStudents;
