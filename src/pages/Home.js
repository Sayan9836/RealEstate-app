import React from 'react'
import Filterlist from '../components/filterlist/Filterlist'
import Navbar from '../components/navbar/Navbar'
const Home = () => {
  return (
    <div style={{overflow:'hidden'}}>
      <Navbar/>
      <Filterlist/>
    </div>
  )
}

export default Home
