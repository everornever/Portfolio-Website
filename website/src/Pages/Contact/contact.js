import React from "react";
import "../Main/Main.css";
import "../Contact/contact.css";

function Contact() {
  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section_title">Contact</h2>
        <span className="section_subtitle">Get in touch with me</span>

        <div className="contact_container container gird">
          <form action="" className="contact_form grid">
            <div className="contact_inputs grid">
              <div className="contact_content">
                <label className="contact_lable">Name</label>
                <input type="text" className="contact_input" />
              </div>
              <div className="contact_content">
                <label className="contact_lable">Email</label>
                <input type="email" className="contact_input" />
              </div>
            </div>
            <div className="contact_content">
              <label className="contact_lable">Project</label>
              <input type="text" className="contact_input" />
            </div>
            <div className="contact_content">
              <label className="contact_lable">Message</label>
              <textarea
                name=""
                id=""
                cols="0"
                rows="7"
                className="contact_input"
              ></textarea>
            </div>
            <div>
              <a href="#home" className="button button--flex">
                Send Message
                <i className="uil uil-message"></i>
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
