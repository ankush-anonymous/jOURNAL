import { Box } from "@mui/material";
import React from "react";

import NavbarComponent from "../Components/NavbarComponent";

const AboutUsPage = () => {
  return (
    <>
      <NavbarComponent />
      <section>
        <Box sx={{ height: "40vh" }}></Box>
      </section>
      <section>{/* Count Down Section  */}</section>
      <section>{/* Our Vision/Mission Section  */}</section>
      <section>{/* Why Us Section  */}</section>
      <section>{/* Feedback Section  */}</section>
      <section>{/* Our Team Section  */}</section>
      <section>{/* Our PublishingPartners Section  */}</section>
    </>
  );
};

export default AboutUsPage;
