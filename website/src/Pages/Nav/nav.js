import React from "react";
import "../Main/Main.css";
import "../Nav/nav.css";
import app from "../../Auth/base";

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classNameList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classNameList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classNameList.remove("active"));
  this.classNameList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classNameList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header className to the header tag
  if (this.scrollY >= 80) nav.classNameList.add("scroll-header");
  else nav.classNameList.remove("scroll-header");
}
if (window.location.href === "#home") {
  document.addEventListener("scroll", scrollHeader);
}

/*==================== DARK LIGHT THEME ====================*/

// window.onload = function () {
//   const themeButton = document.getElementById("theme-button");
//   const darkTheme = "dark-theme";
//   const iconTheme = "uil-sun";

//   // Previously selected topic (if user selected)
//   const selectedTheme = localStorage.getItem("selected-theme");
//   const selectedIcon = localStorage.getItem("selected-icon");

//   // We obtain the current theme that the interface has by validating the dark-theme className
//   const getCurrentTheme = () =>
//     document.body.classList.contains(darkTheme) ? "dark" : "light";
//   const getCurrentIcon = () =>
//     themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

//   // We validate if the user previously chose a topic
//   if (selectedTheme) {
//     // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//     document.body.classeList[selectedTheme === "dark" ? "add" : "remove"](
//       darkTheme
//     );
//     themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
//       iconTheme
//     );
//   }

//   // Activate / deactivate the theme manually with the button
//   themeButton.addEventListener("click", () => {
//     // Add or remove the dark / icon theme
//     document.body.classList.toggle(darkTheme);
//     themeButton.classList.toggle(iconTheme);

//     // We save the theme and the current icon that the user chose
//     localStorage.setItem("selected-theme", getCurrentTheme());
//     localStorage.setItem("selected-icon", getCurrentIcon());
//   });
// };

function Nav() {
  return (
    <>
      <nav className="nav container">
        <a href="#home" className="nav-logo">
          Leon Kling
        </a>

        <div className="nav_menu" id="nav-menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                <i className="uil uil-estate nav_icon"></i> HOME
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil-file-alt nav_icon"></i> SKILLS
              </a>
            </li>

            <li className="nav_item">
              <a href="#services" className="nav_link">
                <i className="uil uil-briefcase-alt nav_icon"></i> PROJECS
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil-message nav_icon"></i> CONTACT
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#signin"
                className="nav_link sign_out"
                onClick={() => app.auth().signOut()}
              >
                <i className="uil uil-sign-out-alt nav_icon"></i> SIGN OUT
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav_close" id="nav-close"></i>
        </div>
        <div className="nav_btns">
          <i className="uil uil-moon change-theme" id="theme-button"></i>
          <div className="nav_toggle" id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
