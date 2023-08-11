import { CssBaseline } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Image from "mui-image";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const Guidelines = () => {
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
        {/* spacer component */}
        <Box sx={{ height: "5vh" }}></Box>
        {/* spacer component */}
      </Box>
      {/* end of parent container */}
    </CssBaseline>
  );
};

export default Guidelines;
