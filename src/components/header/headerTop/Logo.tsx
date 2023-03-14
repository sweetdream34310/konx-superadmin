import React, { useState, useEffect } from "react";
import { SOFTWARE_NAME } from "../../../constant";

export default function Logo() {
  return (
    <>
      <div className="w-40 flex justify-around h-[100%] items-center">
        <div className="w-12 h-12 bg-company_logo bg-cover bg-no-repeat bg-center"></div>
        <div className="text-label text-3xl font-mono font-bold">{SOFTWARE_NAME}</div>
      </div>
    </>
  );
}
