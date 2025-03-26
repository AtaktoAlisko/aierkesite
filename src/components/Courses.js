import React from "react";
import { Link } from "react-router-dom";
import reproductiveHealthImg from "../assets/images/kkkkk.webp";
import ivfImg from "../assets/images/kkk.jpg";
import testsImg from "../assets/images/kkkkkkk.avif";

const Goals = () => {
  return (
    <section
      id="goals"
      className="py-20 bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 text-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-pink-800 leading-tight max-md:text-4xl">
          Что такое репродуктивное здоровье?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-md:text-base">
          На нашем сайте вы найдете ответы на важнейшие вопросы:
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={reproductiveHealthImg}
              alt="Reproductive Health"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">
              Что такое репродуктивное здоровье?
            </h3>
            <p className="text-gray-600 text-lg">
              Узнайте больше о важности репродуктивного здоровья.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={ivfImg}
              alt="IVF"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">
              Как происходит ЭКО?
            </h3>
            <p className="text-gray-600 text-lg">
              Узнайте все подробности о процессе экстракорпорального
              оплодотворения.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={testsImg}
              alt="Tests"
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">
              Какие анализы важны для женского организма?
            </h3>
            <p className="text-gray-600 text-lg">
              Все, что нужно знать об анализах, которые могут повлиять на
              здоровье.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-lg text-gray-600 mb-6">
            Почему некоторые не могут забеременеть? На эти и другие вопросы вы
            сможете найти ответы на нашем сайте!
          </p>
          <Link
            to="/questions" // Use Link to navigate to QuestionsPage
            className="inline-block bg-pink-600 text-white font-medium py-3 px-6 rounded-full hover:bg-pink-700 transition duration-300 shadow-md"
          >
            Узнать больше
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Goals;
