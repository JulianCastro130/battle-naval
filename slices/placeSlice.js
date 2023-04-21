import { createSlice } from '@reduxjs/toolkit'

export const placeSlice = createSlice({
  name: 'place',
  initialState: {
    value: {r1:[0,0,0],r2:[0,0,0],r3:[0,0,0]}
  },
  reducers: {
    
  }
})

// Action creators are generated for each case reducer function
// export const {  } = placeSlice.actions

export default placeSlice.reducer