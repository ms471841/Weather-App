import * as React from "react";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../assets/clear.jpg";
export const ImgMediaCard = ({ name, country, temprature }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="170"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h2">{temprature}°C</Typography>
      </CardContent>
    </Card>
  );
};
ImgMediaCard.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
  temprature: PropTypes.string,
};
