import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, CssBaseline } from "@mui/material";

function NavbarComponent() {
  const tabs = [
    { label: "AboutUs", link: "/about" },
    { label: "Journals", link: "/about" },
    { label: "Membership", link: "/membership" },
    { label: "Contact", link: "/contact" },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      {/* Container to center content vertically */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          alignItems: "center",
        }}
      >
        {/* Main AppBar with more height */}
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#176B87",
            height: 80,
          }}
        >
          <Toolbar
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "5px",
            }}
          >
            {/* Logo on the left */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>

            {/* User Icon on the right */}
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* SubBar with less height */}
        <AppBar
          position="static"
          sx={{ backgroundColor: "#45889F", height: 40 }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              marginTop: "3px",
              flexGrow: 1,
            }}
          >
            {/* Tabs centered */}
            <Tabs value={value} onChange={handleChange} textColor="inherit">
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label.toUpperCase()}
                  component="a"
                  href={tab.link}
                />
              ))}
            </Tabs>
          </Box>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}

export default NavbarComponent;
