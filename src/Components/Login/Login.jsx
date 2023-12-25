// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Login.css";
// import Layout from "../Layout/Layout";
// import axios from "axios";


// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   const [email,setEmail]=useState("");
//   const [password, setPassword] = useState("");

 
//   async function handleSignup(e){
//     e.preventDefault();

//     try {
//         const response = await axios.post("http://localhost:3001/login", {
//           email,
//           password
//         });
    
//         if (response.data === "exit") {
//           navigate("/");
//         } else if (response.data === "notexist") {
//           console.log(response.data);
//           alert("Not Registered or email or password is incorrect");
//         }
//       } catch (error) {
//         console.error(error);
//       }
    
//   }

//   return (
//     <Layout>
//       <div className="flex justify-center items-center h-screen cont">
//         <div className="bg-gray-800 px-16 py-16 rounded-xl">
//           <div className="">
//             <h1 className="text-center text-white text-xl mb-10 font-bold">Login</h1>
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               className="bg-gray-600 mb-4 px-3 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
//               placeholder="Enter your Gla email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               className="bg-gray-600 mb-4 px-3 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="flex justify-center mb-3">
//             <button
//               onClick={handleSignup}
//               className="bg-blue-500 w-full text-black font-bold px-2 py-2 rounded-lg"
//             >
//               Login
//             </button>
//           </div>
//           <div>
//             <h2 className="text-white py-2">
//               Don't have an account{" "}
//               <Link className="text-blue-500 font-bold" to={"/signup"}>
//                 Sign Up
//               </Link>
//             </h2>
//             <h6 className="text-white">If you forgot the password, contact webtech developers.</h6>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Login;
