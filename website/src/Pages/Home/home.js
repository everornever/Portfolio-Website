import React from "react";
import "../Main/Main.css";
import "../Home/home.css";
import image from "../../Img/man.svg";

function Home() {
  return (
    <>
      <section className="home section" id="home">
        <div className="home_container container grid">
          <div className="home_content grid">
            <div className="home_social">
              <a
                href="https://github.com/everornever"
                target="_blank"
                rel="noreferrer"
                className="home_social-icon"
              >
                <i className="uil uil-github-alt"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/leon-kling-692570210/"
                target="_blank"
                rel="noreferrer"
                className="home_social-icon"
              >
                <i className="uil uil-linkedin"></i>
              </a>
            </div>
            <div className="home_img">
              <img src={image} alt="" />
            </div>
            <div className="home_data">
              <h1 className="home_title">Hi, I'am Leon</h1>
              <h3 className="home_subtitle">Frontend developer</h3>
              <p className="home_description">
                Experience in web & IOS design and development.
              </p>
              <a href="#contact" className="button button--flex">
                Contact Me <i className="uil uil-message button_icon"></i>
              </a>
            </div>
          </div>
          <div className="home_scroll">
            <a href="#about" className="home_scroll-button button--flex">
              <i className="uil uil-mouse-alt home_scroll-mouse"></i>
              <span className="home_scroll-name">Scroll down</span>
              <i className="uil uil-arrow-down home_scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
