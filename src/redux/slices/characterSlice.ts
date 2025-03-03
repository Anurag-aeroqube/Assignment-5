
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type Character = {
    fullname: string;
    nickname: string;
    hogwartsHouse: string;
    interpretedBy: string;
    children: string[];
    image: string;
    birthdate: string;
    index: number;
};

interface CharacterState{
    characters: Character[];
  loading: boolean;
  error: string | null;
}

const initialState: CharacterState={
    characters:[],
    loading:false,
    error:null,
};



// Thunk: API se characters fetch karne ke liye
export const fetchCharacters = createAsyncThunk("chaacters/fetchCharacters", async () => {
  const response = await axios.get("https://potterapi-fedeperin.vercel.app/en/characters");
  return response.data; // API se data return karega
});

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {}, // Agar koi local reducer ho toh yaha add karein
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default characterSlice.reducer;
