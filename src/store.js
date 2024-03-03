import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blogApi } from "./features/manage-blogs/api/blogApi";
import { healthorgApi } from "./features/manage-pharmacies/api/healthorgApi";
import { adsApi } from "./features/manage-ads/api/adsApi";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [healthorgApi.reducerPath]: healthorgApi.reducer,
    [adsApi.reducerPath]: adsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      healthorgApi.middleware,
      adsApi.middleware
    ),
});

setupListeners(store.dispatch);
