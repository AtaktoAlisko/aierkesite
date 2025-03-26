import React from "react";
import { FiHeart } from "react-icons/fi";
import banner from "../assets/images/banner.png"; // Replace with your image

const HeroFertility = () => {
  return (
    <section className="relative pt-10 overflow-hidden text-gray-800">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300"></div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-5 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text part on left for large screens */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-800">
              Репродуктивное здоровье
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-pink-700 font-semibold">
            Сохрани здоровье, сохрани будущее
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl leading-relaxed mx-auto md:mx-0">
            Репродуктивное здоровье находится в центре внимания ученых всего
            мира. Под репродуктивным здоровьем подразумевается состояние полного
            физического и социального благополучия, а не только отсутствие
            заболеваний репродуктивной системы или нарушения ее функций.
          </p>
          <div className="flex justify-center md:justify-start mt-4">
            <a
              href="https://wa.me/77025707046?text=Здравствуйте,%20я%20хочу%20узнать%20больше%20о%20репродуктивном%20здоровье."
              className="inline-block bg-pink-600 hover:bg-pink-700 transition text-white font-semibold rounded-md py-3 px-8 text-base md:text-lg shadow-md hover:shadow-lg"
            >
              Узнать больше
            </a>
          </div>
        </div>

        {/* Image part on right for large screens */}
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex justify-center order-1 md:order-2">
          <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden bg-white shadow-2xl flex items-center justify-center relative">
            <img
              src={banner}
              alt="Fertility"
              className="w-full h-full object-cover"
            />
            {/* Decorative border around the image */}
            <div className="absolute inset-0 rounded-full border-4 border-pink-300 animate-pulse" />
          </div>

          {/* Example of cards on top of the image */}
          <div className="absolute top-[-10px] left-0">
            <div className="bg-white p-3 shadow-md rounded-md flex items-center hover:shadow-lg transition">
              <FiHeart className="text-pink-500 text-xl mr-2" />
              <div>
                <p className="text-sm font-semibold text-gray-700">The best</p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 right-[-10px] md:right-[-60px]">
            <div className="bg-white p-3 shadow-md rounded-md flex items-center mb-3 hover:shadow-lg transition">
              <FiHeart className="text-pink-500 text-xl mr-2" />
              <div>
                <p className="text-sm font-semibold text-gray-700">The best</p>
                <p className="text-xs text-gray-500">Women</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave at the bottom for a smooth transition */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.36c59.73,0,117.43,17.69,177.16,21.07,46,2.62,90.09-6.19,134.82-6.19,86.7,0,172.08,16.17,258.78,6.55,56.38-6.47,108.07-22.44,162.87-29.65,30.28-3.85,59.67-2,89.07,3.45v68.4H0V95.78c30.28-11.92,69.71-26.23,97.87-24.7C172.54,73.54,247.76,56.36,321.39,56.36Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroFertility;
