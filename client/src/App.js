import React, {Component} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import Needy from './components/Needy'
import Gastro from './components/Gastro'
import Donator from './components/Donator'
import Contact from './components/Contact'
// import Stories from "./components/CMS/Stories"
import CMS from './components/CMS'
import { ContactProvider } from './Context/ContactContext'
import { CMSProvider } from './Context/CMSContext'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        {window.location.pathname !== "/cms" ? <Navbar />: null}
            <Route exact path='/' component={Home} />
            <Route path='/needy' component={Needy} />
            <Route path='/gastro' component={Gastro} />
            <Route path='/donator' component={Donator} />
            <ContactProvider> 
              <Route path='/contact' component={Contact} />
            </ContactProvider>
            <CMSProvider>
              <Route path="/cms" component = {CMS} /> 
            </CMSProvider>
            
         {window.location.pathname !== "/cms" ? <Footer/>: null}
      </div>
    </BrowserRouter>
  ); 
}


export default App;

