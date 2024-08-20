import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blogApi } from "./features/manage-blogs/api/blogApi";
import { healthorgApi } from "./features/manage-pharmacies/api/healthorgApi";
import { adsApi } from "./features/manage-ads/api/adsApi";
import { productsApi } from "./features/manage-products/api/productsApi";
import { prescriptionsApi } from "./features/manage-prescriptions/api/prescriptionsApi";
import { formularyApi } from "./features/manage-medicine-formularies/api/formularyApi";
import authSliceReducer from "./features/authentication/slice/authSlice";
import { authApi } from "./features/authentication/api/authApi";
import { usersApi } from "./features/manage-users/api/usersApi";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [healthorgApi.reducerPath]: healthorgApi.reducer,
    [adsApi.reducerPath]: adsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [prescriptionsApi.reducerPath]: prescriptionsApi.reducer,
    [formularyApi.reducerPath]: formularyApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth: authSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      healthorgApi.middleware,
      adsApi.middleware,
      productsApi.middleware,
      prescriptionsApi.middleware,
      formularyApi.middleware,
      authApi.middleware,
      usersApi.middleware
    ),
});

setupListeners(store.dispatch);
