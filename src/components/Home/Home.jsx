import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  let navigate = useNavigate()

  function ReDirect(){
    navigate("about")
  }
  return (
    <>
    <div className='Home'>
       <div className="wrapper">
        <h1 className='wrap__title'>Sign In to Your Account</h1>
        <ul className='list'>
          <li className='list__item'><i className='bi bi-twitter'></i></li>
          <li className='list__item'><i className='bi bi-facebook'></i></li>
          <li className='list__item'><i className='bi bi-linkedin'></i></li>
        </ul>
        <h6 className='wrap__info'>or use your email for registration</h6>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="bi bi-envelope"></i></span>
          <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><i class="bi bi-bag"></i></span>
          <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <NavLink className={"password"} to={"about"}>forgot password?</NavLink>
        <br/>

        <button type='button' className='wrap__btn'>Sign in</button>
      </div>
      <div className="box2">
        <h1 className='title'>Hello Friend!</h1>
        <p className='info'>Enter your personal details and <br/> start your journey with us</p>
          <br/>
          <button onClick={ReDirect} type='button' className='btn'>Sign up</button>
      </div>
      </div>
      </>
  )
}

export default Home;