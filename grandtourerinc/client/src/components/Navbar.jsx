import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/IconButton";
import Image from "mui-image";
import { Link } from "react-router-dom";

const pages = ["Rent Now", "Vehicles", "Guidelines"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#090909",
        pt: 3,
        pb: 3,
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar
          disableGutters
          sx={{
            alignItems: "end",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page}>
                    <Button>
                      <Typography textAlign="center">{page}</Typography>
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* Navbarlogo */}
          <Box
            sx={{
              width: { xs: "75%", md: "15%" },
            }}
          >
            <Link to="/">
              <Image
                src={process.env.PUBLIC_URL + "navbarlogo.png"}
                fit="fill"
                duration={2000}
                easing="cubic-bezier(0.7, 0, 0.6, 1)"
                showLoading={false}
                errorIcon={true}
                shift="null"
                distance="100px"
                shiftDuration={900}
                bgColor="inherit"
              />
            </Link>
          </Box>
          {/* Navbarlogo */}
          <Box
            sx={{
              flexGrow: 0.5,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            {pages.map((page) => (
              <Link to={page}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 0,
                    mx: 0,
                    color: "#d8dbe2",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
