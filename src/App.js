import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testamonials from "./components/Testamonials";


export default function App() {
  return (
    <main ClassName = "text-grey-400 bg-grey-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testamonials />
      <Contact />
    </main>
  );
}
