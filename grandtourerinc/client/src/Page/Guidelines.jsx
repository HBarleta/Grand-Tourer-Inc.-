import { CssBaseline, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Image from "mui-image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Guidelines = () => {
  return (
    <CssBaseline>
      {/* parent container */}
      <Box sx={{ bgcolor: "#090909" }}>
        {/* Banner image */}
        <Box
          sx={{
            maxWidth: "false",
            width: "100vw",
          }}
          disableGutters
        >
          <Image
            src={process.env.PUBLIC_URL + "guidelinesbanner.png"}
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
        {/* Banner image */}
        {/* spacer component */}
        <Box sx={{ height: "5vh" }}></Box>
        {/* spacer component */}
        <Typography variant="h1" color="#E2C044">
          Guidelines
        </Typography>
        {/* spacer component */}
        <Box sx={{ height: "5vh" }}></Box>
        {/* spacer component */}
        <Box
          sx={{
            px: { xs: 2, md: 12 },
            width: "75%",
            margin: "auto",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6} textAlign="left">
              <Typography variant="h2" color="#94B0DA" align="left">
                Prepaid Fuel
              </Typography>
              {/* spacer component */}
              <Box sx={{ height: "2.5vh" }}></Box>
              {/* spacer component */}
              <Box width="75%">
                <Typography variant="body" fontSize="1.5rem" color="#D8DBE2">
                  Let me fill it up for you! No time to pass by the gas station?
                  Return this car in any fuel level with this added Extra
                  option.
                  <br />
                  <br />
                  $40/trip
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h2" color="#94B0DA" align="left">
                General
              </Typography>
              <Box width="75%">
                <Typography
                  variant="body"
                  fontSize="1.5rem"
                  color="#D8DBE2"
                  align="left"
                >
                  <ul>
                    <li>No Smoking $300 cleaning fee</li>
                    <li>No Pets $200 cleaning fee</li>
                    <li>
                      Renter is responsible to resolve any punctures on tires
                      during their trip
                    </li>
                    <li>
                      Any violation while driving my car is the renter’s
                      responsibility
                    </li>
                  </ul>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* spacer component */}
        <Box sx={{ height: "20vh" }}></Box>
        {/* spacer component */}
        <Box
          sx={{
            px: { xs: 2, md: 12 },
            width: "75%",
            margin: "auto",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6} textAlign="left">
              <Typography variant="h2" color="#94B0DA" align="left">
                Parking Details
              </Typography>
              {/* spacer component */}
              <Box sx={{ height: "2.5vh" }}></Box>
              {/* spacer component */}
              <Box width="75%">
                <Typography
                  variant="body"
                  fontSize="1.5rem"
                  color="#D8DBE2"
                  align="left"
                >
                  <ul>
                    <li>Pick-Up</li>
                    <ul>
                      <li>
                        Depending on time and day of pick up, it’ll either be
                        inside our garage or parked on the street around the
                        address.
                      </li>
                    </ul>
                    <li>Drop-Off</li>
                    <ul>
                      <li>
                        You can drop off the vehicle anytime on a legal side
                        street parking around my address. I will park the car
                        inside myself.
                      </li>
                    </ul>
                    <li>After Parking</li>
                    <ul>
                      <li>
                        Pop the trunk open, lock the doors, leave the key inside
                        the trunk and close the trunk.
                      </li>
                    </ul>
                  </ul>
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={2}></Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h2" color="#94B0DA" align="left">
                Drop-off / Pick-up Location
              </Typography>
              <Box
                sx={{ height: "75%", border: "solid", borderColor: "white" }}
              ></Box>
            </Grid>
          </Grid>
          {/* spacer component */}
          <Box sx={{ height: "10vh" }}></Box>
          {/* spacer component */}
        </Box>
        <Box>
          <Typography variant="h2" color="#E2C044">
            Ready to Rent? Check out my vehicles!
            <Link to="/vehicles">
              <Button variant="contained" size="large" sx={{ mx: 5 }}>
                Vehicles!
              </Button>
            </Link>
          </Typography>
        </Box>
        {/* spacer component */}
        <Box sx={{ height: "10vh" }}></Box>
        {/* spacer component */}
      </Box>
      {/* end of parent container */}
    </CssBaseline>
  );
};

export default Guidelines;
