import React, { useContext } from "react";
import Layout from "../Layout/Layout";
import myContext from "../../context/data/myContext";
import Filter from "../Filter/Filter";
import Track from "../Track/Track";
import ProductCard from '../ProductCard/ProductCard'
function Home() {
  const image = {
    borderRadius: "30px",
    alignItem:"center",    
    width: "97vw",
    
  };


  const context=useContext(myContext);
  console.log(context)
  
  const {name,rollNo}=context



  return (
    <>


      <Layout>
        <div className="herosection">
        {/* <span>Name:{name}</span>
        <span>Roll No:{rollNo}</span> */}
          <img
            style={image}
            src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg"
            alt=""
            className="mx-auto  mb-6 mt-4"
          />
        </div>
        <Filter/>
        <ProductCard/>
        <Track/>
      </Layout>
    </>
  );
}

export default Home;
