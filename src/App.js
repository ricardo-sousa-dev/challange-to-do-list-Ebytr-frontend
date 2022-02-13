import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import {
  Login,
} from './pages/Index';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
