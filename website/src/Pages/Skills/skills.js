import React from "react";
import "../Main/Main.css";
import "../Skills/skills.css";

function Skills() {
  return (
    <>
      <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>

        <div className="skills_container container grid">
          <div>
            {/* <!--==================== Technologies ====================--> */}
            <div className="skills_content skills_open">
              <div className="skills_header">
                <i className="uil uil-brackets-curly skills_icon"></i>
                <div>
                  <h1 className="skills_title">Technologies</h1>
                  <span className="skills_subtitle">More than 2 years</span>
                </div>
                <i className="uil uil-angle-down skills_arrow"></i>
              </div>

              {/* <!--==================== Frontend ====================--> */}
              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Frontend:</h3>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <div></div>
                  </div>
                  <div className="skills_bar"></div>
                </div>
              </div>

              {/* <!--==================== Backend ====================--> */}
              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Backend:</h3>
                    <span>React</span>
                    <span>Node.js</span>
                    <div></div>
                  </div>
                  <div className="skills_bar"></div>
                </div>
              </div>

              {/* <!--==================== Mobile ====================--> */}
              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Mobile:</h3>
                    <span>React</span>
                    <span>Xcode</span>
                    <div></div>
                  </div>
                  <div className="skills_bar"></div>
                </div>
              </div>

              {/* <!--==================== Databse ====================--> */}
              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Databse:</h3>
                    <span>Firebase</span>
                    <span>MySQL</span>
                    <div></div>
                  </div>
                  <div className="skills_bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
