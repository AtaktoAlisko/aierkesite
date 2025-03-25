import React from "react";

const TestimonialCard = ({ imageSrc, name, testimonial, className = "" }) => {
  return (
    <article className={`flex flex-col px-11 pt-12 mx-auto w-full bg-white rounded-[30px] shadow-[0px_4px_35px_rgba(121,102,234,0.08)] max-md:px-5 max-md:pb-24 max-md:mt-8 max-md:max-w-full ${className}`}>
      <header className="flex gap-8 self-start text-2xl font-bold leading-relaxed text-indigo-950">
        <img
          src={imageSrc}
          alt={`${name} profile`}
          className="object-contain shrink-0 rounded-full aspect-square w-[65px]"
        />
        <h3 className="self-start mt-3 basis-auto">
          {name}
        </h3>
      </header>
      <p className="mt-11 text-lg leading-7 text-slate-500 max-md:mt-10 max-md:max-w-full">
        {testimonial}
      </p>
    </article>
  );
};

export default TestimonialCard;
