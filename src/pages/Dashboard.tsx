import React, { useState, useEffect } from "react";
import {
  SuperAdminList,
  BusinessUserList,
  BusinessAccountList,
  BusinessAccountBusinessTypeList,
  TotalEarning,
  Tools,
} from "../components/dashboard";
import { DashboardPicture } from "../components/dashboard";
import { useDispatch } from "react-redux";
import { Grid } from "@mui/material";
import { PAGE_TYPES } from "../actions/types";

export default function Dashboard() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: PAGE_TYPES.CURRENT_PAGE, payload: "dashboard"})
  }, [])
  
  return (
    <>
      <div className="h-screen overflow-auto bg-homeboard ">
        <div className="mt-40 w-[95%] ml-[2.5%]">
          <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
              <DashboardPicture />
            </Grid>
            <Grid item xs={12} md={6}>
              <Tools />
              <div className="h-5" />
              <TotalEarning />
            </Grid>
            <Grid item xs={12} md={6}>
              <SuperAdminList />
              <div className="h-5" />
              <BusinessUserList />
            </Grid>
            <Grid item xs={12} md={12}>
              <BusinessAccountList />
            </Grid>
            <Grid item xs={12} md={12}>
              <BusinessAccountBusinessTypeList />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
