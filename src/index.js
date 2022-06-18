/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(

  <Home />,

);
