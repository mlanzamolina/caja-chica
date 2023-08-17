import React from "react";
import { Typography } from "@mui/material";

export const API_TYPE_NAME = "MQL";

export function AppName() {
  const appName =
    window.env && window.env.REACT_APP_NAME
      ? window.env.REACT_APP_NAME.toUpperCase()
      : "APP NAME";

  return (
    <Typography className="app-bar-title" component="h1" variant="h5">
      {appName}
    </Typography>
  );
}
