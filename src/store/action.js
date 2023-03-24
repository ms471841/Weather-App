const REACT_APP_WEATHER_API_KEY = "e5fc86c872abaf2150b33a9d03260956";

export const getWeatherData =
  (city = "Uttar Pradesh") =>
  async (dispatch) => {
    try {
      const server = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`;
      dispatch({ type: "weatherequest" });

      const response = await fetch(`${server}`);
      const data = await response.json();

      dispatch({ type: "weatherSuccess", payload: data });
    } catch (error) {
      dispatch({ type: "weatherFail", payload: error.message });
    }
  };
