import React from "react";
import JournalLayout from "../Components/JournalLayout";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { about } from "../data/About";
import NavbarComponent from "../Components/NavbarComponent";

const MembershipPage = () => {
  return (
    <>
      <NavbarComponent />
      <Box sx={{ width: "100%", height: "60px" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginTop: { xs: "100px", md: "20px" } }}
        >
          MemberShip
        </Typography>
      </Box>
    </>
  );
};

export default MembershipPage;
