import { configureStore } from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension'
import editorReducer from './features/editorSlice';

export default configureStore({
  reducer: {
    editor: editorReducer,
  }
},composeWithDevTools());
