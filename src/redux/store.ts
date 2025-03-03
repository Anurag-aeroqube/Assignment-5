// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/booksSlice";
import characterReducer from './slices/characterSlice';
import houseReducer from './slices/houseSlice'


export const store = configureStore({
  reducer: {
    books: booksReducer, // Yaha baad me aur reducers add kar sakte hain
    characters:characterReducer,
    houses : houseReducer,  
  },
});

// TypeScript ke liye types export karna zaroori hai
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
