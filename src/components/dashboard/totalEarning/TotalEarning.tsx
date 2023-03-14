import React, { useState, useEffect } from "react";
import { THEME, TOTAL_EARNING, TOTAL_NUMBER } from "../../../constant";
import IconButton from "@mui/material/IconButton";
import GridViewIcon from "@mui/icons-material/GridView";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { hexToRGBA } from "../../../@core/utils/hex-to-rgba";
import ReactApexcharts from "../../../@core/components/react-apexcharts";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import SuperAdminTable from "./SuperAdminTable";
import { Grid } from "@mui/material";

import { ApexOptions } from "apexcharts";

export default function TotalEarning() {
  const series = [{ data: [37, 76, 65, 41, 99, 53, 70] }];

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        distributed: true,
        columnWidth: "20%",
        // endingShape: 'rounded',
        // startingShape: 'rounded'
      },
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA(THEME.BUTTON_COLOR, 0.16),
      hexToRGBA(THEME.BUTTON_COLOR, 0.16),
      hexToRGBA(THEME.BUTTON_COLOR, 0.16),
      hexToRGBA(THEME.BUTTON_COLOR, 0.16),
      hexToRGBA(THEME.BUTTON_COLOR, 1),
      hexToRGBA(THEME.BUTTON_COLOR, 0.16),
      hexToRGBA(THEME.BUTTON_COLOR, 0.16),
    ],
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
    grid: {
      show: false,
      padding: {
        top: -28,
        left: -9,
        right: -10,
        bottom: -12,
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      labels: {
        style: {
          fontSize: "14px",
          colors: THEME.BUTTON_COLOR,
          fontFamily:
            '"Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        },
      },
    },
    yaxis: { show: false },
  };

  return (
    <>
      <div className="h-auto bg-slate rounded-md" style={{ minWidth: "90%" }}>
        <div className="h-16 w-[100%] flex items-center justify-between">
          <a
            className="text-xl text-label ml-8"
            style={{
              fontFamily:
                '"Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            {TOTAL_EARNING}
          </a>
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
          <a
            className="text-2xl text-label ml-8"
            style={{
              fontFamily:
                '"Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            87%
          </a>
          <div className="w-10" />
          <ArrowUpwardIcon sx={{ color: THEME.BUTTON_COLOR }} />
          <a
            className="text-lg text-label ml-3"
            style={{
              fontFamily:
                '"Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            17%
          </a>
        </div>
        <div className="h-5" />
        <ReactApexcharts
          type="bar"
          height={300}
          series={series}
          options={options}
        />
        <div className="h-5" />
      </div>
    </>
  );
}
