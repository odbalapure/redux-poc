// useStore is another hook that gives direct access to the store
//   but this lets us automatically a part of the state managed by the store
// "connect" as a wrapper and connects the store to a component
// useDispatch dispatches an action
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // NOTE: useSelector setups an automatic subscription for the component
  // and when the data changes in the store the state is updated in the component
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
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

// class CounterCC extends React.Component {
//   // NOTE: Since the state does not reside in this component
//   // We won't need a constructor here
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleHandler() {
//     this.props.toggle();
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button
//             className="counter-btn"
//             onClick={this.incrementHandler.bind(this)}
//           >
//             Increment
//           </button>
//           <button
//             className="counter-btn"
//             onClick={this.decrementHandler.bind(this)}
//           >
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.toggleHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // 1. mapping redux state to props
// const mapStateToProps = (state) => {
//   return {
//     // Key is a prop in the recieving component
//     counter: state.counter,
//   };
// };

// // 2. mapping dispatch to props i.e. equivalent of useDipatch
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // Key is a prop in the recieving component
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//     toggle: () => dispatch({ type: "toggle" }),
//   };
// };

// "connect" is a higher order component
// "connect" can be used in the FC as well but useDispatch and useSelector does the job of connecting/perform actions to the store
// This also sets up the subscription for us and manages it
// export default connect(mapStateToProps, mapDispatchToProps)(CounterCC);
