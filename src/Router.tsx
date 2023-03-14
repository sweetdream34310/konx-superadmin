import React, { useState, useEffect } from "react";
import { useRoutes, RouteObject, Navigate } from "react-router-dom";
import Layout from "./layout/index";
import Dashboard from "./pages/Dashboard";
import SuperAdmin from "./pages/SuperAdmin"
import BusinessAccounts from "./pages/businessManagement/BusinessAccounts";
import Login from "./pages/LoginIn";
import ForgotPassword from "./pages/ForgotPassword"

export default function Router() {
  const router = [
    {
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/superadmin",
          element: <SuperAdmin />,
        },
        {
          path: "/business/accounts",
          element: <BusinessAccounts />,
        },
      ],
    },
    {
      path: '/',
      element: <Login />
    },
    {
      path: 'auth/login',
      element: <Login />
    },
    {
      path: 'auth/forgotpassword',
      element: <ForgotPassword />
    },
  ];
  return useRoutes(router);
}
