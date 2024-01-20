import './App.css';
import React from 'react';
import { Router_App } from './Config/Router_App';
import { Outlet } from 'react-router-dom';
import { Home } from './Pages/Home';

const App = () => {
  return (<div>
      <Home/>

       <Outlet/>
       
        <Router_App/>

    </div>
    
  )
}

export  default App;

