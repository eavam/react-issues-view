import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import Home from './components/Home'
import IssuePage from './components/IssuePage'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: #ebeff1;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/:username/:repo/issue/:number' component={IssuePage}/>
        </div>
      </Router>
    )
  }
}

export default App
