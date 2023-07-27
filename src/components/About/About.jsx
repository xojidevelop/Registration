import React from 'react'
import { useNavigate } from 'react-router-dom'
import './About.css'


function About() {
  let navigate = useNavigate()

  function ReDirect(){
    navigate("/")
  }
  return (
    <div className='About'>
      <div className="box">
        <h1 className='title'>Welcome Back!</h1>
        <p className='info'>To keep connected with us plase 
          <br/>login with your personal info</p>
          <br/>
          <button onClick={ReDirect} type='button' className='btn'>Sign in</button>
      </div>
      <div className="wrapper">
        <h1 className='wrap__title'>Create Account</h1>
        <ul className='list'>
          <li className='list__item'><i className='bi bi-twitter'></i></li>
          <li className='list__item'><i className='bi bi-facebook'></i></li>
          <li className='list__item'><i className='bi bi-linkedin'></i></li>
        </ul>
        <h6 className='wrap__info'>or use your email for registration</h6>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="bi bi-person-fill"></i></span>
          <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
          <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="bi bi-bag"></i></span>
          <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <button  type='button' className='wrap__btn'>Sign up</button>
      </div>
    </div>
  )
}

export default About;