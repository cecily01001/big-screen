import { createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    common_options: {
      id: '',
      layer_name: '',
      translate_x: 0,
      translate_y: 0,
      width: 0,
      height: 0,
      z_index: 1,
      config: null
    },
    chart_options: {
      id: '',
      name: '',
      color: '',
      size: '',
      offset: ''
    },
  },
  reducers: {
    changeRight: (state = initialState.common_options, action) => {
      state.common_options = { ...action.payload };
    },
    changeLeft: (state = initialState.common_options, action) => {
      state.common_options = { ...action.payload };
    },
    changeChart: (state = initialState.chart_options, action) => {
      console.log('action')
      console.log(action)
      state.chart_options = { ...action.payload }
    }
  }
});

export const { changeRight, changeLeft, changeChart } = editorSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getCommonOptions = state => state.common_options;
export const getChartOptions = state => state.chart_options;

export default editorSlice.reducer;
