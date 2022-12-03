import React, { useState } from 'react'
import Base from '../core/Base';
import {Link,  Navigate} from "react-router-dom";
import { signin,authenticate,iisAuthenticated } from '../auth/helper';

const Signin = ()=> {

    const[values,setValues]=useState(
        {
            name:"",
            email:"",
            password:"",
            error:"",
            success:false,
            loading:false,
            didRedirect:false,

        }
    )

    const {name,email,password,error,success,loading,didRedirect}= values;

    const handleChange = (name) => (event) => {
            setValues({...values,error:false,[name]:event.target.value});
    };
     
    const onSumit = (event) =>
    {
        event.preventDefault();
        setValues({
            ...values,
            error:false,
            loading:true

        })
        signin({email,password})
        .then(data=>
            {
                console.log("DATA",data);
                if (data.token){
                    let sessiontoken=data.token;
                    authenticate(sessiontoken,()=>
                    {
                       setValues({
                        ...values,
                        didRedirect:true,


                       })
                    })
                }
                else 
                {
                    setValues({
                        ...values,
                        loading:false,
                    })
                }
            })
        .catch(e=>console.log(e));
    }

    const perfromRedirect = () =>
    {
        if (iisAuthenticated())
        {
            return < Navigate to="/"/>
        }

    }

    const loadingMessage = () =>
    {
        return (
            loading && (
                <div className='alert alert-info'>
                    <h2>Loading....</h2>
                </div>
            )
        )
    }

    const successMessage = () =>
    {
      return(
        <div className='row'>
          <div className='col-md-6 offset-sm-3 text-left'>
            <div className='alert alert-success'
            style={{display: success ? "" :"none"}}>
                New account Created Successfully. Please  
                <Link to="/signin">Login Now</Link>
            </div>
          </div>
        </div>
      )
    }

    const errorMessage = () =>
    {
      return(
        <div className='row'>
          <div className='col-md-6 offset-sm-3 text-left'>
            <div className='alert alert-danger'
            style={{display: error ? "" :"none"}}>
                Check all field again
            </div>
          </div>
        </div>
      )
    }

    const signInForm = () =>
    {
      return (
        <div>    <br>
        </br>
        <br>
        </br>
       
        <div className='row' style={{marginLeft:"8px",marginRight:"8px" }}>
             
            <div className='signupcol col-md-6 offset-sm-3 text-left'>
            <h2>
              Log in
             </h2>
             <br>
        </br>
              <form>
                
                <div className='form-group'>
                  <label className='text-dark'>
                    Email
                  </label>
                  <input className='form-control' value={email} onChange={handleChange("email")}/>
                  

                </div>
                <div className='form-group'>
                  <label className='text-dark'>
                    Password
                  </label>
                  <input className='form-control' value={password} onChange={handleChange("password")}/>
                  

                </div>
                <button  onClick={onSumit} className='btn btn-success btn-block'>
                  Submit
                </button>
              </form>
              <br>
              </br>
              <br>
              </br>
              <br>
              </br>
              <br>
              </br>
              <br>
        </br>
            </div>
        </div>
        </div>
       
      )
    }



  return (
   <Base>
   {loadingMessage()}
   
    {signInForm()}
    {perfromRedirect()}
   </Base>
  )
}

export default Signin;