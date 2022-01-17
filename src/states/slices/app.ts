import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface AppState {
  theme: 'light' | 'dark';
}

// Define the initial state using that type
const initialState: AppState = {
  theme: 'light',
};

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggleTheme } = appSlice.actions;

export default appSlice.reducer;
