
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Book = {
  id:string;
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
  index: number;
};

interface CharacterState{
    books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: CharacterState={
    books:[],
    loading:false,
    error:null,
};



// Thunk: API se characters fetch karne ke liye
export const fetchBooks = createAsyncThunk("characters/fetchBooks", async () => {
  const response = await axios.get("https://potterapi-fedeperin.vercel.app/en/books");
  return response.data; // API se data return karega
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {}, // Agar koi local reducer ho toh yaha add karein
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default bookSlice.reducer;
