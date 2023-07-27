import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from '../About/About';
import Home from '../Home/Home';

function Dars10() {
  return (
    <React.Fragment>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
    </Routes>

    </React.Fragment>
  )
}

export default Dars10;