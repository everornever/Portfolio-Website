import React from "react";
import "../Main/Main.css";
import "../About/about.css";
import image from "../../Img/profile.jpeg";

function About() {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>

        <div className="about_container container grid">
          <img src={image} alt="" className="about_img" />

          <div className="about_data">
            <p className="about_description">
              Web & Mobile developer. Working in web technologies, Ui / Ux
              design, IOS App development.
            </p>
            <div className="about_info">
              <div>
                <span className="about_info-title">02</span>
                <span className="about_info-name">
                  Years <br />
                  Experience
                </span>
              </div>

              <div>
                <span className="about_info-title">05</span>
                <span className="about_info-name">
                  Completed <br />
                  Projects
                </span>
              </div>

              <div>
                <span className="about_info-title">01</span>
                <span className="about_info-name">
                  Companies <br />
                  Worked
                </span>
              </div>
            </div>
            <div className="about_buttons">
              <a download="" href="CV" className="button button--flex">
                Download CV
                <i className="uil uil-arrow-circle-down button_icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
