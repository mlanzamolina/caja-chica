import React from "react";
import { Typography } from "@mui/material";

export const API_TYPE_NAME = "MQL";

export function AppName() {
  return (
    <Typography className="app-bar-title" component="h1" variant="h5">
      {window.env && window.env.REACT_APP_NAME
        ? window.env.REACT_APP_NAME
        : "App Name"}
    </Typography>
  );
}
