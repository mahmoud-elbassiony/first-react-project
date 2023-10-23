import "./App.css";
import { Login } from "./components/auth/Login";
import Register from "./components/auth/Register";
import Cart from "./components/cart/Cart";
import Counter from "./components/counter/Counter";
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
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
