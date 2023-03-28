import React from "react";
import Back from "../common/Back";
import img6 from "../images/6.jpg";
import "./contact.css";
///boomerang email
//template_ldhi989- template id
///service_johuj0s - YOUR_SERVICE_ID
///4niFGNGAWNs9iUdRb - public id
import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  //email

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitted(true);
    emailjs
      .sendForm(
        "service_johuj0s",
        "template_ldhi989",
        form.current,
        "4niFGNGAWNs9iUdRb"
      )
      .then(
        (result) => {
          console.log("email sent successfully", result.text);
        },
        (error) => {
          console.log("email has failed", error.text);
        }
      );
    e.target.reset(3000);
  };

  return (
    <div>
      <section className="contact mb">
        <Back
          name="Contact us"
          title="Get Helps & Friendly Support"
          cover={img6}
        />
        <div className="container">
          <form className="shadow" ref={form} onSubmit={sendEmail}>
            <h4>Fill in the form</h4>
            <div>
                
              <input type="text" placeholder="name" name="user_name" required />
              <input
                type="text"
                placeholder="Email address"
                name="user_email"
                required
              />
            </div>
            <input type="text" placeholder="subject" name="user_subject" />
            <textarea
              cols="30"
              rows="10"
              required
              name="user_message"
            ></textarea>
            <button className="btn-search singin-btn cross-logo " value="send">
              Submit Request{" "}
            </button>
          </form>
          {submitted ? <h5 id="submitted"> email sent successfull </h5> : null}
        </div>
      </section>
    </div>
  );
};

export default Contact;
