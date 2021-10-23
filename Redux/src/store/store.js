import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice/counterSlice'
import changeSentence from './changeSentence/changeSentence'


export default configureStore({
  reducer: {
      counter: counterReducer,
      sentence: changeSentence,
  }
})