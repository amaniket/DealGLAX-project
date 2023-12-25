import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./sell.css";
import axios from "axios";
function Sell() {
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");

  const [added, setAdded] = useState("");
  const handleaddproduct = async (e) => {
    e.preventDefault();

    try {
      const add = await axios.post("http://localhost:3001/products", {
        company,
        price,
        image,
        category,
        details,
      });
      console.log(add.data);

      setAdded("done");
      setCompany("");
      setPrice("");
      setImage("");
      setCategory("");
      setDetails("");
    } catch (error) {
      console.log(error);
      setAdded("fail");
    }
  };

  return (
    <Layout>
      <div>
        <div className="co flex justify-center items-center h-screen">
          <div className=" bg-gray-800 px-24 py-8 rounded-xl ">
            <div className="">
              <h1 className="text-center text-white text-3xl mb-4 font-bold">
                Add Product
              </h1>
            </div>
            {added === "done" && (
              <div className="text-green-500 text-center mb-4">
                Product added successfully.
              </div>
            )}
            {added === "fail" && (
              <div className="text-red-500 text-center mb-4">
                Product not added.
              </div>
            )}

            <div>
              <input
                type="text"
                name="title"
                className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                placeholder="Product Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="price"
                className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                placeholder="Product price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <input
                type="file"
                accept="image/*"
                className="bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                name="category"
                className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                placeholder="Product category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <textarea
                cols="30"
                rows="10"
                name="title"
                className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
                placeholder="Enter product details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            <div className=" flex justify-center mb-3">
              <button
                className=" bg-blue-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
                onClick={handleaddproduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Sell;
