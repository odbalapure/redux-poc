import { createSlice } from "@reduxjs/toolkit";

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

export const authActions = authSlice.actions;
export default authSlice;

