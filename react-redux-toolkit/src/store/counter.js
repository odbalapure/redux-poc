import { createSlice } from "@reduxjs/toolkit";

// Initial state for counter
const counterInitialState = {
    counter: 0,
    showCounter: true,
  };
  
  // Counter slice
  const counterSlice = createSlice({
    name: "counter",
    initialState: counterInitialState,
    // These methods will recieve the "state" and the "action"
    // Methods will be called automatically depending upon the action
    //    so no need to wrtie if/switch statement
    reducers: {
      // NOTE: We are allowed to mutate the "state" as compared
      // Redux Toolkit uses "immer" clone the existing state
      // - Create a new state object
      // - Keep the state we are not editing
      // - Mutate state which are editing in an immutable way
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      increase(state, action) {
        // NOTE: Plain "redux didn't require the "payload" field
        state.counter += action.payload.amount;
      },
      toggle(state) {
        state.showCounter = !state.showCounter;
      },
    },
  });

export const counterActions = counterSlice.actions;
export default counterSlice;