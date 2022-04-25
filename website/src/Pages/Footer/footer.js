import React from "react";
import "../Main/Main.css";
import "../Footer/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_bg">
          <div className="footer_container container grid">
            <div>
              <h1 className="footer_title">Leon</h1>
              <span className="footer_subtitle">Frontend Developer</span>
            </div>
            <ul className="footer_links">
              <li>
                <a href="#services" className="footer_link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="footer_link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#home" className="footer_link">
                  Home
                </a>
              </li>
            </ul>
            <div className="footer_socials">
              <a
                href="https://github.com/everornever"
                target="_blank"
                rel="noreferrer"
                className="footer_social"
              >
                <i className="uil uil-github-alt"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/leon-kling-692570210/"
                target="_blank"
                rel="noreferrer"
                className="footer_social"
              >
                <i className="uil uil-linkedin"></i>
              </a>
            </div>
          </div>
          <p className="footer_copy">
            &#169;2021 Leon Kling All right reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
