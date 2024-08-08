import React from "react";
import "./Register.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const avatarRef = useRef("");

  function handleSubmit(event) {
    event.preventDefault();
    if (nameRef.current.value.length < 3) {
      alert("Name should contain at least 3 characters");
      return;
    }
    if (passwordRef.current.value.length < 3) {
      alert("Password should contain at least 3 characters");
      return;
    }

    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      avatar: avatarRef.current.value,
    };
    nameRef.current.value = "",
    emailRef.current.value = "",
    passwordRef.current.value = "",
    avatarRef.current.value = "";

    fetch("https://api.escuelajs.co/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data){
          navigate("/login")
        }
        return
      })
      .catch((error) => console.error("Error:", error));
  }
  return (
    <div>
      <div className="ml-96 mr-96 mt-20">
        <div
          style={{
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-center text-3xl font-extrabold text-white">
              Register
            </h2>
            <p className="mt-4 text-center text-gray-400">
              Sign up to continue
            </p>
            <form
              method="POST"
              action="#"
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="mt-4 -mb-2">
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  ref={nameRef}
                  placeholder="Enter name..."
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="rounded-md shadow-sm">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email address
                  </label>
                  <input
                    ref={emailRef}
                    placeholder="Enter email address"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    required
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="mt-4">
                  <label className="sr-only" htmlFor="password">
                    Password
                  </label>
                  <input
                    ref={passwordRef}
                    placeholder="Enter password..."
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
                <div className="mt-4">
                  <label className="sr-only" htmlFor="avatar">
                    Avatar
                  </label>
                  <input
                    ref={avatarRef}
                    placeholder="Enter avatar URL..."
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="url"
                    name="avatar"
                    id="avatar"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                  />
                  <label
                    className="ml-2 block text-sm text-gray-400"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    className="font-medium text-indigo-500 hover:text-indigo-400"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  Sign up 
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 py-4 bg-gray-700 text-center">
            <span className="text-gray-400">Don't have an account?</span>
            <Link to="/login"
              className="font-medium text-indigo-500 hover:text-indigo-400"
              href="#"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
