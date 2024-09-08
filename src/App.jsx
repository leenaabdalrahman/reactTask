import React from 'react'
import Navbar from './components/Navbar.jsx'
import Contact from './components/Contact.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Player from './components/Player.jsx'

export default function App() {
  return (
   <>
   <Navbar />
   <Contact />
   <Player />
   </>
  )
}
