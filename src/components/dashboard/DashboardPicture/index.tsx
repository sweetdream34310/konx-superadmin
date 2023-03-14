import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { DASHBOARD_TITLE } from "../../../constant/index";

export default function DashboardPicture() {
  return (
    <>
      <div
        className="h-72 overflow-auto flex bg-slate rounded-md items-center justify-center"
        style={{ minWidth: "90%" }}
      >
        <div className="bg-no-repeat flex items-center justify-center bg-center bg-cover  bg-dashboard_picture w-[98%] h-[90%]"></div>
      </div>
    </>
  );
}
