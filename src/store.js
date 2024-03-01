import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { blogApi } from "./features/manage-blogs/api/blogApi";
import { healthorgApi } from "./features/manage-pharmacies/api/healthorgApi";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    [healthorgApi.reducerPath]: healthorgApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware, healthorgApi.middleware),
});

setupListeners(store.dispatch);
