import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSlice from "./counter";

const store = configureStore({
  // NOTE: We don't need to write our own reducer function separately
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
