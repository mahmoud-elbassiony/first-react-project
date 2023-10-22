// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import "./product.css";

function Product({ id, image, price, title, rate, count }) {
  return (
    <div className="col">
      <Card className="h-100">
        <div className="h-75 d-flex align-items-center card-img">
          <div className="img-layout">
            {/* <Link to={`/${id}`} className="btn btn-primary" variant="primary">
              View Details
            </Link> */}
          </div>
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
              value={rate}
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
