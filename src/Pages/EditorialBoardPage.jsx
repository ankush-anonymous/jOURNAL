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

const EditorialBoardPage = () => {
  return (
    <>
      <JournalLayout>
        <Box sx={{ width: "100%", height: "60px" }}>
          <Typography variant="h4">{about.title}</Typography>
        </Box>
        <Box sx={{ width: "100%", height: "60px" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Editorial Board
          </Typography>
        </Box>
        <Box sx={{ padding: "10px" }}>
          <Box>
            <section
              style={{
                padding: "35px",
                marginBottom: "100px",
              }}
            >
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
                  {about.editorialBoard.map((member, index) => (
                    <Grid
                      item
                      xs={12}
                      md={4}
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Card>
                        <CardMedia
                          component="img"
                          height="100"
                          image={member.image}
                          alt="Person"
                        />
                        <CardContent>
                          <Typography variant="h5">{member.name}</Typography>
                          <Typography variant="body1">
                            {member.email}
                          </Typography>
                          <Typography variant="body2">{member.bio}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </section>
          </Box>
        </Box>
      </JournalLayout>
    </>
  );
};

export default EditorialBoardPage;
