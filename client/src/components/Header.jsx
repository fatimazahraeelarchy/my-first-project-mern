import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [cookies,setCookies]=useCookies(["access_token"])
  const navigate=useNavigate()
  const logout=()=>{
    setCookies("access_token","")
    window.localStorage.removeItem("userID");
    navigate("/login")
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid py-2">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            {!cookies.access_token ?'': (<NavLink className="nav-link " to="/products">Products</NavLink>)}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            

          </ul>
          <NavLink className="navbar-brand mx-auto fw-bold " to="/"><img src="/assets/images/home/logo.png" alt="logo" /> CAKE LAAYOUN </NavLink>
          {!cookies.access_token ? (<NavLink className="btn btn-outline-primary ms-2" to="/login">Login</NavLink>):<button className="btn btn-outline-primary ms-2" on onClick={logout}>Logout</button>}
          {!cookies.access_token ? (<NavLink className="btn btn-outline-primary ms-2" to="/signup">Signup</NavLink>):''}
         
        
          
          <CartBtn />
        </div>

      </div>
    </nav></>
  )
}

export default Header