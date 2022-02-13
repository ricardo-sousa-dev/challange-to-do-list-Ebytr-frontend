import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import {
  Login,
} from './pages/Index';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" component={ Login } />
      </Routes>
    </Provider>
  );
}

export default App;
