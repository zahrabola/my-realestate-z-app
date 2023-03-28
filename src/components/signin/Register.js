import React, { useState } from "react";
import Back from "../common/Back";
import img6 from "../images/6.jpg";
import { Link } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div>
      <section className="contact mb">
        <Back
          title="Register"
          name="Get Helps & Friendly Support"
          cover={img6}
        />
        <div className="container">
          <form className="shadow" onSubmit={handleSubmit}>
            <label htmlFor="name">Fullname</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Email address"
              id="email"
              name="email"
            />
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              id="email"
              name="email"
            />
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="*******"
              id="password"
              name="password"
            />
            <button className="btn-search singin-btn cross-logo " type="submit">
              Register
            </button>
          </form>
        </div>      
      </section>
      <Link to={"/login"}>
          <button className="btn-search singin-btn cross-logo " type="submit">
            Already have an account? Login here.
          </button>
        </Link>
    </div>
  );
};
export default Register;
