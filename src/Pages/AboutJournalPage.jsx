import React from "react";
import JournalLayout from "../Components/JournalLayout";
import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { about } from "../data/About";
import { journals } from "../data/AllJournals";
import { subjects } from "../data/Subjects";

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
        <Divider />
        <section className="my-20">
          <Box>
            <Box
              sx={
                {
                  // border: "2px solid black",
                  // height: "100vh",
                  // padding: "15px",
                }
              }
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
          </Box>
        </section>
      </JournalLayout>
    </>
  );
};

export default AboutJournalPage;
