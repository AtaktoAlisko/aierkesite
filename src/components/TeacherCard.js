import React from "react";

const TeacherCard = ({ image, subject, name, students, experience }) => {
  return (
    <article className="flex flex-col items-center bg-white rounded-xl shadow-md p-5">
      <img
        src={image}
        alt={`${name} - ${subject}`}
        className="object-cover w-full rounded-xl mb-4 aspect-square"
      />
      <h2 className="text-xl font-semibold text-gray-900">{subject}</h2>
      <p className="text-sm text-gray-700 mt-1">{name}</p>
      <p className="text-sm text-gray-700 mt-1">{students}</p>
      <p className="text-sm text-gray-700 mt-1">{experience}</p>
    </article>
  );
};

export default TeacherCard;
