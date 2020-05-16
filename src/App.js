import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <NavigationBar />
    </Router>
  )
}
