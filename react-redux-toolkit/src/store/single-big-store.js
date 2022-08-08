import { configureStore, createSlice } from "@reduxjs/toolkit";

/**
 * Need for redux/toolkit
 * - No need for writing our own reducer function
 * - No need for the switch/if conditions to "dispatch" actions
 * - No need to maintain a file for identifiers hence avoid typos
 * - More data results in bigger state objects and we have to keep copying states
 * - Having one reducer for an entire app is not good
 * - We must make sure we don't mutate the current state
 */

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

// Initial state for auth
const authInitialState = {
  isAuthenticated: false,
};

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// Create Store
const store = configureStore({
  // NOTE: We don't need to write our own reducer function separately
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// NOTE: "<slice>.actions" returns an object with a unique identifer
//    Eg: { type: "unique identifier" }
// We also need to export the actions for a "slice"
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// NOTE: No matter how many slices we have, there will always be ONE "store" object
export default store;
