import { useSelector, useDispatch } from "react-redux";
import { increament, decreament } from "../../store/counterSlice";

function Counter() {
  const counterState = useSelector((state) => {
    console.log(state);
    return state.counter.value;
  });

  const dispatch = useDispatch();

  let increaseCounter = () => {
    dispatch(increament());
  };

  let decreaseCounter = () => {
    dispatch(decreament());
  };

  return (
    <div className="container text-center">
      <h2>{counterState}</h2>
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
