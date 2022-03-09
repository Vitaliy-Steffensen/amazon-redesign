import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./LoadingPageContent.css";
import logo from "../../Assets/images/icon black.png";

export default function LoadingPageContent() {
  return (
    <div className="loadingPage">
      <div className="loadingPage--center">
        <img src={logo} alt="" className="loadingPage__pageLogo" />
        <div className="loadingPage__iconContainer">
          <CircularProgress sx={{ color: "#f89500" }} />
        </div>
      </div>
    </div>
  );
}
