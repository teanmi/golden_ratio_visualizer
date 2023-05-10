import { createSlice } from '@reduxjs/toolkit'

export const fibonacciSlice = createSlice({
  name: 'fibonacci',
  initialState: {
    value: [0, 1],
    currentIndex: 0
  },
  reducers: {
    increment: (state) => {
      const nextValue = state.value[state.currentIndex] + state.value[state.currentIndex + 1]
      state.currentIndex++;
      state.value.push(nextValue);
      
    },
    decrement: (state) => {
      if (state.currentIndex === 0) {
        return;
      }
      state.value.pop();
      state.currentIndex--;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = fibonacciSlice.actions

export default fibonacciSlice.reducer