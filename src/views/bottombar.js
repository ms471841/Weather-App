import { useEffect, useRef, useState } from "react";

import {
  Card,
  Box,
  Typography,
  TextField,
  Button,
  CardContent,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";
import { ImgMediaCard } from "../ui-components/card";
const BottomCard = () => {
  const appRef = useRef(null);
  const [city, setCity] = useState("Uttar Pradesh");
  const [isVisible, setIsVisible] = useState(false);
  // const [weatherData, setWeatherData] = useState(weather);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const weatherData = useSelector((state) => state.weather.weather);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // setWeatherData();
  };
  useEffect(() => {
    const handleScroll = () => {
      if (appRef.current) {
        const { top } = appRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {weatherData && (
        <Box
          ref={appRef}
          sx={{
            minHeight: "25vh",
            marginX: "30px",
            backgroundColor: "black",
            // opacity: isVisible ? 1 : 0,
            transition: "opacity 1s",
            color: "white",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item lg={6}>
              <Typography sx={{ fontSize: "20px" }}>Weather App</Typography>
            </Grid>
            <Grid item lg={6}>
              stfgrg
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};
export default BottomCard;
