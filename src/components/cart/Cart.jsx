import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const counterState = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Counter {counterState}</h2>
    </div>
  );
}

export default Cart;
