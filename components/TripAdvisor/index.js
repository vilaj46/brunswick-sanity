import React from "react";
import { Container } from "@mui/material";

function TripAdvisor({
  src = "/static/images/tripAdvisor.png",
  center = false,
}) {
  return (
    <Container maxWidth="md">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.tripadvisor.com/Hotel_Review-g48562-d80181-Reviews-Union_Gables_Inn-Saratoga_Springs_New_York.html"
        style={{
          display: "block",
          textAlign: center ? "center" : "left",
        }}
      >
        <img
          src={src}
          alt="Union Gables Inn Trip Advisor Reviews"
          width="225px"
          height="150px"
        />
      </a>
    </Container>
  );
}

export default TripAdvisor;
