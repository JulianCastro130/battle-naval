import { configureStore } from '@reduxjs/toolkit'
import placeReducer from '../slices/placeSlice'

export default configureStore({
  reducer: {
    place: placeReducer
  }
})