import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../../ExempleRedux/counterSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
