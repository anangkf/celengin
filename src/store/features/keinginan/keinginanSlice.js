import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import APIKeinginan from "../../../apis/keinginan.api";

const initialState ={
  terbaru: [],
  data: [],
  selesai: [],
  celengan: [],
  celengan_hari_ini: 0,
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

export const createKeinginan = createAsyncThunk('create/keinginan', async(data) =>{
  try{
    const res = await APIKeinginan.createKeinginan(data);

    const results =  res.data.results.returning[0]
    const status = res.status === 200
    return {results, status}
  }catch(err){
    console.log(err.response)
  }
})
// a function that run 2 request at once(add celengan to table celengan and patch celengan at table keinginan)
/**
 * @params data: object consist of keinginan_id, user_id, nominal, celengan
 * keinginan_id, user_id, nominal: amount of celengan to be added , celengan: amount of current celengan + nominal 
 */
export const addCelengan = createAsyncThunk('add/celengan', async(data) =>{
  try{
    const res = await APIKeinginan.addCelengan(data);
    const status = res.status === 200
    const patch =  status && await APIKeinginan.celengin(data); 
    
    const add = res.data.results.returning[0] 
    const patched =  patch.data.results
    const returned = {add, patched}

    return returned
  }catch(err){
    console.log(err)
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
      .addCase(createKeinginan.pending, (state) =>{
        state.loading = true
      })
      .addCase(createKeinginan.fulfilled, (state, action) =>{
        state.data.unshift(action.payload.results)
        state.terbaru.unshift(action.payload.results)
        state.loading = false
      })
      .addCase(addCelengan.pending, (state) =>{
        state.loading = true
      })
      .addCase(addCelengan.fulfilled, (state, action) =>{
        const {add, patched} = action.payload
        state.celengan.unshift(add)
        state.data.map(item =>{
          if(item.id === patched.id){
            item.celengan = patched.celengan
            return item
          }
          return item
        })
      })
  }
})

export default KeinginanSlice.reducer