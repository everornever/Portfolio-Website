import React from "react";
import "../Main/Main.css";
import "../Services/services.css";
import xcode from "../../Img/xcode.png";
import react from "../../Img/react.png";

function Services() {
  return (
    <>
      <section className="services section" id="services">
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">What I worked on</span>

        <div className="serv_container container grid">
          {/* <!--==================== SERVICE 1 ====================--> */}
          <div className="serv_content">
            <div>
              <img className="serv_icon" alt="" src={xcode}></img>
              <h3 className="serv_title">
                Puddle <br />
                IOS App
              </h3>
            </div>
            <a
              href="https://github.com/everornever"
              target="_blank"
              rel="noreferrer"
              className="button button--flex button--small button--link serv_button"
            >
              View more
              <i className="uil uil-angle-right button_icon"></i>
            </a>
          </div>
          {/* <!--==================== SERVICE 2 ====================--> */}
          <div className="serv_content">
            <div>
              <img className="serv_icon" alt="" src={react}></img>
              <h3 className="serv_title">
                WRIP <br />
                Web App
              </h3>
            </div>
            <a
              href="http://wrip.f2.htw-berlin.de/"
              target="_blank"
              rel="noreferrer"
              className="button button--flex button--small button--link serv_button"
            >
              View more
              <i className="uil uil-angle-right button_icon"></i>
            </a>
          </div>
          {/* <!--==================== SERVICE 3 ====================--> */}
          <div className="serv_content">
            <div>
              <img className="serv_icon" alt="" src={react}></img>
              <h3 className="serv_title">
                Personal Website <br />
                Web App
              </h3>
            </div>
            <a
              href="https://github.com/everornever"
              target="_blank"
              rel="noreferrer"
              className="button button--flex button--small button--link serv_button"
            >
              View more
              <i className="uil uil-angle-right button_icon"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
