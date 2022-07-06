import { createSlice } from '@reduxjs/toolkit';

export const editorChart = createSlice({
    name: 'chart',
    initialState: {
      init_chart_x: {
        id:'',
        name:'',
        color:'',
        size:'',
        offset:''
      },
    },
    reducers: {
      changeX: (state = initialState.init_chart_x, action) => {
        state.init_chart_x = { ...action.payload };
      },
    }
  });