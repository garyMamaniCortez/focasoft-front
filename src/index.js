import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



<React.StrictMode>
<BrowserRouter> {/* Envuelve tu aplicación con BrowserRouter */}
  <AppProvider>
    <App />
  </AppProvider>
</BrowserRouter>
</React.StrictMode>,
);
