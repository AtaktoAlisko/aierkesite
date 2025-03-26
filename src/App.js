import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Goals from "./components/Courses"; // Make sure this path is correct
import Features from "./components/Features";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import StatsBlock from "./components/StatsBlock";
import BestStudents from "./components/BestStudents";
import Contact from "./components/Contact";
import ProfileCard from "./components/ProfileCard"; // Предполагается, что компонент ProfileCard находится в отдельном файле

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Hero />

        <section id="актуальные-данные">
          <StatsBlock />
        </section>
        <section id="репродуктивное-здоровье">
          <Courses />
        </section>
        <section id="вопросы">
          <Features />
        </section>
        <ProfileCard />
        <BestStudents />
        <Contact />
        <section id="данные">
          <Footer />
        </section>
      </main>

      {/* <Routes>
        <Route path="/" element={<Goals />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes> */}
    </Router>
  );
}

export default App;
