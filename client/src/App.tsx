import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './view/ui/menu/navbar';
import { RouterApp } from './viewModel/utils/router';

function App() {
  return (

    <>

      <NavigationBar />
      <RouterApp />

    </>
  );
}

export default App;
