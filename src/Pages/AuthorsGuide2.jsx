import React from "react";
import JournalLayout from "../Components/JournalLayout";
import { Box, Typography } from "@mui/material";
import { about } from "../data/About";

const AuthorsGuide2 = () => {
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
        <section>
          <Box sx={{ marginLeft: "10px" }}>
            The editorial team is commonly seen as the foundation of any
            journal. Science EVE journals are overseen by a team of
            well-qualified researchers with extensive experience in various
            fields. The editorial office collaborates closely with our Editors
            during the publication process.
          </Box>
          <Box sx={{ marginLeft: "10px", marginTop: "10px" }}>
            An editor's primary responsibility is to oversee the Peer Review
            process for an article. They collaborate with the editorial office
            to handle manuscripts within their specialty, choosing appropriate
            reviewers, and provide writers comprehensive evaluation feedback.
            Before accepting a review invitation, editors must confirm certain
            criteria are met. Editors should promptly notify the editorial
            office if they perceive any conflicting interests with the writers
            and request to be transferred.
          </Box>
        </section>

        {/* Choosing Reviewers section  */}
        <section className="mt-10">
          <Box sx={{ width: "100%", height: "50px" }}>
            <Typography variant="h5">Choosing Reviewers</Typography>
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
              Editors are tasked with selecting suitable reviewers for
              assessment. You can select reviewers from our database of
              volunteers who are most suitable for the manuscript's scope. If
              you believe the current reviewers are inadequate in evaluating the
              research, you have the option to bring in external reviewers.
              Editors must verify that reviewers do not have any conflicting
              interests with the authors or their work. Competing interests are
              factors that could influence an unbiased editorial decision. Avoid
              selecting reviewers who have personal or professional connections
              with the authors or are working on a comparable article.
            </Typography>
          </Box>
        </section>

        {/* Review Process section  */}
        <Box
          sx={{
            height: "100%",
            // border: "1px solid black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%", height: "50px" }}>
            <Typography variant="h5">Review Process</Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <Typography variant="body1">
              Journal editors are tasked with providing comprehensive,
              insightful, and impartial feedback to authors regarding their
              work. Editors supervise the review process of an article and work
              with reviewers to provide a prompt and efficient peer review
              report. Editors must oversee the quality of reviewers' remarks and
              ensure they address certain factors in their reports.
            </Typography>
            <Box sx={{ marginTop: "20px", marginLeft: "20px" }}>
              <ul>
                <li>
                  <span className="font-bold">
                    • Originality of the article
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    • Significance of the research
                  </span>
                </li>
                <li>
                  <span className="font-bold">• Ethical considerations</span>
                </li>
                <li>
                  <span className="font-bold">
                    • Adequate recognition of previous research
                  </span>
                </li>
              </ul>
            </Box>
            <Typography variant="body1">
              We employ a single-blinded peer-review system where reviewers are
              aware of the authors' identities, but writers are unaware of the
              identities of the peer reviewers. Editors must ensure that this
              approach is adhered to and that information is not shared with the
              authors or any other researchers.
            </Typography>
          </Box>
        </Box>

        {/* Delivering a Final Decision section  */}
        <Box
          sx={{
            height: "100%",
            // border: "1px solid black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: "100%", height: "50px" }}>
            <Typography variant="h5">Delivering a Final Decision</Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <Typography variant="body1">
              Editors must allocate a manuscript to a minimum of 3 reviewers for
              assessment and need at least two reviews to make a final judgment.
              The ultimate decision may consider the reviewer's comments and
              also include the Editor's thoughts or recommendations.
              <span className="mt-5">
                The final decision should acknowledge the contributions of all
                members and furnish the authors with a comprehensive report:
              </span>
            </Typography>
            <Box sx={{ marginTop: "20px", marginLeft: "20px" }}>
              <ul>
                <li>
                  <span className="font-bold">
                    • Scientific inconsistencies
                  </span>
                </li>
                <li>
                  <span className="font-bold">• Methodological drawbacks</span>
                </li>
                <li>
                  <span className="font-bold">
                    • Research topic significance{" "}
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    • Suggestions for article improvement
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    • Quality and accuracy of figures and tables
                  </span>
                </li>
                <li>
                  <span className="font-bold">• Grammatical errors</span>
                </li>
              </ul>
            </Box>
            <Typography variant="body1">
              The editor is accountable for the final judgment and must be
              capable of explaining any questions or issues made by the authors
              regarding the review process. Editors can reject a submission if
              they question its originality, clarity, or relevance to the
              journal's research.
            </Typography>
          </Box>
        </Box>
      </JournalLayout>
    </>
  );
};

export default AuthorsGuide2;
