import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages';
// import Provider from './context/Provider';

function App() {
  return (
    <Routes >
      <Route path="/" element={< Login />} />
    </Routes >
  );
}

export default App;