import { createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    common_options: {
      layer_name: '',
      translate_x: 0,
      translate_y: 0,
      width: 0,
      height: 0,
      z_index: 1
    }
  },
  reducers: {
    common: (state, action) => {
      console.log('action.payload');
      console.log(action.payload);
      state.common_options = { ...state.common_options, ...action.payload };
    }
  }
});

export const { common } = editorSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const getCommonOptions = state => state.common_options;

export default editorSlice.reducer;
