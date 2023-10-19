import "./App.css";
import Cart from "./components/cart/Cart";
import NavBar from "./components/navbar/NavBar";
import ProductDetails from "./components/products/ProductDetails";
import Products from "./components/products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:id" element={<ProductDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
