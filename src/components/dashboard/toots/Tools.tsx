import React, { useState, useEffect } from "react";
import { THEME, TOOLS_STATUS, TOTAL_EARNING, TOTAL_NUMBER } from "../../../constant";
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
      sparkline: { enabled: true }
    },
    stroke: { dashArray: 10 },
    labels: ['Completed Task'],
    colors: [hexToRGBA(THEME.BUTTON_COLOR, 1)],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityTo: 0.5,
        opacityFrom: 1,
        shadeIntensity: 0.5,
        stops: [30, 70, 100],
        inverseColors: false,
        gradientToColors: [THEME.HEADER_COLOR]
      }
    },
    plotOptions: {
      radialBar: {
        endAngle: 130,
        startAngle: -140,
        hollow: { size: '60%' },
        track: { background: 'transparent' },
        dataLabels: {
          name: {
            offsetY: -15,
            fontSize: '14px',
            color: THEME.LAVEL_COLOR,
            fontFamily: '"Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

          },
          value: {
            offsetY: 15,
            fontWeight: 500,
            fontSize: '38px',
            formatter: value => `${value}%`,
            color: THEME.BUTTON_COLOR,
            fontFamily: '"Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',

          }
        }
      }
    },
    grid: {
      padding: {
        top: -30,
        bottom: 12
      }
    },
    responsive: [
      {
        breakpoint: 1300,
        options: {
          grid: {
            padding: {
              left: 22
            }
          }
        }
      },
      {
        // breakpoint: theme.breakpoints.values.md,
        options: {
          grid: {
            padding: {
              left: 0
            }
          }
        }
      }
    ]
  }

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
            {TOOLS_STATUS}
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
            85%
          </a>
          <div className="w-10" />
          {/* <ArrowUpwardIcon sx={{ color: THEME.BUTTON_COLOR }} />
          <a
            className="text-lg text-label ml-3"
            style={{
              fontFamily:
                '"Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            17%
          </a> */}
        </div>
        <div className="h-5" />
        <ReactApexcharts type='radialBar' height={325} options={options} series={[85]} />
        <div className="h-5" />
      </div>
    </>
  );
}
