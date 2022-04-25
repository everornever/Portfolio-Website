import React from "react";
import "../Main/Main.css";
import "../Quali/quali.css";

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classNameList.remove("qu_active");
    });
    target.classNameList.add("qu_active");

    tabs.forEach((tab) => {
      tab.classNameList.remove("qu_active");
    });
    tab.classNameList.add("qu_active");
  });
});

function Quali() {
  return (
    <>
      <section className="qu section" id="qualification">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personal journey</span>

        <div className="qu_container container">
          <div className="qu_taps">
            <div
              className="qu_button button--flex qu_active"
              data-target="#education"
            >
              <i className="uil uil-graduation-cap qu_icon"></i>
              Education
            </div>

            <div className="qu_button button--flex" data-target="#work">
              <i className="uil uil-briefcase-alt qu_icon"></i>
              Work
            </div>
          </div>

          <div className="qu_sections">
            {/* <!--==================== Education ====================--> */}
            <div className="qu_content qu_active" data-content id="education">
              {/* <!--==================== 1 Education ====================--> */}
              <div className="qu_data">
                <div>
                  <h3 className="qu_title">Auslandsjahr</h3>
                  <span className="qu_subtitle">Neu Seeland</span>
                  <div className="qu_calender">
                    <i className="uil uil-calendar-alt"></i>
                    2011 - 2012
                  </div>
                </div>
                <div>
                  <span className="qu_rounder"></span>
                  <span className="qu_line"></span>
                </div>
                <div></div>
              </div>
              {/* <!--==================== 2 Education ====================--> */}
              <div className="qu_data">
                <div></div>

                <div>
                  <span className="qu_rounder"></span>
                  <span className="qu_line"></span>
                </div>

                <div>
                  <h3 className="qu_title">ABI</h3>
                  <span className="qu_subtitle">Potsdam</span>
                  <div className="qu_calender">
                    <i className="uil uil-calendar-alt"></i>
                    2012 - 2016
                  </div>
                </div>
              </div>
              {/* <!--==================== 3 Education ====================--> */}
              <div className="qu_data">
                <div>
                  <h3 className="qu_title">Ingenieur Informatik</h3>
                  <span className="qu_subtitle">HTW Berlin</span>
                  <div className="qu_calender">
                    <i className="uil uil-calendar-alt"></i>
                    2018 - 2022
                  </div>
                </div>
                <div>
                  <span className="qu_rounder"></span>
                  {/* <!-- <span className="qu_line"></span> --> */}
                </div>
                <div></div>
              </div>
            </div>
            {/* <!--==================== Work ====================--> */}
            <div className="qu_content" data-content id="work">
              {/* <!--==================== 1 Work ====================--> */}
              <div className="qu_data">
                <div></div>
                <div>
                  <span className="qu_rounder"></span>
                  <span className="qu_line"></span>
                </div>
                <div>
                  <h3 className="qu_title">EJF</h3>
                  <span className="qu_subtitle">Berlin</span>
                  <div className="qu_calender">
                    <i className="uil uil-calendar-alt"></i>
                    2018 - 2020
                  </div>
                </div>
              </div>
              {/* <!--==================== 2 Work ====================--> */}
              <div className="qu_data">
                <div>
                  <h3 className="qu_title">Werkstudent</h3>
                  <span className="qu_subtitle">Aperto</span>
                  <div className="qu_calender">
                    <i className="uil uil-calendar-alt"></i>
                    2020 - 2021
                  </div>
                </div>

                <div>
                  <span className="qu_rounder"></span>
                  <span className="qu_line"></span>
                </div>
                <div></div>
              </div>
              {/* <!--==================== 3 Work ====================--> */}
              <div className="qu_data">
                <div></div>
                <div>
                  <span className="qu_rounder"></span>
                  {/* <!-- <span className="qu_line"></span> --> */}
                </div>

                <div>
                  <h3 className="qu_title">Frontend Developer</h3>
                  <span className="qu_subtitle">IBM IX</span>
                  <div className="qu_calender">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quali;
