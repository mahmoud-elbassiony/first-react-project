import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Rating from "@mui/material/Rating";
import Loading from "../loading/Loading";

function ProductDetails() {
  const [value, setValue] = useState(0);

  let { id } = useParams();

  const {
    data: product,
    isLoading,
    erorr,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  useEffect(() => {
    setValue(product.rating?.rate);
  }, [product]);

  return (
    <>
      {isLoading && <Loading />}
      {erorr && <p>{erorr}</p>}

      {product && (
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
      )}
    </>
  );
}

export default ProductDetails;
