import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { DECREMENT, INCREASEBYVALUE, INCREMENT, TOGGLE } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE });
  };

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };

  const increaseByValue = () => {
    dispatch({ type: INCREASEBYVALUE, payload: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByValue}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
