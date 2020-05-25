import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Publications from './pages/publications/Publications'
import Contact from './pages/contact/Contact'

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path='/portfolio-react' exact>
          <About />
        </Route>
        <Route path='/projects' exact>
          <Projects />
        </Route>
        <Route path='/publications' exact>
          <Publications />
        </Route>
        <Route path='/contact' exact>
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}
