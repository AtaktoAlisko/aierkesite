import React from "react";
import TestimonialCard from "./TestimonialsCard";
import mathImg from "../assets/images/image1.jpg";
import img3 from "../assets/images/icon.jpg";
import img2 from "../assets/images/image2.jpg";

const testimonials = [
  {
    id: 1,
    name: "Арсен Орынбас",
    imageSrc: mathImg,
    testimonial:
      "Мен дебат және ораторлық өнер курсын өткеннен кейін кез келген ортада өз ойымды еркін әрі сенімді жеткізуге дағдыландым. Жаттығулар өте қызықты, ал тәжірибелі тәлімгерлер менің қабілетімді ашуға көмектесті. Қазір әртүрлі шараларда сөз сөйлеуден еш қорықпаймын!",
  },
  {
    id: 2,
    name: "Айдос Мұрат",
    imageSrc: img2,
    testimonial:
      "Бұл курс ораторлық өнерімнің ғана емес, логикалық ойлауымның да дамуына зор ықпал етті. Практикалық тапсырмалар мен пікірталастар арқылы өзімнің көшбасшылық қабілетімді жетілдірдім. Енді кез келген аудиторияны баурап алу мен үшін оңай!",
  },
  {
    id: 3,
    name: "Айгерім Еркін",
    imageSrc: img3,
    testimonial:
      "Дебат және ораторлық өнер курсы – өзімді жан-жақты дамытудың таптырмас мүмкіндігі болды. Оқу барысында айтқан сөзімнің мәнін нақты жеткізуді, дауыс ырғағын дұрыс қолдануды және тыңдаушылармен байланыс орнатуды үйрендім. Енді маңызды іс-шараларда сөйлеуге сенімдімін.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-blue-900 leading-tight mb-14 max-md:text-4xl">
          Пікірлер
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              imageSrc={testimonial.imageSrc}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 text-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
