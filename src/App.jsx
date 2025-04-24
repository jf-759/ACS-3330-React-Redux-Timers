import React from 'react'
import './App.css'
import Header from './components/Header'
import TimerBoard from './components/TimerBoard'
import DarkModeToggle from './components/DarkModeToggle'

function App() {

  return (
    <>
      <Header />
      <DarkModeToggle />
      <TimerBoard />
    </>
  )
}

export default App
