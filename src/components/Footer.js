import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#04016C] via-[#2C0F9B] to-[#4A16BD] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top section with logo and info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-3xl font-semibold mb-3">YerkinOnerAcademy</div>
            <p className="text-sm mb-2">Ormanovva@gmail.com</p>
            <p className="text-sm mb-2">+7 771 462 9004</p>
            <p className="text-sm mb-2">Талдықорған қаласы, Абылайхана 221</p>
          </div>

          {/* Social Media and Links */}
          <div className="flex flex-col md:items-center space-y-4 items-center">
            <div className="flex space-x-6 mb-4">
              <a
                href="https://instagram.com/yerkin_oner_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://wa.me/77714629004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href="https://t.me/77714629004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition transform hover:scale-110"
                aria-label="Telegram"
              >
                <FaTelegram size={28} />
              </a>
              <a
                href="https://wa.me/77714629004"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition transform hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok size={28} />
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="/privacy"
                className="block text-sm hover:text-teal-300 transition"
              >
                Біздің желілер
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-indigo-700 pt-4 mt-6">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} YerkinOnerAcademy. Барлық құқықтар
            қорғалған.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
