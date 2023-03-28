import React, { useState } from "react";
import { Link } from "react-router-dom";
import Back from "../common/Back";
import img6 from "../images/6.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <section className="contact mb">
        <Back title="Login" name="Get Helps & Friendly Support" cover={img6} />
        <div className="container">
          <form className="shadow" onSubmit={handleSubmit}>
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
              Login
            </button>
          </form>
        </div>
      </section>
      <Link to={"/register"}>
        <button className="btn-search singin-btn cross-logo " type="submit">
          Don't have an account? Register here.
        </button>
      </Link>
    </div>
  );
};
export default Login;
