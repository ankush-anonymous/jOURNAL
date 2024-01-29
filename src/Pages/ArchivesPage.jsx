import React from "react";
import JournalLayout from "../Components/JournalLayout";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { about } from "../data/About";
import { Link } from "react-router-dom";

const ArchivesPage = () => {
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
            Archives
          </Typography>
          <Divider />
        </Box>
        <Box sx={{ padding: "20px" }}>
          {about.archives.map((archive, archiveIndex) => (
            <Box key={archiveIndex} sx={{ marginTop: "10px" }}>
              <Typography variant="h5">{archive.title}</Typography>
              {archive.issue.map((issue, issueIndex) => (
                <Box key={issueIndex} sx={{ padding: "10px" }}>
                  <Link
                    className="text-blue-800 font-semibold"
                    // to={`/journal/archives/${archive.title}/${issue.title}`}
                  >
                    {issue.title}
                  </Link>
                </Box>
              ))}
              <Divider />
            </Box>
          ))}
        </Box>
      </JournalLayout>
    </>
  );
};

export default ArchivesPage;
