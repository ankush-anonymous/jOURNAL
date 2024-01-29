import "./App.css";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import AboutUsPage from "./Pages/AboutUsPage";
import ListOfJournalPage from "./Pages/ListOfJournalPage";
import AboutJournalPage from "./Pages/AboutJournalPage";
import EditorialBoardPage from "./Pages/EditorialBoardPage";
import IssuesPage from "./Pages/IssuesPage";
import ArchivesPage from "./Pages/ArchivesPage";
import MembershipPage from "./Pages/MembershipPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/journal/about" element={<AboutJournalPage />} />
          <Route path="/" element={<ListOfJournalPage />} />
          <Route path="/journal/editorial" element={<EditorialBoardPage />} />
          <Route path="/journal/issues" element={<IssuesPage />} />
          <Route path="/journal/archives" element={<ArchivesPage />} />

          {/* <Routes
            path="/admin/home"
            element={
              <ProtectedRouteAdmin>
                <AdminHomePage />
              </ProtectedRouteAdmin>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// export const ProtectedRoutePatient = ({ children }) => {
//   const isAuthorised = localStorage.getItem("user_authorised") === "true";
//   if (isAuthorised) {
//     return children;
//   } else {
//     return <Navigate to="/user/login" />;
//   }
// };
