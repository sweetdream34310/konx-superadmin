import React, { useState, useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";

export default function Logo() {
  return (
    <>
      <IconButton size="large" aria-label="delete">
        <MenuIcon sx={{ width: "30px", height: "30px", color: "#c7cad9" }} />
      </IconButton>
    </>
  );
}
