import { configureStore } from "@reduxjs/toolkit";
import { WeatherReducer } from "./reducer";

// ==============================|| REDUX - MAIN STORE ||============================== //

export default configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});
