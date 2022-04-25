import React from "react";
import Home from "../Home/home";
import Nav from "../Nav/nav";
import About from "../About/about";
import Skills from "../Skills/skills";
import Quali from "../Quali/quali";
import Projects from "../Services/services";
import Contact from "../Contact/contact";
import Footer from "../Footer/footer";

const Main = () => {
  return (
    <>
      <div className="App">
        <header className="header" id="header">
          <Nav></Nav>
        </header>
        <main className="main">
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Quali></Quali>
          <Projects></Projects>
          <Contact></Contact>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Main;
