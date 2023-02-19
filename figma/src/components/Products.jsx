import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Styles/products.css";
import axios from "axios";

function Products() {
  const [data, setData] = useState([]);
  const [category]=useState([])

  // fetch data .......................................
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setData]);

  // Filter by Category................................

  let Shoes = data.filter((el) => {
    return el.category.name === "Shoes";
  });
  let Furniture = data.filter((el) => {
    return el.category.name === "Furniture";
  });

  let Clothes = data.filter((el) => {
    return el.category.name === "Clothes";
  });
  let Electronics = data.filter((el) => {
    return el.category.name === "Electronics";
  });
  let Others = data.filter((el) => {
    return el.category.name === "Others";
  });

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

  const handleFilter = (e) => {
    axios
      .get(
        `https://api.escuelajs.co/api/v1/products/category/name/${e.target.value}`
      )
      .then((res) => {
        setData(res.data);
      });
  };

  return (
    <div className="productpage">
      <div className="newproducts">New products</div>
      <div className="underline"></div>
      <div className="displaydata">
        <div className="category">
          <p onClick={handleFilter} value="Shoes">
            Shoes
          </p>
          <p onClick={handleFilter} value="Furniture">
            Furniture
          </p>
          <p onClick={() => setData(Clothes)}>Clothes</p>
          <p onClick={() => setData(Electronics)}>Electronics</p>
          <p onClick={() => setData(Others)}>Others</p>
        </div>
        <div className="apidata">
          <div>
            <Slider {...settings}>
              {data.map((current) => (
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
