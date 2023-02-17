import React from "react";
import "../Styles/navbar.css";
import { Link } from "react-scroll";

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
      <hr style={{ width: "75%", margin: "auto", marginTop: "-37px" }} />

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
			  <select style={{backgroundColor:"black",outline:"none",color: "rgba(255, 255, 255, 1)",fontSize:"18px",outline:"1px solid black"}} name="" id="">
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
