import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIKeinginan from "../../../apis/keinginan.api";

const initialState ={
  terbaru: [],
  data: [],//keinginan
  selesai: [],
  celengan: [],
  celengan_hari_ini: 0,
  loading: false,
  achieved: 0, //count from table selesai
  currentDetail: {},
  currentTab: 1,
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
    const returned = {add, patched, status}

    return returned
  }catch(err){
    console.log(err)
  }
})

export const achieveKeinginan = createAsyncThunk('post/selesai', async() =>{
  try{
    const res = await APIKeinginan.achieveKeinginan()
    return res.data.results.returning.jumlah
  }catch(err){
    console.log(err.response)
  }
})

export const getCelenganList = createAsyncThunk('fetch/celengan', async(userId) =>{
  try{
    const res = await APIKeinginan.getCelenganList(userId);
    return res.data.results
  }catch(err){
    console.log(err.response)
  }
})

export const getKeinginanDetail = createAsyncThunk('get/keinginanDetail', async (data) =>{
  try{
    const res = await APIKeinginan.keinginanDetail(data);
    return res.data.results[0]
  }catch(err){
    console.log(err.response)
  }
})

export const deleteKeinginanWithItsCelengan = createAsyncThunk('delete/keinginanWithItsCelengan', async (id) =>{
  try{
    const res = await APIKeinginan.deleteKeinginanWithItsCelengan(id);
    const deletedCelengan = res.data.celengan.returning
    const keinginan = res.data.keinginan.returning[0]
    return {deletedCelengan, keinginan}
  }catch(err){
    console.log(err.response)
  }
})

export const deleteKeinginan = createAsyncThunk('deleteKeinginan', async (id) =>{
  try{
    const res = await APIKeinginan.deleteKeinginan(id)
    return res.data.keinginan.returning[0]
  }catch(err){
    console.log(err.response)
  }
})

export const updateKeinginan = createAsyncThunk('update/keinginan', async(data) =>{
  try{
    const res = await APIKeinginan.updateKeinginan(data)
    return res.data.results
  }catch(err){
    console.log(err.response)
  }
})

export const getTotalAchieved = createAsyncThunk('fetch/totalSelesai', async() =>{
  try{
    const res = await APIKeinginan.getTotalAchieved()
    return res.data.results[0].jumlah
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
        state.loading = false
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
        state.data = state.data.map(item =>{
          if(item.id === patched.id){
            return patched
          }
          return item
        })
        state.terbaru = state.terbaru.map(item =>{
          if(item.id === patched.id){
            return patched
          }
          return item
        })
        state.currentDetail = patched
        state.loading = false
      })
      .addCase(achieveKeinginan.pending, (state) =>{
        state.loading = true
      })
      .addCase(achieveKeinginan.fulfilled, (state, action) =>{
        state.achieved = action.payload
        state.loading = false
      })
      .addCase(getCelenganList.pending, (state) =>{
        state.loading = true
      })
      .addCase(getCelenganList.fulfilled, (state, action) =>{
        state.celengan = action.payload
        state.loading = false
      })
      .addCase(getKeinginanDetail.pending, (state) =>{
        state.loading = true
      })
      .addCase(getKeinginanDetail.fulfilled, (state, action) =>{
        state.currentDetail = action.payload
        state.loading = false
      })
      .addCase(deleteKeinginanWithItsCelengan.pending, (state) =>{
        state.loading = true
      })
      .addCase(deleteKeinginanWithItsCelengan.fulfilled, (state, action) =>{
        const {deletedCelengan, keinginan} = action.payload
        state.data = state.data.filter(val => val.id !== keinginan.id)
        // still not sure about this
        const filteredCelengan = state.celengan.filter(val =>{
          return deletedCelengan.filter(item =>{
            return item.id === val.id
          }).length === 0
        })
        state.celengan = filteredCelengan
        state.loading = false
      })
      .addCase(deleteKeinginan.pending, (state) =>{
        state.loading = true
      })
      .addCase(deleteKeinginan.fulfilled, (state, action) =>{
        const {id} = action.payload
        state.data = state.data.filter(val => val.id !== id)
        state.terbaru = state.terbaru.filter(val => val.id !== id)
        state.loading = false
      })
      .addCase(updateKeinginan.pending, (state) =>{
        state.loading = true
      })
      .addCase(updateKeinginan.fulfilled, (state, action) =>{
        state.data = state.data.map(val =>{
          if(val.id === action.payload.id){
            return action.payload
          }
          return val
        })
        state.terbaru = state.terbaru.map(val =>{
          if(val.id === action.payload.id){
            return action.payload
          }
          return val
        })
        state.currentDetail = action.payload
        state.loading = false
      })
      .addCase(getTotalAchieved.fulfilled, (state, action) =>{
        state.achieved = action.payload
      })
  },
  reducers:{
    setKeinginanDetail: (state, action) =>{
      state.currentDetail = action.payload
    },
    setCurrentTab: (state, action) =>{
      state.currentTab = action.payload
    }
  }
})

export const {setKeinginanDetail, setCurrentTab} = KeinginanSlice.actions

export default KeinginanSlice.reducer