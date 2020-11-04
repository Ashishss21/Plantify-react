import React, { Component } from 'react';
import MainComponent from './Components/MainComponent';
import './Assets/boot/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import './Assets/default.css';
import './Assets/login.css';

class App extends Component
{
    render(){
      return(
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      );
    }
}

export default App;