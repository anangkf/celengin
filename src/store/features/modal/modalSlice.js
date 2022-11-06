import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  showModalReview: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers:{
    setShowModalReview: (state, action) =>{
      state.showModalReview = action.payload
    },
    randomlyShowModalReview: (state) =>{
      const random = Math.ceil(Math.random() * 20)
      console.log(random)
      if(random === 8){
        state.showModalReview = true
      }
    }
  }
})

export const { setShowModalReview, randomlyShowModalReview } = modalSlice.actions

export default modalSlice.reducer