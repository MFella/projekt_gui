import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import {Navigation} from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
