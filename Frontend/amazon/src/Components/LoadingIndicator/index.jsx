import { CircularProgress } from "@mui/material";
import React from "react";

export default function LoadingIndicator() {
  return (
    <CircularProgress
      sx={{
        color: "#f89500",
        margin: "20px auto",
        display: "block",
      }}
    />
  );
}
