import { configureStore } from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension'
import { editorChart } from './features/editorChart';
import editorReducer from './features/editorSlice';

export default configureStore({
  reducer: {
    editor: editorReducer,
    chart:editorChart,
  }
},composeWithDevTools());
