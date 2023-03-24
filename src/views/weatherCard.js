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
const WeatherCard = () => {
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
            minHeight: "100vh",
            marginX: "30px",
            paddingX: "50px",
            backgroundColor: "white",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 3s",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Cities
          </Typography>
          <Grid container spacing={15}>
            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item lg={4} md={4} xs={12}>
                  <ImgMediaCard
                    name={weatherData.name}
                    temprature={Math.round(weatherData.main.temp)}
                    country={weatherData.sys.country}
                  />
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                  <ImgMediaCard
                    name={weatherData.name}
                    temprature={Math.round(weatherData.main.temp)}
                    country={weatherData.sys.country}
                  />
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                  <ImgMediaCard
                    name={weatherData.name}
                    temprature={Math.round(weatherData.main.temp)}
                    country={weatherData.sys.country}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={5}>
                <Grid item lg={12} md={12} xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Card>
                      <CardContent>
                        <form onSubmit={handleSubmit}>
                          <TextField
                            variant="standard"
                            value={city}
                            onChange={handleCityChange}
                            margin="normal"
                          />
                          <br />
                          <Button variant="contained" type="submit">
                            Get Weather
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};
export default WeatherCard;
