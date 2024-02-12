// src/AppRoutes.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/pages/Home";
import ManagePharmacies from "./features/manage-pharmacies/pages/ManagePharmacies";
import Layout from "./shared/Layout";
import ManageUsers from "./features/manage-users/pages/ManageUsers";
import Prescription from "./features/pages/Prescription";
import Login from "./features/authentication/pages/Login";
import ManageAds from "./features/manage-ads/pages/ManageAds";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/manage-ads"
          element={
            <Layout>
              <ManageAds />
            </Layout>
          }
        />
        <Route
          path="/manage-pharmacies"
          element={
            <Layout>
              <ManagePharmacies />
            </Layout>
          }
        />
        <Route
          path="/manage-users"
          element={
            <Layout>
              <ManageUsers />
            </Layout>
          }
        />
        <Route
          path="/prescriptions"
          element={
            <Layout>
              <Prescription />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
