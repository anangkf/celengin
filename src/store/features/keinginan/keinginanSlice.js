import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIKeinginan from "../../../apis/keinginan.api";

const initialState ={
  terbaru: [],
  data: [],
  selesai: [],
  loading: false
}

export const fetchKeinginanTerbaru = createAsyncThunk('fetch/keinginanTerbaru', async (userId) =>{
  try{
    const res = await APIKeinginan.getKeinginanTerbaru(userId);
    return res.data.results
  }catch(err){
    console.log(err.response)
  }
})

export const fetchKeinginanList = createAsyncThunk('fetch/keinginanList', async(userId) =>{
  try{
    const res = await APIKeinginan.getKeinginanList(userId);
    return res.data.results
  }catch(err){
    console.log(err.response)
  }
})

export const KeinginanSlice = createSlice({
  name: 'keinginan',
  initialState,
  extraReducers(builder){
    builder
      .addCase(fetchKeinginanTerbaru.pending, (state) =>{
        state.loading = true
      })
      .addCase(fetchKeinginanTerbaru.fulfilled, (state, action) =>{
        state.terbaru = action.payload
        state.loading = false
      })
      .addCase(fetchKeinginanList.pending, (state) =>{
        state.loading = true
      })
      .addCase(fetchKeinginanList.fulfilled, (state, action) =>{
        state.data = action.payload
        state.selesai = action.payload.filter(x => x.selesai === true)
      })
  }
})

export default KeinginanSlice.reducer