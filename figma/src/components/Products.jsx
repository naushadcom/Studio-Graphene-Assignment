import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/products.css";

function Products() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setSuggestions(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 3.3,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="productpage">
      <div className="newproducts">New products</div>
      <div className="underline"></div>
      <div className="displaydata">
        <div className="category"></div>
        <div className="apidata">
          <div >
            <Slider {...settings}>
              {suggestions.map((current) => (
                <div key={current.id}>
                  <div className="display-data">
                    <img className="api-image" src={current.category.image} />
                    <p className="pd-name">{current.category.name}</p>
                    <p className="pd-des">{current.description}</p>
                    <p className="pd-price">${current.price}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
