import React from "react";
import { Container, CssBaseline, ListItem, Typography } from "@mui/material";
import Image from "mui-image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const Landing = () => {
  return (
    <CssBaseline>
      <Box sx={{ bgcolor: "#090909" }}>
        <Box
          sx={{
            maxWidth: "false",
            width: "100vw",
          }}
          disableGutters
        >
          <Image
            src={process.env.PUBLIC_URL + "banner.png"}
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
        <Box sx={{ width: "auto", px: { xs: 2, md: 12 } }} mt={5}>
          <Grid
            container
            spacing={12}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs="12" md="4">
              <Typography
                variant="h1"
                color="#FFD700"
                sx={{ typography: { xs: "h3", md: "h1" } }}
              >
                About Grand Tourer Inc.
              </Typography>
              <Typography
                variant="body"
                color="white"
                align="left"
                sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" } }}
              >
                Hi! My name is Pasi of Grand Tourer Inc! As of now, I only have
                one car specifically for you here at Turo.I hope to have at
                least 2 cars within a year, all of them Toyota Hybrids, because
                I know they are the most reliable, efficient, and affordable!
                When my fleet grows, I will also offer more luxurious vehicles.
                Thank you!
              </Typography>
            </Grid>
            <Grid
              item
              xs="12"
              md="8"
              sx={{
                border: "solid",
                borderColor: "white",
              }}
            >
              <Typography variant="h1" color="white" align="center">
                Selfie Image HERE!
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h2" color="#94B0DA" mt={5}>
            Grand Tourer Inc Vs Corporate Rental Agencies
          </Typography>
          <Grid container alignItems="baseline" spacing={12}>
            <Grid item xs={12} md={6} sx={{ my: 5 }}>
              <Typography
                color="white"
                variant="body"
                align="left"
                sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" } }}
              >
                Peer to Peer car rental services such as Turo has become more
                popular recently due to the increased cost and limited
                availability of traditional car rental agencies. During peak
                seasons you can expect to wait in long lines at your average
                rental car agency and when an issue arises with your rental
                you’ll also be waiting on hold for quite some time just to speak
                to an actual person. By renting with Grand Tourer Inc. you’ll
                not only save time with easy pick up / drop off process and
                avoiding those long lines. Once you book you’ll have direct
                contact with the host to answer any questions regarding your
                rental.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="white" align="left">
                Benefits of Booking with Grand Tourer Inc.
              </Typography>
              <Typography
                variant="body"
                fontSize="1.5rem"
                color="white"
                align="left"
              >
                <ul>
                  <li>
                    Easy communication (Just send a message or call your host!)
                  </li>
                  <li>More convenient than traditional rental car agencies</li>
                  <li>
                    Easy pick up and drop off process No waiting in long lines
                  </li>
                  <li>No hidden fees or up charges</li>
                  <li>Book the exact car you want, not what’s available</li>
                  <li>Save money at the pump with our Hybrid selection</li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h2" color="#94B0DA">
          Vehicles
        </Typography>
        <Container sx={{ mt: 5 }}>
          <Image src={process.env.PUBLIC_URL + "corolla.jpg"}></Image>
          <Grid container direction="column">
            <Grid item>
              <Typography fontSize="1.5rem" color="white" align="left">
                <ul>
                  <li>Apple Car Play / Android Auto</li>
                  <li>Bluetooth</li>
                  <li>Navigation</li>
                  <li>GPS</li>
                  <li>Auto Headlights </li>
                  <li>Lane Assist</li>
                  <li>Adaptive cruise control (not a self driving vehicle)</li>
                  <li>Lightly Tinted windows(not front windshield)</li>
                  <li>Factory All Weather floor mats</li>
                </ul>
              </Typography>
            </Grid>
            <Grid item>
              <Box display="flex">
                <Button variant="contained" size="large">
                  View More Details
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ pb: 5 }}>
          <Typography variant="h2" color="#94B0DA" my={5}>
            Guidelines
          </Typography>
          <Grid container direction="row" alignItems="center" spacing={12}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                border: "solid",
                borderColor: "white",
              }}
            >
              <Typography variant="h2" color="white">
                GOOGLE MAPS!
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="body"
                color="white"
                fontSize="1.5rem"
                align="left"
              >
                <ul>
                  <li>No Smoking</li>
                  <li>No Pets </li>
                  <li>Any issues with tires must be resolved by renter</li>
                  <li>
                    Any violation while driving my car is the renter’s
                    responsibility
                  </li>
                </ul>
              </Typography>
              <Box display="flex">
                <Button variant="contained" size="large">
                  View More Details
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </CssBaseline>
  );
};

export default Landing;
