import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./features/pages/Home";
import ManageHealthOrgs from "./features/manage-pharmacies/pages/ManageHealthOrgs";
import Layout from "./shared/Layout";
import ManageUsers from "./features/manage-users/pages/ManageUsers";
import Login from "./features/authentication/pages/Login";
import ManageAds from "./features/manage-ads/pages/ManageAds";
import AddBlog from "./features/manage-blogs/pages/AddBlog";
import ListOfPrescriptions from "./features/manage-prescriptions/pages/ListOfPrescriptions";
import PrescriptionDetail from "./features/manage-prescriptions/pages/PrescriptionDetail";
import PharmacyDetails from "./features/manage-pharmacies/pages/PharmacyDetails";
import PostedBlog from "./features/manage-blogs/pages/PostedBlog";
import BlogCategory from "./features/manage-blogs/pages/BlogCategory";
import AddHealthOrg from "./features/manage-pharmacies/pages/AddHealthOrg";
import Addads from "./features/manage-ads/pages/Addads";
import AddOrgAds from "./features/manage-ads/pages/AddOrgAds";
import ManageProducts from "./features/manage-products/pages/ManageProducts";
import AddProduct from "./features/manage-products/pages/AddProduct";
import AddProductCategory from "./features/manage-products/pages/AddProductCategory";
import ManageCategory from "./features/manage-products/pages/ManageCategory";
import EditProduct from "./features/manage-products/pages/EditProduct";
import EditProductCategory from "./features/manage-products/pages/EditProductCategory";
import EditAds from "./features/manage-ads/pages/EditAds";
import EditHealthOrg from "./features/manage-pharmacies/pages/EditHealthOrg";
import EditPost from "./features/manage-blogs/pages/EditPost";
import { selectIsAuthenticated } from "./features/authentication/slice/authSlice";
import AddCategoryForFormularies from "./features/manage-medicine-formularies/pages/AddCategoryForFormularies";
import ManageFormularyCategory from "./features/manage-medicine-formularies/pages/ManageFormularyCategory";
import AddMedicineFormularies from "./features/manage-medicine-formularies/pages/AddMedicineFormularies";
import AddFormulary from "./features/manage-medicine-formularies/pages/AddFormulary";
import ManageMedicineFormularies from "./features/manage-medicine-formularies/pages/ManageMedicineFormularies";
import ManageFormulary from "./features/manage-medicine-formularies/pages/ManageFormulary";
import EditMedicineFormularies from "./features/manage-medicine-formularies/pages/EditMedicineFormularies";
import EditCategoryForFormularies from "./features/manage-medicine-formularies/pages/EditCategoryForFormularies";
import EditFormulary from "./features/manage-medicine-formularies/pages/EditFormulary";

const AppRoutes = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log(isAuthenticated);

  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Private Routes */}
        {isAuthenticated ? (
          <>
            <Route
              path="/home"
              element={
                <Layout>
                  <Home />
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
              path="/view-products"
              element={
                <Layout>
                  <ManageProducts />
                </Layout>
              }
            />
            <Route
              path="/view-prescription/:id"
              element={
                <Layout>
                  <PrescriptionDetail />
                </Layout>
              }
            />
            <Route
              path="/edit-product/:id"
              element={
                <Layout>
                  <EditProduct />
                </Layout>
              }
            />
            <Route
              path="/edit-category/:id"
              element={
                <Layout>
                  <EditProductCategory />
                </Layout>
              }
            />
            <Route
              path="/edit-ads/:id"
              element={
                <Layout>
                  <EditAds />
                </Layout>
              }
            />
            <Route
              path="/edit-health-org/:id"
              element={
                <Layout>
                  <EditHealthOrg />
                </Layout>
              }
            />

            <Route
              path="/view-categories"
              element={
                <Layout>
                  <ManageCategory />
                </Layout>
              }
            />
            <Route
              path="/add-products"
              element={
                <Layout>
                  <AddProduct />
                </Layout>
              }
            />
            <Route
              path="/add-product-category"
              element={
                <Layout>
                  <AddProductCategory />
                </Layout>
              }
            />
            <Route
              path="/prescription-detail/:id"
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
              path="/view-ads"
              element={
                <Layout>
                  <ManageAds />
                </Layout>
              }
            />
            <Route
              path="/add-ads"
              element={
                <Layout>
                  <Addads />
                </Layout>
              }
            />
            <Route
              path="/add-orgads"
              element={
                <Layout>
                  <AddOrgAds />
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
              path="/edit-blog/:id"
              element={
                <Layout>
                  <EditPost />
                </Layout>
              }
            />
            <Route
              path="/edit-medicine-formulary/:id"
              element={
                <Layout>
                  <EditMedicineFormularies />
                </Layout>
              }
            />
            <Route
              path="/edit-formulary/:id"
              element={
                <Layout>
                  <EditFormulary />
                </Layout>
              }
            />
            <Route
              path="/edit-formulary-category/:id"
              element={
                <Layout>
                  <EditCategoryForFormularies />
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
              path="/view-formulary-category"
              element={
                <Layout>
                  <ManageFormularyCategory />
                </Layout>
              }
            />
            <Route
              path="/view-medicine-formularies"
              element={
                <Layout>
                  <ManageMedicineFormularies />
                </Layout>
              }
            />
            <Route
              path="/add-medicine-formularies"
              element={
                <Layout>
                  <AddMedicineFormularies />
                </Layout>
              }
            />
            <Route
              path="/add-formulary"
              element={
                <Layout>
                  <AddFormulary />
                </Layout>
              }
            />
            <Route
              path="/view-formulary"
              element={
                <Layout>
                  <ManageFormulary />
                </Layout>
              }
            />
            <Route
              path="/add-formulary-category"
              element={
                <Layout>
                  <AddCategoryForFormularies />
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
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
