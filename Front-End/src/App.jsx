import { useState } from 'react'
import './App.css'
import LogIn from './compontents/LogIn'
import Navbar from './compontents/NavBar'

function App() {
  return (
  
    <div>
      <Navbar />
      <h1>Welcome User!</h1>
      <h2> Please log in to continue</h2>
      <LogIn />
  </div>

)
}

export default App
