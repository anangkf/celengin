import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APITemplate from "../../../apis/template.api";

const initialState ={
  data: [],
  loading: false
}

export const fetchTemplate = createAsyncThunk('fetch/template', async() =>{
  try{
    const res = await APITemplate.getTemplates();
    return res.data.results
  }catch(err){
    console.log(err.response)
  }
})

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  extraReducers(builder){
    builder
      .addCase(fetchTemplate.pending, (state) =>{
        state.loading = true
      })
      .addCase(fetchTemplate.fulfilled, (state, action) =>{
        state.data = action.payload
        state.loading = false
      })
  }
})

export default templateSlice.reducer