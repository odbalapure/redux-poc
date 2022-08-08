const redux = require("redux");

// Reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// Create a store
const store = redux.createStore(counterReducer);
console.log(store.getState());

// Subscription
const counterSubcriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Tell redux to execute this function when state changes
store.subscribe(counterSubcriber);

// Dispatch an action
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
