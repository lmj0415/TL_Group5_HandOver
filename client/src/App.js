import React, {Component} from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return (
   <BrowserRouter>
    <div className='App'>
        <Header title='Hand Over'/>
        <Contact/>
    </div>
   </BrowserRouter> 
  );
}

export default App;

