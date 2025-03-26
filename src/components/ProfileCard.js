import React from "react";
import lll from "../assets/images/lll.jpeg"; // Путь к первому изображению
import llll from "../assets/images/llll.jpeg"; // Путь ко второму изображению
import l from "../assets/images/l.jpeg"; // Путь ко второму изображению

const ProfileCard = ({ name, title, instagramLink, imageUrl, altText }) => {
  return (
    <div className="text-center max-w-xs p-6 bg-gradient-to-t from-pink-100 to-pink-300 rounded-xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <img
        src={imageUrl}
        alt={altText}
        className="w-72 h-72 object-cover rounded-full mx-auto mb-6 border-4 border-pink-500"
      />
      <div>
        <h3 className="text-3xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-lg text-gray-600 mb-6">{title}</p>
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:underline text-lg"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

const Profiles = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 mt-16 md:space-y-0 space-y-12">
      <ProfileCard
        name="Айгуль Ешматова"
        title="Основатель DarMed"
        instagramLink="https://www.instagram.com/dr_yeshmatova?igsh=czEyZDV4eTBxcHhi"
        imageUrl={llll} // Используем lll.jpeg
        altText="Айгуль Ешматова"
      />
      <ProfileCard
        name="Дүйсенбаева Әйгерім"
        title="Акушер гинеколог репродуктолог"
        instagramLink="https://www.instagram.com/aygerim_duisenbayeva?igsh=ZzJ5OW81cTgycHZr"
        imageUrl={lll} // Используем llll.jpeg
        altText="Дүйсенбаева Әйгерім"
      />
      <ProfileCard
        name="Амир Айерке"
        title="Лучший студент года 2024"
        instagramLink=" https://www.instagram.com/aiiokin_?utm_source=ig_web_button_share_sheet&igsh=ODdmZWVhMTFiMw=="
        imageUrl={l} // Используем llll.jpeg
        altText="Дүйсенбаева Әйгерім"
      />
    </div>
  );
};

export default Profiles;
