import { Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Image from "mui-image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const Vehicles = () => {
  return (
    <CssBaseline>
      {/* parent container */}
      <Box sx={{ bgcolor: "#090909" }}>
        <Box
          sx={{
            maxWidth: "false",
            width: "100vw",
          }}
          disableGutters
        >
          <Image
            src={process.env.PUBLIC_URL + "vehiclesbanner.png"}
            fit="cover"
            width="100%"
            duration={2000}
            easing="cubic-bezier(0.7, 0, 0.6, 1)"
            showLoading={false}
            errorIcon={true}
            shift="null"
            distance="100px"
            shiftDuration={900}
            bgColor="inherit"
          ></Image>
        </Box>
        {/* spacer component */}
        <Box sx={{ height: "5vh" }}></Box>
        {/* spacer component */}
        <Container>
          <Typography variant="h1" color="#E2C044">
            Vehicles
          </Typography>
        </Container>
        {/* spacer component */}
        <Box sx={{ height: "5vh" }}></Box>
        {/* spacer component */}
        <Container>
          <Image
            src={process.env.PUBLIC_URL + "corolla.jpg"}
            fit="cover"
            width="100%"
            duration={2000}
            easing="cubic-bezier(0.7, 0, 0.6, 1)"
            showLoading={false}
            errorIcon={true}
            shift="null"
            distance="100px"
            shiftDuration={900}
            bgColor="inherit"
          ></Image>
          {/* spacer component */}
          <Box sx={{ height: "5vh" }}></Box>
          {/* spacer component */}
          <Grid
            container
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
              <Typography variant="h2" color="#94B0DA">
                Description
              </Typography>
              <Typography variant="body" fontSize="1.5rem" color="#D8DBE2">
                Save money on gas and drive more!
                <br />
                Save money and book early!
                <br />
                Save money and book 3 days or more!
                <br />
                <br />
                Affordable. Reliable. Comfortable.
                <br />
                <br />
                Need one to go to work or do daily chores?
                <br />
                <br />
                Visiting Los Angeles and need a car to get around town?
                <br />
                <br />
                Or just simply want to save gas on a road trip with friends?
                <br />
                <br />
                Look no further! Let my 2023 Toyota Corolla Hybrid “Take You
                Places!”
                <br />
                <br />
                Keep it for as long as you need it!
                <br />
                <br />
                Unlimited miles!
                <br />
                <br />
                Up to 500+ mile range on a full tank!
                <br />
                <br />
                Do give me a day notice before pick up so I can personally
                prepare the car and make sure it’s clean and safe when you pick
                it up!
                <br />
                <br />
                REMINDER!!!!!!!!!NO Pets 🐶 🐱 🦔 NO Smoking 🚭Any violation
                while driving my car is the renter’s responsibility✌🏻
                <br />
              </Typography>
              {/* spacer component */}
              <Box sx={{ height: "5vh" }}></Box>
              {/* spacer component */}
              <Button variant="contained" size="large">
                View More Guidelines
              </Button>
            </Grid>
            <Grid item xs={12} md={6} textAlign="left">
              <Typography variant="h2" color="#94B0DA" align="left">
                Features
              </Typography>
              <Typography
                variant="body"
                fontSize="1.5rem"
                color="#D8DBE2"
                align="left"
              >
                <ul>
                  <li>Must be 21+ to book</li>
                  <li>Automatic transmission</li>
                  <li>Android Auto</li>
                  <li>Apple CarPlay</li>
                  <li>Backup camera</li>
                  <li>Bluetooth</li>
                  <li>GPS</li>
                  <li>Keyless entry</li>
                  <li>Long-term car</li>
                  <li>USB charger</li>
                  <li>USB input</li>
                  <li>Tinted</li>
                  <li>Navigation</li>
                  <li>Hybrid</li>
                  <li>5 Seater</li>
                </ul>
              </Typography>
              {/* spacer component */}
              <Box sx={{ height: "5vh" }}></Box>
              {/* spacer component */}
              <Button variant="contained" size="large">
                Rent Me On Turo!
              </Button>
            </Grid>
          </Grid>
        </Container>
        {/* spacer component */}
        <Box sx={{ height: "5vh" }}></Box>
        {/* spacer component */}
      </Box>
      {/* end of parent container */}
    </CssBaseline>
  );
};

export default Vehicles;
