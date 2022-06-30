import React from 'react'
import {Link} from 'react-router-dom'
// import logo from '../img/fcblogo.jpg'

function Home() {
  return (
      <div className='home'>
          {/* <img src= {logo} width={50}/> */}
        <h1 className='lead-txt mb-2'><span className='pry-txt'>Select</span> a file type</h1>
        <div className='home-nav'>
        <Link to= '/individual' className='home-navlink'>INDIVIDUAL</Link>
        <Link to= '/corporate' className='home-navlink'>CORPORATE</Link>
        <Link to= '/credit' className='home-navlink'>CREDIT</Link>
        <Link to= '/guarantor' className='home-navlink'>GUARANTOR</Link>
        <Link to= '/principal' className='home-navlink'>PRINICIPAL</Link>
        </div>
      </div>
  )
}

export default Home
