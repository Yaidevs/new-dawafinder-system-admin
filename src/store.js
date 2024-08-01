import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blogApi } from "./features/manage-blogs/api/blogApi";
import { healthorgApi } from "./features/manage-pharmacies/api/healthorgApi";
import { adsApi } from "./features/manage-ads/api/adsApi";
import { productsApi } from "./features/manage-products/api/productsApi";
import { prescriptionsApi } from "./features/manage-prescriptions/api/prescriptionsApi";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [healthorgApi.reducerPath]: healthorgApi.reducer,
    [adsApi.reducerPath]: adsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [prescriptionsApi.reducerPath]: prescriptionsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      healthorgApi.middleware,
      adsApi.middleware,
      productsApi.middleware,
      prescriptionsApi.middleware
    ),
});

setupListeners(store.dispatch);
