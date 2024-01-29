import React from "react";
import JournalLayout from "../Components/JournalLayout";
import { Box, Divider, Grid, Typography } from "@mui/material";
import NavbarComponent from "../Components/NavbarComponent";
import { about } from "../data/About";
import { journals } from "../data/AllJournals";
import { subjects } from "../data/Subjects";
import { Link } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

const ListOfJournalPage = () => {
  return (
    <>
      <NavbarComponent />
      <Box sx={{ padding: "20px" }}>
        <Box>
          <Typography
            variant="h4"
            sx={{ fontFamily: "source sans pro", marginBottom: "20px" }}
          >
            Journals
          </Typography>
        </Box>
        {/* <Divider /> */}

        {/* Main Body  */}
        <Box>
          <Grid container spacing={4}>
            {/* Subjects sidebar */}
            <Grid item xs={12} md={3}>
              <Divider />

              <Box
                sx={{
                  // border: "2px solid black",
                  height: "100%",
                  padding: "15px",
                  marginTop: { xs: "20px", md: "40px" },
                }}
              >
                <Typography
                  variant="h5"
                  mb={2}
                  sx={{ fontFamily: "source sans pro" }}
                >
                  Subjects
                </Typography>
                <Divider />
                <Box sx={{ padding: "10px" }}>
                  {subjects.map((subject, index) => (
                    <Box
                      key={index}
                      sx={{
                        marginBottom: "4px",
                        transition: "margin-right 0.3s ease", // Adding transition effect
                        "&:hover": {
                          marginLeft: "2px", // Applying marginRight on hover
                          transform: "scale(1.1)", // Applying scaling on hover
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Typography variant="body2">{subject}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* All Journals  */}
            <Grid item xs={12} md={9}>
              <Divider />
              <Box
                sx={{
                  // border: "2px solid black",
                  // height: "100vh",
                  padding: "15px",
                }}
              >
                {journals.map((journal, index) => (
                  <Box key={index} sx={{ marginBottom: "30px" }}>
                    <Link
                      to="/journal/about"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {/* Wrapped the Typography component with Link */}
                      <Typography
                        variant="h6"
                        sx={{
                          color: "blue",
                          fontWeight: "bold",
                          "&:hover": { cursor: "pointer" },
                        }}
                      >
                        {journal.title}
                      </Typography>
                    </Link>
                    <Box>
                      <Typography variant="body2" sx={{ padding: "10px" }}>
                        {journal.aim}
                      </Typography>
                    </Box>
                    <Divider />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ListOfJournalPage;
