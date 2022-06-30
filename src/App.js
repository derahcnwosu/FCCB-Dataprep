import React from 'react'
import './App.css'
import Consumer from './components/Consumer'
import Credit from './components/Credit'
import Home from './components/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route exact path='/individual' element = {<Consumer />}/>
          <Route exact path='/credit' element = {<Credit />}/>
        </Routes>
      </Router>
     
    </div>
  )
}

export default App