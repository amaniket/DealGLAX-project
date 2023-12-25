import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import trolly from "../assests/trolley.png";
import { useAuth0 } from "@auth0/auth0-react";
function Header() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-expand-lg mb-3">
          <Container fluid>
            <Link to="/" className="navbar-brand me-auto">
              <img
                src="./images/shopping-cart.png"
                alt="logo"
                className="image"
              />
              <span className="deal">Deal</span>
              <span className="glax">GLAX</span>
            </Link>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Link to="/" className="nav-link mx-lg-2">
                    Home
                  </Link>
                  <Link to="/buy" className="nav-link mx-lg-2">
                    Buy
                  </Link>
                  <Link to="/sell" className="nav-link mx-lg-2">
                    Sell
                  </Link>
                  <Link to="/contacts" className="nav-link mx-lg-2">
                    Contact
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <Link className="px-4 mt-4 my-2 text-blue font-bold text-xl">{isAuthenticated && <p>Welcome {user.name}</p>}</Link>

            <Link to="/login" className="login-button no-line">
              {isAuthenticated ? (
                <button
                  className="bg-blue-500 w-full text-black font-bold px-2 py-2 rounded-lg"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={() => loginWithRedirect()}
                  className="bg-blue-500 w-full text-black font-bold px-2 py-2 rounded-lg"
                >
                  Login
                </button>
              )}
            </Link>
            <Link to="/cart" className="main-cart">
              <img src={trolly} alt="cart" className="cart-img" />
            </Link>

            <Navbar.Toggle
              className="navbar-toggler pe-0"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
          </Container>
        </Navbar>
      ))}
      <section className="hero-section"></section>
    </>
  );
}

export default Header;
