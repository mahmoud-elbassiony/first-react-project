import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

function Product({ id, image, category, price, title, rate, count }) {
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    setValue(rate);
  }, [rate]);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <Card className="h-100">
        <div className="h-75 d-flex align-items-center ">
          <Card.Img
            variant="top"
            src={image}
            style={{ padding: "1.5rem 2.5rem" }}
          />
        </div>

        <Card.Body>
          <div className="d-flex align-items-center gap-2 mb-2">
            <Rating
              name="half-rating-read"
              value={value}
              precision={0.1}
              readOnly
            />
            <span>({count})</span>
          </div>

          <Card.Title
            className="fs-6 text-two-lines"
            style={{ height: "38.375px" }}
          >
            {title}
          </Card.Title>
          <Card.Text className="fw-bold">{price}$</Card.Text>
          <div className="text-center">
            <Link to={`/${id}`} className="btn btn-primary" variant="primary">
              View Details
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
