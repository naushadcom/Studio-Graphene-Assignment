import { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([]);

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
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <img
            src={item.category.image}
            style={{ height: "200px", width: "200px" }}
          />
          {/* <h1 >{item.title}</h1>
          <h1>{item.price}</h1>
          <h1>{item.category.name}</h1> */}
        </div>
      ))}
    </div>
  );
}

export default Products;
