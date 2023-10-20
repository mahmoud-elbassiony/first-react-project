import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  let increaseCounter = () => setCounter(counter + 1);

  let decreaseCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <div className="container text-center">
      <h2>{counter}</h2>
      <div className="actions d-flex justify-content-center gap-3">
        <button onClick={increaseCounter} className="btn btn-primary">
          Increament
        </button>
        <button onClick={decreaseCounter} className="btn btn-secondary">
          Decreament
        </button>
      </div>
    </div>
  );
}

export default Counter;
