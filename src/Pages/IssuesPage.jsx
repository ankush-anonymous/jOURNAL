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

const IssuesPage = () => {
  return (
    <>
      <JournalLayout>
        <Box sx={{ width: "100%", height: "60px" }}>
          <Typography variant="h4">{about.title}</Typography>
        </Box>
        <Box sx={{ width: "100%", height: "60px" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginTop: { xs: "100px", md: "20px" } }}
          >
            Issues
          </Typography>
        </Box>
      </JournalLayout>
    </>
  );
};

export default IssuesPage;
