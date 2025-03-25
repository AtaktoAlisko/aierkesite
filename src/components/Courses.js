import React from "react";
import mathImg from "../assets/images/debate.jpg";
import yershan from "../assets/images/orator.jpg";
import chemistryImg from "../assets/images/acter.jpg";


const Courses = () => {

    const handleNavClick = (sectionId) => {
  
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
  const courses = [
    {
      title: "Ораторлық өнер",
      img: yershan,
      desc: "Балаға ойын ашық әрі нақты жеткізуде таптырмас құрал",
    },
    {
      title: "Дебат",
      img: mathImg,
      desc: "Логикалық және сыни ойлауды, коммуникативті мәдениетті және көпшілік алдында сөйлеу дағдыларын дамыту",
    },
    {
      title: "Актерлық шеберлік",
      img: chemistryImg,
      desc: "Студент бойындағы қабілеттерінің көмегімен белгілі бір кезең мен уақытқа тән тірі образ(кейіп) жасау өнері",
    },
  ];

  return (
    <section
      id="courses"
      className="py-20 bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] text-white"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Заголовок */}
        <h2 className="text-5xl font-extrabold tracking-wide max-md:text-4xl">
          Курстар
        </h2>
        <p className="mt-3 text-lg text-gray-300 max-md:text-base">
          Біздің №1 тәлімгерлерімен
        </p>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              {/* Картинка сверху */}
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-60 object-cover rounded-t-3xl"
              />

              {/* Текстовое описание */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-indigo-800">
                  {course.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {course.desc}
                </p>
                <button
  onClick={() => handleNavClick("байланыс")}
   className="inline-block mt-5 bg-indigo-600 text-white font-medium py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300 shadow-md"
>
  Тіркелу
</button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
