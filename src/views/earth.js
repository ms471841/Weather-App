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
import earth from "../assets/earth.png";
const EarthCard = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "90vh",
          marginX: "30px",
          backgroundColor: "black",
          // opacity: isVisible ? 1 : 0,
          transition: "opacity 1s",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <img src={earth} alt="dcb" />
        </Box>
      </Box>
    </>
  );
};
export default EarthCard;
