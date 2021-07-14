import React, {Component} from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import { BrowserRouter, Route } from 'react-router-dom'

import Stories from "./components/Stories"


class App extends Component{

  constructor() {
    super()
    this.state = {
    }
  }


  render() {
    return (
    <BrowserRouter>
      <div className='App'>
          <Header title='Hand Over'/>
          <Contact/>
          <Stories />
      </div>
    </BrowserRouter> 
    );
  }
}

export default App;

