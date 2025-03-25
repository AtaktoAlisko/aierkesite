import React from "react";
import "./index.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StatsBlock from "./components/StatsBlock";
import LearningSystem from "./components/LearningSystem";
import TeacherShowcase from "./components/TeacherShowCase";
import BestStudents from "./components/BestStudents";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBlock />
        <section id="курстар">
          <Courses />
        </section>
        <section id="оқу жүйесі">
          <LearningSystem />
        </section>
        <section id="мұғалімдер">
          <TeacherShowcase />
        </section>
        <Features />
        <Testimonials />
        <BestStudents />
        <section id="байланыс">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
