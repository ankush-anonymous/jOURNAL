import React from "react";
import JournalLayout from "../Components/JournalLayout";
import { Box, Divider, List, li, Typography } from "@mui/material";
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
            <Typography variant="h5"> Intro & Scope</Typography>
          </Box>
          <Box sx={{ marginLeft: "20px" }}>
            <Box sx={{ width: "100%", height: "50px" }}>
              <Typography variant="h6"> Introduction:</Typography>
            </Box>
            <Box>{about.introduction}</Box>
          </Box>
          <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
            <Box sx={{ width: "100%", height: "50px" }}>
              <Typography variant="h6"> Scope:</Typography>
            </Box>
            <Box>
              SEJIC encompasses a broad spectrum of theoretical and applied
              research areas, including:
              <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
                <ul>
                  <li>
                    <span className="font-bold">
                      • Information theory and coding:
                    </span>{" "}
                    We welcome contributions on fundamental aspects of
                    information theory, source coding, channel coding, and data
                    compression.
                  </li>
                  <li>
                    <span className="font-bold">
                      • Algorithmic information theory:
                    </span>{" "}
                    The journal covers research on Kolmogorov complexity,
                    algorithmic randomness, and their applications in areas like
                    complexity theory and learning theory.
                  </li>
                  <li>
                    <span className="font-bold">
                      • Information theory and coding:
                    </span>{" "}
                    We welcome contributions on fundamental aspects of
                    information theory, source coding, channel coding, and data
                    compression.
                  </li>
                  <li>
                    <span className="font-bold">
                      • Computational information retrieval:{" "}
                    </span>
                    We publish papers on information retrieval models,
                    algorithms, and evaluation methods, including text
                    retrieval, multimedia retrieval, and web search.
                  </li>
                  <li>
                    <span className="font-bold">
                      • Knowledge representation and reasoning:
                    </span>{" "}
                    SEJIC invites research on knowledge representation
                    formalisms, reasoning methods, and their applications in
                    areas like artificial intelligence, semantic web, and
                    natural language processing.
                  </li>
                  <li>
                    <span className="font-bold">
                      • Data mining and machine learning:{" "}
                    </span>
                    The journal covers topics in data mining algorithms, machine
                    learning techniques, and their applications in various
                    domains, including information extraction, social network
                    analysis, and bioinformatics.
                  </li>
                  <li>
                    <span className="font-bold">
                      • Computational complexity and cryptography:
                    </span>{" "}
                    We publish research on computational complexity theory,
                    hardness results, and cryptographic protocols, including
                    their information-theoretic underpinnings.
                  </li>
                  <li>
                    <span className="font-bold">
                      • Quantum information and computation:
                    </span>{" "}
                    SEJIC encourages submissions on the theory and applications
                    of quantum information, including quantum algorithms,
                    communication protocols, and error correction.
                  </li>
                  <li>
                    <span className="font-bold">
                      • Interdisciplinary areas:
                    </span>
                    The journal welcomes works at the interface of information
                    and computation with other disciplines, such as physics,
                    biology, economics, and social sciences.
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider />

        {/* section to show other journals  */}
        {/* <section className="my-20">
          <Box>
            <Box>
              {journals.map((journal, index) => (
                <Box key={index} sx={{ marginBottom: "30px" }}>
                  <Link
                    to="/journal/about"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
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
        </section> */}
      </JournalLayout>
    </>
  );
};

export default AboutJournalPage;
