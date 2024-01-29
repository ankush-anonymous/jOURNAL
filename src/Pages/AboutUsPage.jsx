import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  useTheme,
  Avatar,
  CardMedia,
} from "@mui/material";
import React from "react";
import { AccountCircle } from "@mui/icons-material";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

import NavbarComponent from "../Components/NavbarComponent";
import NumberScrollAnimation from "../Components/NumberScrollAnimation";
import Divider from "@mui/material/Divider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AboutUsPage = () => {
  const [isHovered1, setIsHovered1] = React.useState(false);
  const [isHovered2, setIsHovered2] = React.useState(false);
  const [isHovered3, setIsHovered3] = React.useState(false);
  const theme = useTheme();

  //for partner's carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <NavbarComponent />

      {/* Hero Section  */}
      <section>
        <Box
          sx={{
            height: "45vh",
            backgroundColor: "#A0E9FF",
            backgroundImage:
              'url("https://res.cloudinary.com/dtjg2hgky/image/upload/v1706551559/circle3_vbnqvp.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "contrast(120%) brightness(110%) blur(10%)", // Adjust these values as needed
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "semibold",
              fontFamily: "source sans pro ",
            }}
          >
            Our research today is the
          </Typography>
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            science of tomorrow
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "500px", color: "white", marginTop: "10px" }}
          >
            We realize this belief by encouraging exceptional ideas,
            facilitating new researchers and spreading innovative concepts
            globally.
          </Typography>
        </Box>
      </section>

      {/* Countdown Section   */}
      <section
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            marginTop: "60px",
            marginBottom: "100px",
            overflow: "hidden", // Ensure the box doesn't overflow its container
            [theme.breakpoints.down("sm")]: {
              marginTop: "100px",
              marginBottom: "100px",
            },
          }}
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
                // fontFamily: "Merriweather ",
                fontFamily: "source sans pro",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "2.5rem", // Adjust the font size for small screens
                  padding: "15px",
                  marginTop: "50px",
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
                  marginTop: "100px",
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
              flexGrow: 1,
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
          sx={{
            marginTop: "60px",
            marginBottom: "100px",
            [theme.breakpoints.down("sm")]: {
              marginTop: "100px",
              marginBottom: "100px",
              height: "fit-content",
            },
          }}
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
                  fontSize: "2.5rem",
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
                        <AccessibilityNewIcon />
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

      {/* Why Us Section  */}
      <section style={{ padding: "5px" }}>
        <Box
          sx={{
            marginTop: "60px",
            marginBottom: "100px",
            [theme.breakpoints.down("sm")]: {
              marginTop: "100px",
              marginBottom: "100px",
              height: "fit-content",
            },
          }}
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
                fontFamily: "",
                // color: "#176B87",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "2.5rem",
                  padding: "15px",
                },
              }}
            >
              Why Chose Us ??
            </Typography>
            <br />
          </Box>
          <Box sx={{ padding: "45px" }}>
            <Grid container spacing={12}>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center", // Center-align text inside the Box
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#176B87", fontWeight: "bold" }}
                  >
                    TIMELY PUBLICATION
                  </Typography>
                  <Typography variant="body1">
                    We provide our authors with a swift and care-free publishing
                    process.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center", // Center-align text inside the Box
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#176B87", fontWeight: "bold" }}
                  >
                    TIMELY PUBLICATION
                  </Typography>
                  <Typography variant="body1">
                    We provide our authors with a swift and care-free publishing
                    process.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center", // Center-align text inside the Box
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#176B87", fontWeight: "bold" }}
                  >
                    TIMELY PUBLICATION
                  </Typography>
                  <Typography variant="body1">
                    We provide our authors with a swift and care-free publishing
                    process.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center", // Center-align text inside the Box
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#176B87", fontWeight: "bold" }}
                  >
                    TIMELY PUBLICATION
                  </Typography>
                  <Typography variant="body1">
                    We provide our authors with a swift and care-free publishing
                    process.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center", // Center-align text inside the Box
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#176B87", fontWeight: "bold" }}
                  >
                    TIMELY PUBLICATION
                  </Typography>
                  <Typography variant="body1">
                    We provide our authors with a swift and care-free publishing
                    process.
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center", // Center-align text inside the Box
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "#176B87", fontWeight: "bold" }}
                  >
                    TIMELY PUBLICATION
                  </Typography>
                  <Typography variant="body1">
                    We provide our authors with a swift and care-free publishing
                    process.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </section>

      <section>{/* Feedback Section  */}</section>

      {/* Our Team Section  */}
      <section
        style={{
          backgroundColor: "#A0E9FF",
          padding: "35px",
          marginBottom: "100px",
        }}
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
              // color: "#176B87",
              [theme.breakpoints.down("sm")]: {
                fontSize: "2rem",
                padding: "15px",
              },
            }}
          >
            Our Scholar Team
          </Typography>
          <br />
        </Box>
        <Box>
          <Grid
            container
            spacing={5}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center", // Center-align text inside the Box
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center", // Center-align text inside the Box
              }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://res.cloudinary.com/dtjg2hgky/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1692109846/samples/smile.jpg"
                  alt="Person"
                />
                <CardContent>
                  <Typography variant="h5">Dr. Alfred Colons</Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus at sed molestias dignissimos repudiandae itaque
                    deleniti doloremque, provident optio molestiae ea
                    consequuntur enim velit voluptates temporibus veritatis
                    fugit facilis incidunt?
                  </Typography>
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
                textAlign: "center", // Center-align text inside the Box
              }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://res.cloudinary.com/dtjg2hgky/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1692109846/samples/smile.jpg"
                  alt="Person"
                />
                <CardContent>
                  <Typography variant="h5">Dr. Alfred Colons</Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Delectus at sed molestias dignissimos repudiandae itaque
                    deleniti doloremque, provident optio molestiae ea
                    consequuntur enim velit voluptates temporibus veritatis
                    fugit facilis incidunt?
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </section>

      {/* Our PublishingPartners Section  */}
      <section
        style={{
          padding: "35px",
          marginBottom: "100px",
        }}
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
              // color: "#176B87",
              [theme.breakpoints.down("sm")]: {
                fontSize: "2rem",
                padding: "15px",
              },
            }}
          >
            Our Publishing Partners
          </Typography>
          <br />
        </Box>
        <Carousel
          responsive={responsive}
          infinite
          draggable={false}
          swipeable={false}
          centerMode
          autoPlay
          autoPlaySpeed={2000}
          keyBoardControl
          customTransition="transform 500ms ease-in-out"
          arrows={false}
        >
          {/* Your carousel items go here */}
          <div>
            <img
              src="https://res.cloudinary.com/dtjg2hgky/image/upload/v1706396771/google_scholar_sfmhmy.png"
              alt="Image 1"
              style={{ maxWidth: "200px", height: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dtjg2hgky/image/upload/v1706397110/ieee_lgkfbf.png"
              alt="Image 2"
              style={{ maxWidth: "200px", height: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dtjg2hgky/image/upload/v1706397008/springer_jguhov.png"
              alt="Image 3"
              style={{ maxWidth: "200px", height: "auto" }}
            />
          </div>
          {/* Add more images as needed */}
        </Carousel>
      </section>
    </>
  );
};

export default AboutUsPage;
