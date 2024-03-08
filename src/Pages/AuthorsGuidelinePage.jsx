import React from "react";
import JournalLayout from "../Components/JournalLayout";
import { Box, Typography } from "@mui/material";

import { about } from "../data/About";

const AuthorsGuidelinePage = () => {
  return (
    <>
      <JournalLayout>
        <section>
          <Box sx={{ width: "100%", height: "60px" }}>
            <Typography variant="h4">{about.title}</Typography>
          </Box>
          <Box sx={{ width: "100%", height: "60px", marginLeft: "10px" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Authors Guideline
            </Typography>
          </Box>
        </section>
        {/* Duties / Responsibilities of Authors section  */}
        <section>
          <Box sx={{ width: "100%", height: "50px" }}>
            <Typography variant="h5">
              Duties / Responsibilities of Authors
            </Typography>
          </Box>
          <Box sx={{ width: "100%", height: "60px", marginLeft: "10px" }}>
            <Box sx={{ marginLeft: "20px", marginTop: "5px" }}>
              <ol>
                <li>1. Manuscripts must be original and not plagiarized.</li>
                <li>
                  2. Manuscript authorship should be restricted to individuals
                  who have made substantial contributions.{" "}
                </li>
                <li>
                  3.Authors must correctly and precisely attribute the work of
                  others.{" "}
                </li>
                <li>
                  4. Authors must reveal any financial or significant conflict
                  of interest that could impact the findings or understanding of
                  their article and recognize persons or organizations that have
                  offered financial backing for the research.{" "}
                </li>
                <li>
                  5. Authors may need to submit raw data along with their papers
                  for editorial evaluation and should be ready to grant public
                  access to this data if feasible.{" "}
                </li>
                <li>
                  6. Manuscripts must be unpublished and not being considered
                  for publication elsewhere.{" "}
                </li>
              </ol>
            </Box>
          </Box>
        </section>
        {/*  Open Access Policy  */}
        <section className="mt-32">
          <Box sx={{ width: "100%", height: "50px" }}>
            <Typography variant="h5">Open Access Policy</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "50px",
              marginBottom: "80px",
              marginLeft: "20px",
            }}
          >
            <Typography variant="body1">
              Open access is a publishing model for scholarly communication
              which enables the dissemination of research articles to the global
              community without any cost and any form of restriction. It is the
              practice of providing unrestricted access to peer-reviewed
              academic journal articles via the internet and is increasingly
              being provided to scholarly monographs and book chapters. All
              original research papers published by SCIENCE EVE are available
              freely and permanently accessible online immediately after
              publication. Readers are free to copy and distribute the
              contributions under creative commons attribution-non commercial
              licence. Authors can benefit from the open access publication
              model a lot from the following aspects:
            </Typography>
          </Box>
          <Box
            sx={{ marginLeft: "20px", marginTop: "20px", marginLeft: "40px" }}
          >
            <ul>
              <li>
                <span className="font-bold">
                  • High Availability and High Visibility
                </span>{" "}
                free and unlimited accessibility of the publication over the
                internet without any restrictions.
              </li>
              <li>
                <span className="font-bold">
                  • Rigorous peer review of research papers
                </span>{" "}
                Fast, high-quality double blind peer review.
              </li>
              <li>
                <span className="font-bold">
                  • Faster publication with less cost
                </span>{" "}
                Papers published on the internet without any subscription
                charge.
              </li>
              <li>
                <span className="font-bold">• Higher Citation </span>
                open access publications are more frequently cited.
              </li>
            </ul>
          </Box>
        </section>
        {/* Copyright section  */}
        <section className="mt-10">
          <Box sx={{ width: "100%", height: "50px" }}>
            <Typography variant="h5">Copyright</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "50px",
              marginBottom: "80px",
              marginLeft: "20px",
            }}
          >
            <Typography variant="body1">
              SCINCE EVE papers will be provided under the Creative Commons
              Attribution 4.0 International License (CC-BY). Anyone can copy,
              distribute, and transmit the article as long as they properly cite
              the original article and source. The author accepts that the work
              will be permanently available on SCIPUB's website under the
              Creative Commons Attribution 4.0 International License (CC-BY),
              whether the copyright is held by the author or another party.
              SCIPUB has the right to use and store the content to create a
              record, and may reformat or paraphrase it to enhance the
              appearance of the record. We require information regarding its
              business use.
            </Typography>
          </Box>
        </section>
        {/* Appeal  section  */}
        <Box
          sx={{
            height: "100%",
            // border: "1px solid black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%", height: "50px" }}>
            <Typography variant="h5">Appeal </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "50px",
              marginBottom: "80px",
              marginLeft: "20px",
            }}
          >
            <Typography variant="body1">
              Authors must write editor@scieve.org to appeal a decision,
              providing a detailed explanation of their objections or grounds
              for the appeal. Appeals will be reviewed only if a reviewer or
              editor is believed to have made a substantial error or shown bias,
              or if objectivity is affected by a documented conflicting
              interest. During the appeal process, the paper is still being
              formally reviewed and should not be sent to any other
              publications. Typically, the appeals procedure will be completed
              within 15 workdays. SCIPUB has the authority to make the ultimate
              decision, and further appeals will not be entertained. Once the
              appeals processing is over, the manuscript can be submitted to
              alternative publishers. Appeals for published items must be
              submitted within 12 months of the initial publication date.
            </Typography>
          </Box>
        </Box>
        {/* Manuscript Template  */}
        <Box
          sx={{
            height: "100%",
            // border: "1px solid black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%", height: "50px" }}>
            <Typography variant="h5">Manuscript Template </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "50px",
              marginBottom: "80px",
              marginLeft: "20px",
            }}
          >
            <Typography variant="body1">
              Authors may download a MS Word template by clicking here. Authors
              may download a LaTeX template by
              <a href="#">clicking here</a>
            </Typography>
            <Typography variant="body1">
              Authors may download a MS Word template by clicking here. Authors
              may download a LaTeX template by
              <a>clicking here</a>
            </Typography>
          </Box>
        </Box>
        {/* Manuscript preparation  */}
        <Box
          sx={{
            height: "100%",
            // border: "1px solid black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%", height: "50px" }}>
            <Typography variant="h5">Manuscript Preparation </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "50px",
              marginBottom: "80px",
              marginLeft: "20px",
            }}
          >
            <Typography variant="body1">
              Submissions to our journals must be in English. Accepted papers
              for publication range from 5 to 20 pages in a single-column
              format, containing a minimum of 3000 words and a maximum of 10000
              words, including references. The primary text is typically divided
              into distinct sections, including Introduction, Materials and
              Methods, Results, Discussion, Conclusion, Acknowledgement,
              Conflict of Interest, Appendix, and Reference.
            </Typography>
            <Typography variant="body1">
              Authors may download a MS Word template by clicking here. Authors
              may download a LaTeX template by
            </Typography>

            {/*   */}
            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Paper Title </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  The title should be concise, precise, and instructive, with a
                  maximum of 20 words.
                </Typography>
              </Box>
            </section>
            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Abstract</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  The abstract should be a cohesive paragraph consisting of
                  200-350 words. It should succinctly cover the research
                  background, purpose, techniques, key results, major
                  conclusions, and contributions to the field. The study should
                  highlight novel or significant elements. Include research
                  limitations/implications, practical implications, and social
                  implications in your publications if they are relevant.
                </Typography>
              </Box>
            </section>
            <section className="">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Introduction </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  The Introduction should concisely outline the study's aims and
                  offer sufficient background information to explain the purpose
                  of the investigation and the hypotheses being tested. address.
                </Typography>
              </Box>
            </section>
            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Materials and Methods </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  Outline the research strategy, nature, duration,
                  inclusion/exclusion criteria, and selection of subjects.
                  Provide a thorough description of the technique, covering
                  sample collection, processing, laboratory analysis, and the
                  statistical tests employed for data analysis. Organize section
                  headings/subheadings in a coherent sequence to title each
                  category or method. (for example: 1, 2; 1.1, 2.1; 1.1.1,
                  2.1.1…etc)
                </Typography>
              </Box>
            </section>
            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Results</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  The results should be organized in a coherent order in the
                  text, tables, and figures. Avoid redundant display of
                  identical information in both tables and figures. The results
                  should exclude content suitable for the Discussion section.
                  This part should include all tables, graphs, statistical
                  analyses, and sample computations.
                </Typography>
              </Box>
            </section>
            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Discussion</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  Interpret your data and compare them with findings from other
                  studies. The importance of the discoveries must be clearly
                  highlighted. Provide a rationale for any discrepancies between
                  your results and your initial predictions. If your results are
                  consistent, explain the theory that the evidence corroborated.
                </Typography>
              </Box>
            </section>
            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Conclusion</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "10px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  Present the primary findings of the experimental research.
                  Highlight the work's impact on scientific research and its
                  economic consequences.
                </Typography>
              </Box>
            </section>
            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Acknowledgements</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  The acknowledgements section is where you can express
                  gratitude to individuals who were indirectly involved in the
                  research, such as those who provided technical help, loaned
                  experimental facilities, or offered comments and
                  recommendations throughout the manuscript's preparation. It is
                  crucial that individuals named here are informed prior to your
                  acknowledgment of their contributions. Exclude dedications.
                </Typography>
              </Box>
            </section>

            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Funding Information</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  The authors must acknowledge the manuscript's funders and
                  include all essential financial details.
                </Typography>
              </Box>
            </section>
            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Author Contributions</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  Authors must provide a statement of responsibility in the
                  article detailing each author's contribution. Detail levels in
                  manuscripts vary among disciplines, with certain disciplines
                  consisting of individual work that can be clearly stated,
                  while others include collaborative collaboration across all
                  stages.
                </Typography>
              </Box>
            </section>
            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Conflict of Interest</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  A conflict of interest occurs when decisions about the
                  research are swayed by considerations like financial benefits
                  or personal connections. Authors must reveal any financial,
                  personal, or other connections that could impact or appear to
                  impact their work.
                </Typography>
              </Box>
            </section>
            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Appendix</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  An appendix is commonly incorporated in mathematical or
                  computational modeling and can be beneficial.
                </Typography>
              </Box>
            </section>
            <section className="mt-10">
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="h5">Tables</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "50px",
                  marginBottom: "30px",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="body1">
                  Tables must be self-contained, and data should not be
                  replicated in figures. Tables must be numbered sequentially.
                  Each table should be displayed on an individual page with a
                  detailed yet succinct caption positioned above the table.
                  Tables should have double spacing and should not utilize
                  vertical lines to separate columns. Column headers should be
                  concise, with units of measurement in parenthesis. Define all
                  abbreviations in footnotes. Utilize superscript letters for
                  footnotes instead of numerals and limit the amount of
                  footnotes. Asterisks should be exclusively used for denoting P
                  values.
                </Typography>
                <Box sx={{ width: "100%", height: "60px", marginLeft: "10px" }}>
                  <Box sx={{ marginLeft: "20px", marginTop: "5px" }}>
                    <ol>
                      <li>
                        1. TABLE TITLE: Each table requires a distinct title
                        positioned at the top. Headings should be succinct and
                        to the point, avoiding full sentences.
                      </li>
                      <li>
                        2. TABLE FORMAT Utilize the table capabilities in
                        Microsoft Word for efficient table insertion. Avoid
                        using the tab key to construct tables.
                      </li>
                      <li>
                        3. TABLE NUMBERING and CITATIONs Tables within the main
                        text should be sequentially numbered and referenced in
                        the order they occur.
                      </li>
                    </ol>
                  </Box>
                </Box>
              </Box>
            </section>
          </Box>
        </Box>
      </JournalLayout>
    </>
  );
};

export default AuthorsGuidelinePage;
