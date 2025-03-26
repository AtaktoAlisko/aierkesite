import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Формирование сообщения для WhatsApp
    const message = `Ваше имя: ${formData.name}\nТелефон: ${formData.phone}\nВозраст: ${formData.age}`;

    // WhatsApp ссылка с заполненным сообщением
    const whatsappUrl = `https://wa.me/77025707046?text=${encodeURIComponent(
      message
    )}`;

    // Перенаправляем пользователя на WhatsApp
    window.open(whatsappUrl, "_blank");

    // Очищаем форму после отправки
    setFormData({ name: "", phone: "", age: "" });
  };

  return (
    <section className="relative bg-gradient-to-br from-pink-100 via-pink-300 to-pink-400 py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/mnt/data/Снимок экрана 2025-03-26 в 10.35.38.png')] bg-cover bg-center opacity-60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-pink-800">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Зарегистрируйтесь прямо сейчас
            </h2>
            <p className="text-lg md:text-xl text-gray-100/90">
              Заполнив форму, наш менеджер свяжется с вами в ближайшее время
            </p>
            <div className="h-1 w-20 bg-[#70f7ff] rounded-full mt-5 mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 text-gray-800">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                    placeholder="Ваше имя"
                    required
                  />
                </div>

                <div className="md:col-span-1">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                    placeholder="+7 (999) 999-99-99"
                    required
                  />
                </div>

                <div className="md:col-span-1">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Ваш возраст
                  </label>
                  <input
                    type="number"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                    placeholder="Введите ваш возраст"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 md:mt-8 flex justify-end">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-pink-800 font-medium py-3 px-8 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600"
                >
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
