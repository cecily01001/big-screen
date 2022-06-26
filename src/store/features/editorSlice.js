import { createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    common_options: {
      id:'',
      layer_name: '',
      translate_x: 0,
      translate_y: 0,
      width: 0,
      height: 0,
      z_index: 1
    },
    formOptions: {
      id:'',
      layer_name: '',
      translate_x: 0,
      translate_y: 0,
      width: 0,
      height: 0,
      z_index: 1
    }
  },
  reducers: {
    changeRight: (state = initialState.common_options, action) => {
      state.common_options = { ...action.payload };
    },
    changeLeft: (state = initialState.formOptions, action) => {
      state.formOptions = { ...action.payload };
    }
  }
});

export const { changeRight, changeLeft } = editorSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getCommonOptions = state => state.common_options;
export const getFormOptions = state => state.formOptions;

export default editorSlice.reducer;
