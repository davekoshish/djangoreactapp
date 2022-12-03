import React from 'react'
import Base from './Base'

export default function Trackorder() {
  return (
    <Base>
     <br>
    </br>
    <br>
    </br>
    <div className='container'>
        
         <form>
            <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Order ID</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Order ID" />
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Billing email</label>
          <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Your email" />
        </div>
        
        <button type="submit" className="btn btn-primary">Track</button>
      </form>
      
    </div>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    </Base>
  )
}
