import { Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Image from "mui-image";
import Grid from "@mui/material/Grid";
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
        <Container sx={{ py: 10 }}>
          <Typography variant="h1" color="#E2C044">
            Vehicles
          </Typography>
        </Container>
        <Container sx={{ border: "solid", borderColor: "white" }}>
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
          <Grid
            container
            sx={{
              py: 10,
              justifyContent: "space-between",
              border: "solid",
              borderColor: "yellow",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{ border: "solid", borderColor: "orange", textAlign: "left" }}
            >
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
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" color="#94B0DA">
                Features
              </Typography>
            </Grid>
          </Grid>
        </Container>
        {/* end of parent container */}
      </Box>
    </CssBaseline>
  );
};

export default Vehicles;
