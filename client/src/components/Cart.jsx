import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
 import {dellItem}from '../redux/actions/index' 
const Cart = () => {
    const state=useSelector((state)=>state.addItem)
    const dispatch=useDispatch()
    const handelClose =(cartItem)=>{dispatch(dellItem(cartItem))
    }
    const cartItems=(cartItem)=>{
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button  onClick={()=>handelClose(cartItem)} className="btn-close float-end" aria-label='Close'></button>
                    <div className="row justify-content-center ">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height="400px" /></div>
                        <div className="col-md-4">
                            <h3>{cartItem.title} </h3>
                            <p>{cartItem.desc}</p>
                            </div>
                        

                    </div>
                </div>
            </div>
        )
    }
    const emptyCart =()=>{
        return(<div className="px-4 my-5 bg-light rounded-3 py-5" >
        <div className="container py-4">
            <div className="row">
                <h3>Your Cart is empty</h3>
            </div>
            </div>
            </div>)
    }
    const button =()=>{
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
                </div>
            </div>
        )
    }
  return (
    <>
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(cartItems)}
    {state.length !== 0 && button()}
    </>
  )
}

export default Cart