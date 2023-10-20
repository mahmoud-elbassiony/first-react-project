import React, { useEffect, useState } from "react";
import Product from "./Product";
import Spinner from "react-bootstrap/Spinner";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  let getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
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
    setIsLoading(true);
    getProducts();
  }, []);

  if (isLoading) {
    return (
      <Spinner className="d-block mx-auto" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="container">
      <div className="row g-4">{productsList}</div>
    </div>
  );
}

export default Products;
