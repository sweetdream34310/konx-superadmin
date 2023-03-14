import React, { useState, useEffect } from "react";
import { BUSINESS_ACCOUNT_LIST, TOTAL_NUMBER } from "../../../../constant";
import IconButton from "@mui/material/IconButton";
import GridViewIcon from "@mui/icons-material/GridView";
import BusinessAccountBusinessTypeTable from "./BusinessAccountBusinessTypeTable";

export default function BusinessUserList() {
  return (
    <>
      <div className="h-auto bg-slate rounded-md" style={{ minWidth: "90%" }}>
        <div className="h-16 w-[100%] flex items-center justify-between">
          <div
            className="text-xl text-label ml-8"
            style={{
              fontFamily:
                '"Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            {BUSINESS_ACCOUNT_LIST} <a className="text-button">(business)</a>
          </div>
          <div>
            <IconButton
              aria-label="fingerprint"
              color="success"
              sx={{ marginRight: "10px" }}
            >
              <GridViewIcon />
            </IconButton>
          </div>
        </div>
        <div className="h-2 w-[100%] flex items-center">
          <div
            className="text-sm text-label ml-8"
            style={{
              fontFamily:
                '"Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            {TOTAL_NUMBER} : 2
          </div>
        </div>
        <div className="h-5" />
        <BusinessAccountBusinessTypeTable />
      </div>
    </>
  );
}
