import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-500 to-pink-600 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top section with logo and info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-3xl font-semibold mb-3">
              Reproductive Health
            </div>
            <p className="text-sm mb-2">amirova_aierke@mail.ru</p>
            <p className="text-sm mb-2">+7 702 570 7046</p>
            <p className="text-sm mb-2">Город Алматы , Улица Каппарова, 392</p>
          </div>

          {/* Social Media and Links */}
          <div className="flex flex-col md:items-center space-y-4 items-center">
            <div className="flex space-x-6 mb-4">
              <a
                href="https://www.instagram.com/ngc_clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://wa.me/77025707046"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={30} />
              </a>
              <a
                href="https://t.me/77025707046"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition transform hover:scale-110"
                aria-label="Telegram"
              >
                <FaTelegram size={30} />
              </a>
              <a
                href="https://2gis.kz/almaty/firm/70000001067246610"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition transform hover:scale-110"
                aria-label="2GIS"
              >
                <FaMapMarkerAlt size={30} />
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="/privacy"
                className="block text-sm hover:text-teal-300 transition"
              >
                Наши сети
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-indigo-700 pt-4 mt-6">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Reproductive Health. Все права
            защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
