import React, { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  let [products, setProducts] = useState([]);

  let getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  };

  let productsList = products.map((pro) => (
    <Product
      key={pro.id}
      id={pro.id}
      image={pro.image}
      title={pro.title}
      price={pro.price}
      rate={pro.rating?.rate}
      count={pro.rating?.count}
    />
  ));

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row g-4">{productsList}</div>
    </div>
  );
}

export default Products;
