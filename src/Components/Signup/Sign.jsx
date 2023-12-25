import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import "./Sign.css";
import axios from "axios";
import { useState } from "react";

function Sign() {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [check,setCheck]=useState(null);


  
  const handleSignup = async(e) => {
    e.preventDefault();

    if (!rollNo || !name || !email || !password) {
      alert("all fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setRegistrationStatus("error");
      alert("enter correct email")
      return; // Exit early if email is not valid
    }
    try {
        const rollNoCheckResponse = await axios.post("http://localhost:3001/checkRollNo", { rollNo });
        if (rollNoCheckResponse.data.status === "error") {
          setCheck("error");
          return;
        }
    
        // Roll number is available, proceed with registration
        const registrationResponse = await axios.post("http://localhost:3001/Users", { rollNo, name, email, password });
        console.log(registrationResponse.data);
        
    
        setRegistrationStatus("success");
        setRollNo("");
        setName("");
        setEmail("");
        setPassword("");
        setCheck("success");
      } catch (error) {
        console.error(error);
        setRegistrationStatus("error");
      }
  };
  return (
    <Layout>
      <div className=" flex justify-center items-center h-screen cont">
        <div className=" bg-gray-800 mb-4 px-8 py-10 rounded-xl ">
          <div className="">
            <h1 className="f text-center text-white text-xl mb-8 font-bold">
              Signup
            </h1>
          </div>
          {registrationStatus === "success" && (
            <div className="text-green-500 text-center mb-4">
              Registration successful! You can now login.
            </div>
            
          )}
          {registrationStatus === "error" && (
            <div className="text-red-500 text-center mb-4">
              Registration failed. Please try again.
            </div>
          )}
          {check ==="error" &&(
                <div className="text-red-500 text-center mb-4">
              User already present with this roll no.
            </div>
            )}
            {
                check==="success" &&(
                    <div>

                    </div>
                )
            }
          <div>
            <input
              type="text"
              name="Roll No"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Enter Your GLA University Roll No"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              required
            />
            <input
              type="text"
              name="Name"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button
              className=" bg-blue-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
              onClick={handleSignup}
            >
              Signup
            </button>
          </div>
          <div>
            <h2 className="text-white py-2">
              Have an account{" "}
              <Link className=" text-blue-500 font-bold" to={"/login"}>
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Sign;
