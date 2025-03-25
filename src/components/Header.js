// src/components/Header.jsx
import React, { useState, useEffect, useCallback } from "react";
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

  const navItems = ["Курстар", "Оқу жүйесі", "Мұғалімдер", "Байланыс"];

  return (
    <header
      className={clsx(
        "fixed w-full z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled ? "py-3 bg-white/95 shadow-sm" : "py-4 bg-indigo-950/90"
      )}
    >
      <div className="container mx-auto px-4 sm:px-12 md:px-2 lg:px-4 xl:px-5 flex items-center justify-between">
        {/* Логотип */}
        <a href="/" className="text-xl md:text-2xl font-bold">
          <span className={clsx(isScrolled ? "text-blue-900" : "text-white")}>
            YerkinOner
            <span className={isScrolled ? "text-blue-600" : "text-blue-300"}>
              Academy
            </span>
          </span>
        </a>

        {/* Навигация (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className={clsx(
                "font-medium transition-colors focus:outline-none",
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-blue-100 hover:text-white"
              )}
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          onClick={() => handleNavClick("байланыс")}
          className={clsx(
            "hidden md:block font-medium px-6 py-3 rounded-full transition-all",
            isScrolled
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-white hover:bg-blue-50 text-blue-800"
          )}
        >
          Тіркелу
        </button>

        {/* Кнопка мобильного меню */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={clsx(
            "md:hidden p-2 rounded-md focus:outline-none",
            isScrolled
              ? "text-gray-700 focus:ring-2 focus:ring-blue-600/30"
              : "text-white focus:ring-2 focus:ring-white/30"
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
            "md:hidden absolute top-full left-0 w-full shadow-lg border-t animate-fade-in-down flex flex-col items-center",
            isScrolled
              ? "bg-white border-gray-100"
              : "bg-indigo-950 border-indigo-900"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-3 w-full text-center">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={clsx(
                  "block px-4 py-2 rounded-lg transition focus:outline-none",
                  isScrolled
                    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    : "text-blue-100 hover:bg-indigo-900 hover:text-white"
                )}
              >
                {item}
              </button>
            ))}
            <div className="px-4 pt-2 pb-1">
              {/* Кнопка "Тіркелу" (CTA) для мобильного меню */}
              <button
                onClick={() => handleNavClick("тіркелу")}
                className={clsx(
                  "block w-full text-center font-medium py-3 rounded-full transition",
                  isScrolled
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white hover:bg-blue-50 text-blue-800"
                )}
              >
                Тіркелу
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
