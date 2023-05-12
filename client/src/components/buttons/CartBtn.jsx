import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
const CartBtn = () => {
  const state = useSelector((state) => state.addItem)
  const [cookies,setCookies]=useCookies(["access_token"])
  return (
    <><NavLink to="/cart" className="btn btn-outline-primary ms-2">
      <span className='fa fa-shopping-cart me-1 '></span> Cart{!cookies.access_token ? '(0)' : `(${state.length})`} </NavLink></>
  )
}

export default CartBtn