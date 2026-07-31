import React, { useState } from 'react'
import Navbar from '../component/Navbar';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    
        const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please Fill All Fields");
      return;
    }

    alert("Login Successfully");

    setEmail("");
    setPassword("");
    navigate("/home");
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen bg-gray-100">

        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-lg w-96"
        >

          <h1 className="text-3xl font-bold text-center mb-6">
            Login
          </h1>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full p-3 rounded mb-4"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full p-3 rounded mb-4"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-3 rounded"
          >
            Login
          </button>

        </form>

      </div>
    </>

  )
}

export default Login