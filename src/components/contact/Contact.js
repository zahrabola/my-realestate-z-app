import React from "react"
import Back from "../common/Back";
import img6 from "../images/6.jpg";
import "./contact.css"
///boomerang email

const Contact = () => {
    return (
        <div>
            <section className="contact mb">
            <Back
          name="Contact us"
          title="Get Helps & Friendly Support"
          cover={img6}
        />
        <div className="container">
            <form className="shadow">
                <h4>Fill in the form</h4>
                <div>
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="email" />
                </div>
                <input type="text" placeholder="subject" />
                <textarea cols='30' rows='10'></textarea>
                <button className="btn-search cross-logo ">Submit Request </button>
            </form>
        </div>

            </section>
        </div>
    )
}

export default Contact 