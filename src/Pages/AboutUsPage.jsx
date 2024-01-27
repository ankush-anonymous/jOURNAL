import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useTheme,
  Avatar,
} from "@mui/material";
import React from "react";
import { AccountCircle } from "@mui/icons-material";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import NavbarComponent from "../Components/NavbarComponent";
import NumberScrollAnimation from "../Components/NumberScrollAnimation";
import Divider from "@mui/material/Divider";

const AboutUsPage = () => {
  const [isHovered1, setIsHovered1] = React.useState(false);
  const [isHovered2, setIsHovered2] = React.useState(false);
  const [isHovered3, setIsHovered3] = React.useState(false);
  const theme = useTheme();
  return (
    <>
      <NavbarComponent />

      {/* Hero Section  */}
      <section>
        <Box sx={{ height: "45vh", backgroundColor: "#A0E9FF" }}>
          Hero Section
        </Box>
      </section>

      {/* Countdown Section   */}
      <section>
        <Box sx={{ height: "50vh", marginTop: "60px", marginBottom: "100px" }}>
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
                  marginTop: "35px",
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

      {/* Our Vision/Mission Section  */}
      <section style={{ backgroundColor: "#FFDD95", padding: "5px" }}>
        <Box
          style={{ height: "50vh", marginTop: "60px", marginBottom: "160px" }}
        >
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
              Where it all started !!
            </Typography>
            <br />
          </Box>
          <Box style={{ padding: "25px" }}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  onMouseOver={() => setIsHovered1(true)}
                  onMouseOut={() => setIsHovered1(false)}
                  style={{
                    maxWidth: 345,
                    backgroundColor: isHovered1 ? "#e0e0e0" : "white",
                    transition: "background-color 0.5s", // Set the transition for background-color
                    boxShadow: isHovered1
                      ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                      : "none",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar>
                        <TrackChangesIcon />
                      </Avatar>
                    }
                    title={
                      <Typography variant="h4" style={{ fontSize: "1.2rem" }}>
                        Our Mission
                      </Typography>
                    }
                  />

                  <CardContent>
                    We aim to facilitate the global exchange and review of
                    research, ideas and expertise among individuals in the
                    scientific community. Our vision is simple: to partner with
                    researchers and scientific institutes, to enable a
                    realization of the full potential of their content in the
                    digital environment, and to increase the efficiency of
                    research in our world.
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  onMouseOver={() => setIsHovered2(true)}
                  onMouseOut={() => setIsHovered2(false)}
                  style={{
                    maxWidth: 345,
                    backgroundColor: isHovered2 ? "#e0e0e0" : "white",
                    transition: "background-color 0.5s", // Set the transition for background-color
                    boxShadow: isHovered2
                      ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                      : "none",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar>
                        <RemoveRedEyeIcon />
                      </Avatar>
                    }
                    title={
                      <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
                        Our Vision
                      </Typography>
                    }
                  />

                  <CardContent>
                    We aim to facilitate the global exchange and review of
                    research, ideas and expertise among individuals in the
                    scientific community. Our vision is simple: to partner with
                    researchers and scientific institutes, to enable a
                    realization of the full potential of their content in the
                    digital environment, and to increase the efficiency of
                    research in our world.
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card
                  onMouseOver={() => setIsHovered3(true)}
                  onMouseOut={() => setIsHovered3(false)}
                  style={{
                    maxWidth: 345,
                    backgroundColor: isHovered3 ? "#e0e0e0" : "white",
                    transition: "background-color 0.5s", // Set the transition for background-color
                    boxShadow: isHovered3
                      ? "0px 0px 10px 0px rgba(0,0,0,0.75)"
                      : "none",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar>
                        <RemoveRedEyeIcon />
                      </Avatar>
                    }
                    title={
                      <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
                        Our Values
                      </Typography>
                    }
                  />

                  <CardContent>
                    We aim to facilitate the global exchange and review of
                    research, ideas and expertise among individuals in the
                    scientific community. Our vision is simple: to partner with
                    researchers and scientific institutes, to enable a
                    realization of the full potential of their content in the
                    digital environment, and to increase the efficiency of
                    research in our world.
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </section>
      <section>{/* Why Us Section  */}</section>
      <section>{/* Feedback Section  */}</section>
      <section>{/* Our Team Section  */}</section>
      <section>{/* Our PublishingPartners Section  */}</section>
    </>
  );
};

export default AboutUsPage;
