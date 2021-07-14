import React, {Component} from 'react'
import Header from './components/Header'
import Contact from './components/Contact'
import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component{

  constructor() {
    super()
    this.state = {
      apiRes: "",
    }
  }

  callAPI() {
    fetch("http://localhost:9000/api/")
      .then(res => res.text())
      .then(res => this.setState({apiRes: res}))
  }

  componentDidMount() {
    this.callAPI()
  }


  render() {
    return (
    <BrowserRouter>
      <div className='App'>
          <Header title='Hand Over'/>
          <Contact/>
          <p>Api status: {this.state.apiRes}</p>
      </div>
    </BrowserRouter> 
    );
  }
}

export default App;

