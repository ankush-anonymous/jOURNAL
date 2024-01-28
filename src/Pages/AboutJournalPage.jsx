import React from "react";
import JournalLayout from "../Components/JournalLayout";
import { Box, Typography } from "@mui/material";

import { about } from "../data/About";

const AboutJournalPage = () => {
  return (
    <>
      <JournalLayout>
        <Box sx={{ width: "100%", height: "60px" }}>
          <Typography variant="h4">{about.title}</Typography>
        </Box>
        <Box sx={{ width: "100%", height: "60px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            About Journal
          </Typography>
        </Box>
        <Box sx={{ padding: "10px" }}>
          <Box sx={{ width: "100%", height: "50px" }}>
            <Typography variant="h6"> Aim & Scope</Typography>
          </Box>
          <Box>{about.aim}</Box>
        </Box>
      </JournalLayout>
    </>
  );
};

export default AboutJournalPage;
