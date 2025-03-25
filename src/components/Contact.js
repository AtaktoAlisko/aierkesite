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
    const message = `Есіміңіз: ${formData.name}\nТелефон: ${formData.phone}\nЖасыңыз: ${formData.age}`;

    // WhatsApp ссылка с заполненным сообщением
    const whatsappUrl = `https://wa.me/77714629004?text=${encodeURIComponent(
      message
    )}`;

    // Перенаправляем пользователя на WhatsApp
    window.open(whatsappUrl, "_blank");

    // Очищаем форму после отправки
    setFormData({ name: "", phone: "", age: "" });
  };

  return (
    <section className="relative bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-white">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Дәл қазір тіркеліңіз
            </h2>
            <p className="text-lg md:text-xl text-gray-100/90">
              Форманы толтырсаңыз, біздің менеджер сізге жақын арада хабарласады
            </p>
            <div className="h-1 w-20 bg-[#70f7ff] rounded-full mt-5"></div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-1 text-gray-800">
            <form onSubmit={handleSubmit} className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="md:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Есіміңіз
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2C0F9B] focus:border-transparent transition"
                    placeholder="Аты-жөніңіз"
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
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2C0F9B] focus:border-transparent transition"
                    placeholder="+7 (999) 999-99-99"
                    required
                  />
                </div>

                <div className="md:col-span-1">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Жасыңыз
                  </label>
                  <input
                    type="number"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2C0F9B] focus:border-transparent transition"
                    placeholder="Жасыңызды енгізіңіз"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 md:mt-8 flex justify-end">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#2C0F9B] hover:bg-[#3714c0] text-white font-medium py-3 px-8 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2C0F9B]"
                >
                  Тіркелемін
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
