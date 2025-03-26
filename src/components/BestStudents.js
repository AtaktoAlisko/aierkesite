import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-100 via-pink-300 to-pink-400 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-pink-800 mb-6">
          Наше местоположение
        </h2>

        {/* Вставка карты Яндекс */}
        <div className="bg-white dark:bg-gray-800 border-2 border-[#A22823] rounded-xl shadow-xl">
          <iframe
            src="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3A61ddea7a0ba580fb64459e24e364d386c5a13477761c9ab180dfe3ab626710f1"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen
            aria-hidden="false"
            title="Yandex Maps"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
