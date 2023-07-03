import React from 'react';
import './App.css';

import { Navbar, Cta, Brand } from "./components";
import {
  Header,
  WhatGpt4,
  Features,
  Possibility,
  Blog,
  Footer,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGpt4/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div> 
  );
}

export default App;
