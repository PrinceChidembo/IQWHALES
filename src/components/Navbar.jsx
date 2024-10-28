import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import logo from "../assets/images/logo.png"; // Update this path

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background:
          "linear-gradient(90deg, rgb(78, 84, 200), rgb(143, 148, 251))",
        color: "white",
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="IQWhalesAnalytics Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
          </Link>
        </Box>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleMenuClick}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component={Link} to="/">
                Home
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/AboutPage"
              >
                About Us
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/ServicesPage"
              >
                Services
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/ContactPage"
              >
                Contact
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/AboutPage">
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/ServicesPage">
              Services
            </Button>
            <Button color="inherit" component={Link} to="/ContactPage">
              Contact
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
