import React, { useRef, useEffect, useState } from "react";
import {
  Card,
  Box,
  Typography,
  TextField,
  Button,
  CardContent,
  Grid,
} from "@mui/material";
import bgImage from "../assets/s2.jpg";
import WeatherCard from "./weatherCard";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../store/action";
import EarthCard from "./earth";
import NewsCard from "./newsCard";
import BottomCard from "./bottombar";

function WeatherApp() {
  const dispatch = useDispatch();
  const appRef = useRef(null);
  const [city, setCity] = useState("Uttar Pradesh");
  // const [weatherData, setWeatherData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const weatherData = useSelector((state) => state.weather.weather);
  useEffect(() => {
    dispatch(getWeatherData());
  }, [dispatch]);

  return (
    <Box sx={{ backgroundColor: "black", margin: 0 }}>
      <Box
        // ref={appRef}
        sx={{
          marginX: "30px",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "120vh",
        }}
      >
        <Box
          sx={{
            // maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Home Cities News
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              height: 200,
            }}
          >
            <Card sx={{ width: "400px", backgroundColor: "", p: "10px" }}>
              <CardContent>
                <Typography fontWeight={"bold"} variant="h4" gutterBottom>
                  Weather Details
                </Typography>
                <Typography>Cloudy : {weatherData.clouds.all}</Typography>
                <Typography>Humidity : {weatherData.main.humidity}%</Typography>
                <Typography>Wind : {weatherData.wind.speed}KM/H</Typography>
              </CardContent>
            </Card>
          </Box>

          {weatherData && (
            <Box sx={{ marginTop: "20rem", marginX: "100px" }}>
              <Typography variant="h5" gutterBottom>
                {weatherData.name}, {weatherData.sys.country}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {weatherData.weather[0].description}
              </Typography>
              <Typography variant="h1" gutterBottom>
                {Math.round(weatherData.main.temp)}°C
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
      <WeatherCard />
      <EarthCard />
      <NewsCard />
      <BottomCard />
    </Box>
  );
}

export default WeatherApp;
