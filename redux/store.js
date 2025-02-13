import { configureStore } from '@reduxjs/toolkit';
import { countriesApiSlice } from './slices/countriesApiSlice';

const store = configureStore({
  reducer: {
    [countriesApiSlice.reducerPath]: countriesApiSlice.reducer, // Add API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ 
      serializableCheck: false, // ✅ Disable unnecessary checks to prevent slowdowns
    }).concat(countriesApiSlice.middleware), // Add API middleware
});

export default store;
