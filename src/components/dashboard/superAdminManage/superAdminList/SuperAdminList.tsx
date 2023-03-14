import React, { useState, useEffect } from "react";
import { SUPER_ADMIN_LIST, TOTAL_NUMBER } from "../../../../constant";
import { IconButton, Tooltip } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import SuperAdminTable from "./SuperAdminTable";
import { GetSuperAdminsTotalNumberApi } from "../../../../api";
import { useNavigate } from "react-router-dom";

export default function SuperAdminList() {

  const Navigate = useNavigate();

  const [totalNumber, setTotalNumber] = useState(0);

  const getSuperAdminTotalNumber = async () => {
    const res = await GetSuperAdminsTotalNumberApi();
    setTotalNumber(res.data);
  };
  
  const handleClick = () => {
    Navigate("/superadmin")
  }

  useEffect(() => {
    getSuperAdminTotalNumber();
  }, []);
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
            {SUPER_ADMIN_LIST}
          </a>
          <div>
            <Tooltip arrow placement="left" title="View More">
              <IconButton
                aria-label="fingerprint"
                color="success"
                sx={{ marginRight: "10px" }}
                onClick = {handleClick}
              >
                <GridViewIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="h-2 w-[100%] flex items-center">
          <a
            className="text-sm text-label ml-8"
            style={{
              fontFamily:
                '"Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            {TOTAL_NUMBER} : {totalNumber}
          </a>
        </div>
        <div className="h-5" />
        <SuperAdminTable />
      </div>
    </>
  );
}
