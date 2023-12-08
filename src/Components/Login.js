import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
      });
      let navigate = useNavigate();
      const handlesubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credentials;
        const res = await fetch("https://capobrain.vercel.app/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const json = await res.json();
        console.log(json)
        const both = document.getElementById("number");
        both.innerText = json.error;
        if (json.success) {
          localStorage.setItem("token", json.authtoken);
          navigate("/admin");
        }
      };
      const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
  return (
    <div
    style={{ backgroundImage: `url(${"img/b1.jpg"})`}}
      className="background-img10"
    >
      <div className="color-overlay10">
          <div className="d-flex justify-content-end">
        <Link to="/signup"> <button className="btn btn-primary mx-4 mt-3">Sign Up</button></Link>
          </div>
        <div className="container " style={{ marginTop:"100px" }}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              
          <form onSubmit={handlesubmit}>
            <div id="number" className="text-danger text-center"></div>

            <div className="mb-1">
              <label htmlFor="email" className="form-label text-white">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={credentials.email}
                onChange={onchange}
                id="email"
              />
              <div className="email" style={{ color: "red" }} id="mail"></div>
            </div>
            <div className="mb-1">
              <label htmlFor="password" className="form-label text-white">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={credentials.password}
                onChange={onchange}
                id="password"
              />
              <div
                className="phone no"
                style={{ color: "red" }}
                id="pass"
              ></div>
            </div>

            <button
              type="submit"
              className="btn btn-primary mb-2 mt-4 px-5"
              style={{ marginLeft: 100 }}
            >
              Log In
            </button>
          </form>
          
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
