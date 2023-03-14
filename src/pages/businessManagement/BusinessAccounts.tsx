import React, { useState, useEffect } from "react";
import { BusinessAccountTable } from "../../components/business";
import { useDispatch } from "react-redux";
import { PAGE_TYPES } from "../../actions/types";

export default function BusinessAccounts() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: PAGE_TYPES.CURRENT_PAGE, payload: "business"})
  }, [])

  return (
    <>
      <div className="h-screen overflow-auto bg-homeboard ">
        <div className="mt-40 w-[95%] ml-[2.5%]">
          <BusinessAccountTable />
        </div>
      </div>
    </>
  );
}
