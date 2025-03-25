"use client";

import React from "react";
import TeacherCard from "./TeacherCard";
import img1 from "../assets/images/IMG_2381.png";
import img2 from "../assets/images/IMG_0599.PNG";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.PNG";
import img6 from "../assets/images/img6.png";

const teachers = [
  {
    image: img1,
    subject: "Дебат және Ораторлық өнер",
    name: "Ержан Дәулетбаев",
    students: "8500+ оқушы",
    experience: "тәжірибесі: 11 жыл",
  },
  {
    image: img2,
    subject: "Дебат",
    name: "Орманова Еркежан",
    students: "2530 оқушы",
    experience: "тәжірибесі: 6 жыл",
  },
  {
    image: img3,
    subject: "Дебат",
    name: "Омархан Мейрамбек",
    students: "1900+ оқушы",
    experience: "тәжірибесі: 7 жыл",
  },
  {
    image: img4,
    subject: "Дебат",
    name: "Байбол Жанбол",
    students: "3000 оқушы",
    experience: "тәжірибесі: 7 жыл",
  },
  {
    image: img5,
    subject: "Дебат",
    name: "Мекзам Нұржан",
    students: "1853 оқушы",
    experience: "тәжірибесі: 6 жыл",
  },
  {
    image: img6,
    subject: "Дебат",
    name: "Назым Мұратқызы",
    students: "3446 оқушы",
    experience: "тәжірибесі: 8 жыл",
  },
];

const TeacherShowcase = () => {
  return (
    <section className="flex flex-col items-center px-8 py-24 w-full bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] text-white max-md:px-5">
      <div className="w-full max-w-6xl text-center">
        <h1 className="text-6xl font-extrabold leading-tight tracking-wide max-md:text-4xl">
          Шыңға жеткізетін <br />{" "}
          <span className="text-yellow-400">үздік тәлімгерлер</span>
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-md:text-lg">
          Бізбен бірге оқып, ең үздік тәлімгерлерден білім алыңыз.
        </p>
      </div>

      {/* Гибкая сетка карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl w-full">
        {teachers.map((teacher, index) => (
          <TeacherCard
            key={index}
            {...teacher}
            className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center"
          />
        ))}
      </div>
    </section>
  );
};

export default TeacherShowcase;
