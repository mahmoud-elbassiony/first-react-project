import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Spinner from "react-bootstrap/Spinner";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  let { id } = useParams();
  let getProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setValue(json.rating?.rate);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="row g-5">
        <div className="col-12 col-md-4 p-5 border">
          <img src={product.image} alt="" />
        </div>
        <div className="col-12 col-md-8">
          <h3>{product.title}</h3>
          <div className="d-flex align-items-center mb-3">
            <Rating
              name="half-rating-read"
              value={value}
              precision={0.1}
              readOnly
            />
            <span className="mb-1 ms-2">({product.rating?.count})</span>
          </div>
          <h4>{product.price}$</h4>

          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
