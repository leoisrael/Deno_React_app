import React from 'react'
import ReactDOM from 'react-dom/client'
import Cab from './components/Cab'
import Nav from './components/Nav'
import About from './components/About'
import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Cab />
    <Nav />
    <About />
  </React.StrictMode>,
)
