import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

type Houses = {
    house: string;
    emoji: string;
    founder: string;
    colors: string[];
    animal: string;
    index: number;

}

interface HouseState{
    houses:Houses[];
    loading:boolean;
    error:string | null;
}

const initialState: HouseState={
    houses:[],
    loading:false,
    error:null,
};

export const fetchHouses= createAsyncThunk("houses/fetchhouses", async ()=>{
    const response= await axios.get("https://potterapi-fedeperin.vercel.app/en/houses");
    return response.data;
})


const houseSlice=createSlice({
    name: 'houses',
    initialState,
     reducers: {}, // Agar koi local reducer ho toh yaha add karein
      extraReducers: (builder) => {
        builder
          .addCase(fetchHouses.pending, (state) => {
            state.error = null;
          })
          .addCase(fetchHouses.fulfilled, (state, action) => {
            state.houses = action.payload;
          })
          .addCase(fetchHouses.rejected, (state, action) => {
            state.error = action.error.message || "Something went wrong";
          });
      },

});

export default houseSlice.reducer;