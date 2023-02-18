import React from "react";
import "../Styles/navbar.css";
import { Button, Link } from "react-scroll";
import startwo from "../images/startwo.svg"

function Navbar() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="tnav-l">
        <p className="shopkart">ShopKart</p>
        <div className="tnav-r">
          <p>WISHLIST</p>
          <p>BAG</p>
        </div>
      </div>
      <div className="uline" ></div>
      <img className="smallstar" src={startwo} alt="" />

      <div className="bnav">
        <ul>
          <p>
            <Link to="" smooth={true} duration={500}>
              HOME
            </Link>
          </p>
          <p>
            <Link to="" smooth={true} duration={500}>
              ABOUT
            </Link>
          </p>
          <p>
            <Link to="" smooth={true} duration={500}>
              <select
                style={{
                  backgroundColor: "black",
                  outline: "none",
                  color: "rgba(255, 255, 255, 1)",
                  fontSize: "18px",
                  outline: "0px solid black",
                  border:"none",
                  borderBottom:"1px solid white"
                }}
                name=""
                id=""
              >
                <option value="">OUR PRODUCTS</option>
                <option value="">Product 1</option>
                <option value="">Product 2</option>
                <option value="">Product 3</option>
                <option value="">Product 4</option>
              </select>
            </Link>
          </p>
          <p>
            <Link to="" smooth={true} duration={500}>
              CONTACT US
            </Link>
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
