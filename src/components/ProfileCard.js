import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import clsx from "clsx";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (sectionId) => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    "Актуальные данные",
    "Репродуктивное здоровье",
    "Вопросы",
    "Данные",
  ];

  return (
    <header
      className={clsx(
        "fixed w-full z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled
          ? "py-3 bg-white/95 shadow-sm"
          : "py-4 bg-gradient-to-r from-pink-500 to-pink-600"
      )}
    >
      <div className="relative container mx-auto px-4 sm:px-12 md:px-2 lg:px-4 xl:px-5 flex items-center justify-between">
        <a
          href="/"
          className={clsx(
            "text-xl md:text-2xl font-bold transition-colors",
            isScrolled ? "text-pink-600" : "text-white"
          )}
        >
          Reproductive <span className="ml-1">Health</span>
        </a>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() =>
                handleNavClick(item.toLowerCase().replace(" ", "-"))
              }
              className={clsx(
                "font-medium transition-colors focus:outline-none",
                isScrolled
                  ? "text-gray-700 hover:text-pink-500"
                  : "text-pink-100 hover:text-white"
              )}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Use Link here instead of button */}
        <Link
          to="/contact"
          className={clsx(
            "hidden md:block font-medium px-6 py-3 rounded-full transition-all",
            isScrolled
              ? "bg-pink-500 hover:bg-pink-600 text-white"
              : "bg-white hover:bg-pink-100 text-pink-700"
          )}
        >
          Регистрация
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={clsx(
            "md:hidden p-2 rounded-md focus:outline-none transition-colors",
            isScrolled
              ? "text-pink-600 focus:ring-2 focus:ring-pink-300"
              : "text-white focus:ring-2 focus:ring-white/50"
          )}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div
          className={clsx(
            "md:hidden absolute top-full left-0 w-full shadow-lg border-t flex flex-col items-center",
            isScrolled
              ? "bg-white border-gray-100"
              : "bg-pink-600 border-pink-400"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-3 w-full text-center">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  handleNavClick(item.toLowerCase().replace(" ", "-"))
                }
                className={clsx(
                  "block px-4 py-2 rounded-lg transition focus:outline-none",
                  isScrolled
                    ? "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    : "text-pink-100 hover:bg-pink-500 hover:text-white"
                )}
              >
                {item}
              </button>
            ))}
            <div className="px-4 pt-2 pb-1">
              {/* Use Link for mobile menu */}
              <Link
                to="/contact"
                className={clsx(
                  "hidden md:block font-medium px-6 py-3 rounded-full transition-all",
                  isScrolled
                    ? "bg-pink-500 hover:bg-pink-600 text-white"
                    : "bg-white hover:bg-pink-100 text-pink-700"
                )}
              >
                Регистрация
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
