import useFetch from "../../hooks/useFetch";
import Product from "./Product";
import Loading from "../loading/Loading";

function Products() {
  const {
    data: products,
    isLoading,
    erorr,
  } = useFetch("https://fakestoreapi.com/products");

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

  return (
    <div className="container">
      {isLoading && <Loading />}
      {erorr && <p>{erorr}</p>}
      {products && <div className="row g-4 row-col-5">{productsList}</div>}
    </div>
  );
}

export default Products;
