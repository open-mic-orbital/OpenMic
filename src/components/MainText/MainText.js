import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

function MainText() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <>
      <Box
        sx={{
          textAlign: "left",
          padding: "3vh",
          paddingLeft: isMobile ? "5%" : "15%",
        }}
      >
        <h1 style={{ fontSize: isMobile ? "300%" : "445%" }}>
          Live Entertainment,<br></br>just a tap away.
        </h1>
        <p style={{ fontSize: "150%", color: "grey" }}>Sign up today!</p>
      </Box>
    </>
  );
}

export default MainText;
