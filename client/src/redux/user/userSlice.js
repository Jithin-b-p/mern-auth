import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
    },

    signinSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
    },
    signinError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signinError, signinSuccess, signinStart } = userSlice.actions;
export default userSlice.reducer;
