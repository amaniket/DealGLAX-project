import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sell from "./Components/Sell/Sell";
import Buy from "./Components/Buy/Buy";
import Contacts from "./Components/Contacts/Contacts";
import Buyproduct from "./Components/Buyproduct/Buyproduct";
import Cart from "./Components/Cart/Cart";
import Error from "./Components/Error/Error";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Sign from "./Components/Signup/Sign";
import MyState from "./context/data/myState";

function App() {
  return (
    <div className="App">
      <>
        <MyState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/buy/:id" element={<Buyproduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Sign />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </MyState>
      </>
    </div>
  );
}

export default App;
