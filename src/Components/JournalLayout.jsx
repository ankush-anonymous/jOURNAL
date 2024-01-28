import React from "react";
import JournalSidebarComponent from "./JournalSidebarComponent";
import NavbarComponent from "./NavbarComponent";
import { Box } from "@mui/material";

const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ width: "full", height: "full" }}>
      <Box sx={{ width: "full" }}>
        <NavbarComponent />
        <Box sx={{ display: "flex", width: "full", height: "100%" }}></Box>
      </Box>
      <Box sx={{ display: { sx: "flex-col", md: "flex" } }}>
        <JournalSidebarComponent />
        <Box sx={{ width: "full", padding: "20px" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default JournalLayout;
