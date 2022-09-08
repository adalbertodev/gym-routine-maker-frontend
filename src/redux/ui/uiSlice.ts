// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface UiState {
  mode: 'light' | 'dark';
}

const initialState: UiState = {
  mode: 'dark'
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMode: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  }
});

export const { toggleMode } = uiSlice.actions;
