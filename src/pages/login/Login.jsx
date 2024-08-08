import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    
    if (passwordRef.current.value.length < 3) {
      alert("Password should contain at least 3 characters");
      return;
    }
    fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("user", JSON.stringify(data))
          localStorage.setItem("token", JSON.stringify(data.access_token))
          navigate("/")
        }else{
          alert("Invalid email or password")
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <div>
      <div className="ml-96 mr-96 mt-40">
        <div
          style={{
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-center text-3xl font-extrabold text-white">
              Login
            </h2>
            <p className="mt-4 text-center text-gray-400">
              Sign in to continue
            </p>
            <form
              method="POST"
              action="#"
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
            >
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
                <button onClick={handleSubmit}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
          <div className="px-8 py-4 bg-gray-700 text-center">
            <span className="text-gray-400">Don't have an account?</span>

            <Link to="/register"
              className="font-medium text-indigo-500 hover:text-indigo-400"
              href="#"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
