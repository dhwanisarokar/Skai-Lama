import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import "./Login.css";
import logo from "../assets/logo.png";
import { config } from "../App";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleEvent = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setFormData((currFormData) => ({ ...currFormData, [key]: value }));
  };

  const login = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post(`${config.endpoint}/auth/register`, formData);
        console.log(res.data);
        
      persistLogin(res.data.token, res.data.username);

      alert("Logged in successfully");
      setFormData({
        username: "",
        password: "",
      });

      setLoading(false);
      navigate("/");
    } catch (e) {
      if (e.response || e.response.status === 400) {
        alert(e.response.data.message);
      } else {
        alert(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON."
        );
      }
      setLoading(false);
    }
  };

  const persistLogin = (token, username) => {
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
  };

  return (
    <div className="container">
      <div className="login-left"></div>
      <div className="login-right">
        <img src={logo} alt="logo" width="100px" />
        <h2>
          Welcome to <br />
          <strong> Ques.AI</strong>
        </h2>
        <form action="submit" className="login-form">
          <input
            type="text"
            title="Username"
            name="username"
            placeholder="Enter Username"
            required
            onChange={handleEvent}
            value={formData.username}
            disabled={loading}
          />
          <input
            title="Password"
            name="password"
            type="password"
            placeholder="Enter Password"
            required
            onChange={handleEvent}
            value={formData.password}
            disabled={loading}
          />
          <button
            className="login-button"
            onClick={() => {
              login(formData);
            }}
            disabled={loading}
          >
            Register
          </button>
        </form>
        <p>
        Already have an account?{" "}
          <Link className="link" to="/login">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
