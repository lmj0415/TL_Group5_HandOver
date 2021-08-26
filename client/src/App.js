import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Needy from './components/Needy'
import Gastro from './components/Gastro'
import Donator from './components/Donator'
import Contact from './components/Contact'
import CMS from './components/CMS'
import Stories from './components/Stories'
import Story from './components/Story'
import FourOFour from './components/404'
import { StoryContextProvider } from './Context/StoriesContext'
import { ContactProvider } from './Context/ContactContext'
import { CMSContextProvider } from './Context/CMSContext'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {window.location.pathname !== "/cms" ? <Navbar/>: null}
          <Switch>  
            <Route exact path='/'>
              <StoryContextProvider> 
                <Home />
              </StoryContextProvider>
            </Route>
            <Route path="/stories">
              <StoryContextProvider> 
                <Stories />
              </StoryContextProvider>
            </Route>
            <Route path='/story/:id'>
              <StoryContextProvider> 
                <Story />
              </StoryContextProvider>
            </Route> 
            <Route path='/needy'>
              <Needy />
            </Route>
            <Route path='/gastro'>
              <Gastro />
            </Route>
            <Route path='/donator'>
              <Donator />
            </Route>
            <Route path='/contact'>
              <ContactProvider>
                <Contact />
              </ContactProvider>
            </Route>
            <Route path="/cms">
              <CMSContextProvider>
                <CMS />
              </CMSContextProvider> 
            </Route> 
            <Route path = "*">
              <FourOFour />
            </Route>
          </Switch> 
        {window.location.pathname !== "/cms" ? <Footer/>: null}
      </div>
    </BrowserRouter> 
  )
}


export default App;

