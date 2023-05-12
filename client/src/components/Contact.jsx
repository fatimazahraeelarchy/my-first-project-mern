import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question ?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img src="/assets/images/co.png" alt="Contact Us" height='400px' width='600px' />
          </div>
          <div className="col-md-3">
            <form><div className="mb-3">
              <b> <label htmlFor="exampleForm" className="form-label">Full Name :</label></b>
              <b> <i> <p >Laayoune_Cake</p></i></b>

            </div>
              <div className="mb-3">
            <b> <label htmlFor="exampleFormControlInput1" className="form-label">Email address :</label></b>
                <b> <i> <p>LaayouneCake@gmail.com</p></i></b>
                <a href="https://mail.google.com/mail/u/3/#inbox?compose=new" className="btn btn-outline-primary px-3">Contact in my Gmail</a>

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact