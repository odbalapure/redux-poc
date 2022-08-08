// useStore is another hook that gives direct access to the store
//   but this lets us automatically a part of the state managed by the store
// "connect" as a wrapper and connects the store to a component
// useDispatch dispatches an action
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {counterActions} from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
  // Since we have multiple "slices" called as "counter" and "auth"
  // We need to specify the slices to extract the respective "state"
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase({ amount: 10 }));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter ? <div className={classes.value}>{counter}</div> : null}
      <div>
        <button className="counter-btn" onClick={incrementHandler}>
          Increment
        </button>
        <button className="counter-btn" onClick={decrementHandler}>
          Decrement
        </button>
        <button className="counter-btn" onClick={increaseHandler}>
          Increase
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
