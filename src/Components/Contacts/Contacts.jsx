import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();

  const[name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [text,setText]=useState('');
  const [check,setCheck]=useState('');


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_elvjbay",
        "template_ej0yai8",
        form.current,
        "rD3KhOqTGaF3DpykM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setCheck("done");
          setName("")
          setEmail("")
          setText("")
        },
        (error) => {
          console.log(error.text);
          setCheck("not");
        }
      );
  };

  return (
    <Layout>
    <form ref={form} onSubmit={sendEmail}>
      <div className=" flex justify-center items-center h-screen cont">
        <div className=" bg-gray-800 mb-4 px-8 py-10 rounded-xl ">
          <div className="">
            <h1 className="f text-center text-white text-large mb-8 font-bold">
              Contact US
            </h1>
          </div>
          {check === "done" && (
            <div className="text-green-500 text-center mb-4">
              Message sent successfully.
            </div>
          )}
          {check === "not" && (
            <div className="text-red-500 text-center mb-4">
              Message not sent.
            </div>
          )}
          <div>
            <input
              type="text"
              name="from_name"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              required
            />
            
            <input
              type="email"
              name="from_email"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          <div>
          <textarea
                cols="30"
                rows="8"
                name="message"
                className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                placeholder="Enter details"
                value={text}
                onChange={(e)=>{setText(e.target.value)}}
              ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button className=" bg-blue-500 w-full text-white font-bold  px-2 py-2 rounded-lg" >
              Contact US
            </button>
          </div>
        </div>
      </div>
      </form>
    </Layout>
  );
}

export default Contacts;
