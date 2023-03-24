import { createReducer } from "@reduxjs/toolkit";

export const WeatherReducer = createReducer(
  {},
  {
    weatherRequest: (state) => {
      state.loading = true;
    },
    weatherSuccess: (state, action) => {
      state.loading = false;
      state.weather = action.payload;
    },
    weatherFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
);
