import { createStore } from "redux";

/**
 * Need for redux/toolkit
 * - Managing different action (identifiers) is tough
 * - No need to maintain a file of identifiers
 * - More data results in bigger state objects and we have to keep copying states
 * - Having one reducer for an entire app is not good
 * - We must make sure we don't mutate the current state
 */

// Initial state
const initState = {
  counter: 0,
  showCounter: true,
};

// Reducer
// NOTE: Commenting this code as Redux Toolkit will do the job for us
const reducer = (state = initState, action) => {
  switch (action.type) {
    // NOTE: We must add all the fields as redux replaces the old state NOT merge it
    // Also a brand new object must be sent instead of mutating the existing state
    // Create new values, objects and arrays etc.
    case "increment":
      return { counter: state.counter + 1, showCounter: state.showCounter };

    case "decrement":
      return { counter: state.counter - 1, showCounter: state.showCounter };

    case "increase":
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };

    case "toggle":
      return { counter: state.counter, showCounter: !state.showCounter };

    default:
      return state;
  }
};

// Create Store
// const store = createStore(reducer);
const store = createStore(reducer);

export default store;
