import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bars from "../assets/svg/bar.svg";
import logo from "../assets/images/logo.png";
import img from "../assets/images/user/1.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import UsefulLink from "./usefulLink";
import { useSelector } from "react-redux";

function CanvasMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="nav-bar" onClick={handleShow}>
        <img src={bars} className="img-fluid" alt="" />
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Link to="/" className="brand-logo">
            <img src={logo} width={"135px"} className="img-fluid" alt="" />
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body className="px-0">
          <UsefulLink />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const cartItems = useSelector((state) => state.cartItems.length);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <header className={scroll ? "darkHeader" : ""}>
      <CanvasMenu />
      <Link to="/" className="brand-logo">
        <img src={logo} className="img-fluid" alt="" />
      </Link>
      <div className="header-option">
        <ul>
          <li>
            <Link to="notifications">
              <i className="iconly-Notification icli"></i>
            </Link>
          </li>
          <li>
            <Link className="position-relative" to="/cart">
              {cartItems > 0 && (
                <span className="badge rounded-pill bg-danger position-absolute top-0 translate-middle start-100">
                  {cartItems}
                </span>
              )}

              <i className="iconly-Buy icli"></i>
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <i className="iconly-Heart icli"></i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
