import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./headerTop/Logo";
import SubHeader from "./headerTop/SubHeader";
import MobileList from "./headerTop/MobileList";
import SAManagement from "./headerBottom/SAManagement";
import BusinessManagement from "./headerBottom/BusinessManagement";
import Tools from "./headerBottom/Tools";
import { useMediaQuery } from "react-responsive";
import Button from "@mui/material/Button";
import { THEME, DASHBOARD, SA_MANAGEMENT } from "../../constant";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  let isLaptopOrMobile = useMediaQuery({
    minWidth: 700,
  });

  const Navigate = useNavigate();

  const currentPage = useSelector((state : any ) => state.currentPageReducer.currentPage);

  let backgroundDashboard = '' 
  let backgroundSuperAdmin = '' 

  if(currentPage == 'dashboard') {
    backgroundDashboard = THEME.PRIMARY_COLOR;
  } else {
    backgroundDashboard = THEME.HOME_BOARD_COLOR;
  }

  if(currentPage == 'superadmin') {
    backgroundSuperAdmin = THEME.PRIMARY_COLOR;
  } else {
    backgroundSuperAdmin = THEME.HOME_BOARD_COLOR;
  }

  return (
    <>
      <div className="flex h-16 w-screen fixed bg-slate border-b border-divider justify-between z-50">
        {isLaptopOrMobile ? (
          <>
            <Logo />
            <SubHeader />
          </>
        ) : (
          <>
            <MobileList />
            <SubHeader />
          </>
        )}
      </div>
      {isLaptopOrMobile ? (
        <div className="flex items-center h-14 top-16 w-screen fixed shadow-lg bg-slate z-50">
          <div className="w-4"></div>
          <Button
            id="demo-customized-button"
            variant="contained"
            sx={{
              color: THEME.WHITE_COLOR,
              height: "40px",
              backgroundColor : backgroundDashboard
            }}
            disableElevation
            onClick={() => Navigate("/dashboard")}
          >
            {DASHBOARD}
          </Button>
          <div className="w-3"></div>
          {/* <SAManagement /> */}
          <Button
            id="demo-customized-button"
            variant="contained"
            sx={{
              color: THEME.WHITE_COLOR,
              height: "40px",
              backgroundColor: backgroundSuperAdmin,
            }}
            disableElevation
            onClick={() => Navigate("/superadmin")}
          >
            {SA_MANAGEMENT}
          </Button>
          <div className="w-3"></div>
          <BusinessManagement />
          <div className="w-3"></div>
          <Tools />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
