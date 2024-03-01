import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/pages/Home";
import ManageHealthOrgs from "./features/manage-pharmacies/pages/ManageHealthOrgs";
import Layout from "./shared/Layout";
import ManageUsers from "./features/manage-users/pages/ManageUsers";
import Login from "./features/authentication/pages/Login";
import ManageAds from "./features/manage-ads/pages/ManageAds";
import AddBlog from "./features/manage-blogs/pages/AddBlog";
import ListOfPharmacies from "./features/manage-pharmacies/pages/ListOfPharmacies";
import ListOfPrescriptions from "./features/manage-prescriptions/pages/ListOfPrescriptions";
import PrescriptionDetail from "./features/manage-prescriptions/pages/PrescriptionDetail";
import PharmacyDetails from "./features/manage-pharmacies/pages/PharmacyDetails";
import PostedBlog from "./features/manage-blogs/pages/PostedBlog";
import BlogCategory from "./features/manage-blogs/pages/BlogCategory";
import AddHealthOrg from "./features/manage-pharmacies/pages/AddHealthOrg";

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
          path="/prescription-detail"
          element={
            <Layout>
              <PrescriptionDetail />
            </Layout>
          }
        />
        <Route
          path="/pharmacy-detail"
          element={
            <Layout>
              <PharmacyDetails />
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
          path="/view-post"
          element={
            <Layout>
              <PostedBlog />
            </Layout>
          }
        />

        <Route
          path="/post-blog"
          element={
            <Layout>
              <AddBlog />
            </Layout>
          }
        />
        <Route
          path="/blog-category"
          element={
            <Layout>
              <BlogCategory />
            </Layout>
          }
        />
        <Route
          path="/view-organizations"
          element={
            <Layout>
              <ManageHealthOrgs />
            </Layout>
          }
        />
        <Route
          path="/add-health-org"
          element={
            <Layout>
              <AddHealthOrg />
            </Layout>
          }
        />
        <Route
          path="/prescriptions"
          element={
            <Layout>
              <ListOfPrescriptions />
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
      </Routes>
    </Router>
  );
};

export default AppRoutes;
