import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Routes.tsx';
import { GlobalStyle } from './styles/global.ts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Router />
      <GlobalStyle/>
      <ToastContainer theme="colored"/>
    </>
  </React.StrictMode>,
)
