import React from 'react'
import './App.css'
import Header from './components/Header'
import TimerTest from './TimerTest'
import TimerBoard from './components/TimerBoard'

function App() {

  return (
    <>
      <Header />
      <h1>Timer App</h1>
      <TimerTest />
      <TimerBoard />
    </>
  )
}

export default App
