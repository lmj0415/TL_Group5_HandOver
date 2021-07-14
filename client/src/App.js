import React, {Component} from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Needy from './components/Needy'
import Gastro from './components/Gastro'
import Donator from './components/Donator'
import Contact from './components/Contact'
// import Stories from "./components/Stories"


class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/needy' component={Needy} />
          <Route path='/gastro' component={Gastro} />
          <Route path='/donator' component={Donator} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
