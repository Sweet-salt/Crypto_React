import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/coinApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer
  }
});
