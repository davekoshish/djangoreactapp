import React,{useState} from 'react';
import Base from "../core/Base";
import {Link} from "react-router-dom";
import { signup } from '../auth/helper';
import "../styles.css";


const Signup=()=> {

    const [values,setValues]=useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false,
    });

    const {name,email,password,error,success}= values;

    const handleChange = (name) => (event) => {
            setValues({...values,error:false,[name]:event.target.value});
    };
     

    const onSubmit = (event)=>
    {
      event.preventDefault();
      setValues({...values,error:false})
      signup({name,email,password})
      .then((data)=>{
        console.log("DATA",data);
        if(data.email===email)
        {
          setValues({
            ...values,
            name:"",
            email:"",
            password:"",
            error:"",
            success:true

          })
        }
        else{
          setValues({
            ...values,
            error : true,
            success:false,

        })
        }
      })
      .catch((e)=>console.log(e));
    };
      
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

    const signupForm = () =>
    {
      return (
        <div>    <br>
        </br>
        <br>
        </br>
       
        <div className='row' style={{marginLeft:"8px",marginRight:"8px" }}>
             
            <div className='signupcol col-md-6 offset-sm-3 text-left'>
            <h2>
              Signup
             </h2>
             <br>
        </br>
              <form>
                <div className='form-group'>
                  <label className='text-dark'>
                    Name
                  </label>
                  <input className='form-control' value={name} onChange={handleChange("name")}/>
                  

                </div>
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
                <button onClick={onSubmit}  className='btn btn-success btn-block'>
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
      {successMessage()}
      {errorMessage()}
     {signupForm()}
    </Base>
  )
}


export default Signup;