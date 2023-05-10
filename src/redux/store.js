import { configureStore } from '@reduxjs/toolkit'
import fibonacciReducer from './fibonacciReducer'

export default configureStore({
  reducer: {
    fibonacci: fibonacciReducer
  },
})