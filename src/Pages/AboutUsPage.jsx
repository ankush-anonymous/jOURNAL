import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

import NavbarComponent from "../Components/NavbarComponent";
import NumberScrollAnimation from "../Components/NumberScrollAnimation";
import Divider from "@mui/material/Divider";

const AboutUsPage = () => {
  const theme = useTheme();
  return (
    <>
      <NavbarComponent />
      <section>
        <Box sx={{ height: "45vh", backgroundColor: "#A0E9FF" }}>
          Hero Section
        </Box>
      </section>
      <section>
        <Box sx={{ height: "50vh", marginTop: "60px", marginBottom: "60px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "source sans pro",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "2.5rem", // Adjust the font size for small screens
                  padding: "15px",
                },
              }}
            >
              Providing unparalleled services since 2003
            </Typography>
            <br />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "source sans ",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1rem", // Adjust the font size for small screens
                  marginTop: "20px",
                  padding: "15px",
                },
              }}
            >
              With two decades of experience, we have achieved some major
              accomplishments.
            </Typography>
          </Box>

          {/* Countdown  */}
          <Box
            sx={{
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ marginTop: "50px", width: "100%" }}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                  }}
                >
                  <NumberScrollAnimation targetValue={1234} />
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    Publishes
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                  }}
                >
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ marginLeft: "10px", marginRight: "10px" }}
                  />
                  <NumberScrollAnimation targetValue={5678} />
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    Another Metric
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                  }}
                >
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ marginLeft: "10px", marginRight: "10px" }}
                  />
                  <NumberScrollAnimation targetValue={91011} />
                  <Typography variant="subtitle1" sx={{ mt: 1 }}>
                    Yet Another Metric
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </section>

      <section>{/* Our Vision/Mission Section  */}</section>
      <section>{/* Why Us Section  */}</section>
      <section>{/* Feedback Section  */}</section>
      <section>{/* Our Team Section  */}</section>
      <section>{/* Our PublishingPartners Section  */}</section>
    </>
  );
};

export default AboutUsPage;
