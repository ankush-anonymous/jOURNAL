import "./App.css";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import AboutUsPage from "./Pages/AboutUsPage";
import ListOfJournalPage from "./Pages/ListOfJournalPage";
import AboutJournalPage from "./Pages/AboutJournalPage";
import EditorialBoardPage from "./Pages/EditorialBoardPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/journal/about" element={<AboutJournalPage />} />
          <Route path="/journals" element={<ListOfJournalPage />} />
          <Route path="/" element={<EditorialBoardPage />} />

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
