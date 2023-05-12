import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const state=useSelector((state)=>state.addItem)
  var total=0
  const itemList=(item)=>{
    total=total +item.price
    return( <li className="list-group-item d-flex justify-content-between lh-sm">
    <div>
      <h6 className="my-0">{item.title}</h6>
     
    </div>
    <span className="text-muted">{item.price}DH</span>
  </li>)
  }
  return (
    <>
      <div className="container my-5">
        
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">{state.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}
             
             
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (MAD)</span>
                <strong>{total}DH</strong>
              </li>
            </ul>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
