import React from "react";
import "../Styles/home.css";
import boy from "../images/boy.svg";

function Home() {
  return (
    <div style={{ backgroundColor: "black", marginTop: "-20px" }}>
      <div className="box">
        <div className="box-1">
          <h1 className="fresh"> Fresh</h1>
          <h1 className="num">2002</h1>
          <h1 className="look">Look</h1>
        </div>
        <div className="box-2">
          <img className="image" src={boy} alt="" />
        </div>
      </div>
      <div className="orangebox"></div>
      <p className="org">OREGON JACKET</p>
      <p className="pri">$124</p>
      <div className="line"></div>
      <div className="see">
        <div className="seemore">See more</div>
        
      </div>
      <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQsUkx085JXXLvSc84bavd7yRO-FaIXEvrg&usqp=CAU"
          alt=""
        />
    </div>
  );
}

export default Home;
