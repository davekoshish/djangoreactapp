import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import Base from "./Base";
import { addformtoinvoice, loadcart } from "./helper/Carthelper";
import Invoice from "./Invoice";
import emailjs from '@emailjs/browser';



const Checkout =() => {

  const [products, setProducts] = useState([]);
   const [values,setValues]=useState({
    fname:"",
    lname:"",
    email:"",
    
    address:"",
    country:"",
    zipcode:"",
    city:"",
    state:"",
    phone:"",
    pttt:"",
    addition:"",
    error:"",
    success:false,
});
const [redirect,setRedirect]=useState(false)
const {fname,lname,email,address,country,zipcode,city,state,phone,pttt,addition,error,success}= values;

const handleChange = (name) => (event) => {
  setValues({...values,error:false,[name]:event.target.value});
};

const onSubmit = (event)=>
{
  event.preventDefault();
  setValues({...values,error:false})
  addformtoinvoice(values,()=>setRedirect(true))

  var template ={
    
    details:Object.entries(values), //const propertyValues = Object.values(person);

    
    
    totalamount:pricehandler(),//showing correctly
    products:keys,
    
  }



  emailjs.send('service_opfkoxg', 'template_65bf9bi', template, 'CXOxvRijKvADVpZVy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  
}

const objectArray = Object.entries(products);
var keys = [];
objectArray.forEach(([key, value]) => {
  
  keys.push(Object.entries(value)); 
});

const getredirect=(redirect)=>{
  if(redirect)
  { 
      
      return <Navigate to="/invoice"/>
  }
};
const pricehandler = () => {
  let nprice = 0;

  products.map((product) => {
    nprice = nprice + parseInt(product.price) * product.stock;
  });

  return nprice;
};

  useEffect(() => {
    setProducts(loadcart());
  }, []);
  return (

    <Base>
    
    {getredirect(redirect)}
    
      <div className="containerc">
        <h1>Shipping</h1>
        <p>Please enter your shipping details.</p>
        <form>
        <div className="form">
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" htmlFor="firstname">
                First name
              </span>
              <input
              value={fname} onChange={handleChange("fname")}
                className="field__input"
                type="text"
                id="firstname"
                defaultValue="John"
                required
              />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="lastname">
                Last name
              </span>
              <input
              value={lname} onChange={handleChange("lname")}
                className="field__input"
                type="text"
                id="lastname"
                defaultValue="Doe"
                required
              />
            </label>
          </div>
          <label className="field">
            <span className="field__label" htmlFor="address">
              Address
            </span>
            <input className="field__input" value={address} onChange={handleChange("address")} type="text" id="address" required />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="country">
              Country
            </span>
            <select value={country} onChange={handleChange("country")} className="field__input" id="country" required>
              <option value />
              <option value="unitedstates">US</option>
            </select>
          </label>
          <div className="fields fields--3">
            <label className="field">
              <span className="field__label" htmlFor="zipcode">
                Zip code
              </span>
              <input
               value={zipcode} onChange={handleChange("zipcode")}
                className="field__input"
                type="text"
                id="zipcode"
                required
              />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="city">
                City
              </span>
              <input value={city} onChange={handleChange("city")} className="field__input" type="text" id="city" required />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="state">
                State
              </span>
              <select value={state} onChange={handleChange("state")} className="field__input" id="state" required>
                <option value />

                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
                <option value="AA">Armed Forces Americas</option>
                <option value="AP">Armed Forces Pacific</option>
                <option value="AE">Armed Forces Others</option>
              </select>
            </label>
          </div>
          <label className="field">
            <span className="field__label" htmlFor="address">
              Phone
            </span>
            <input
            value={phone} onChange={handleChange("phone")}
              className="field__input"
              type="number"
              id="address"
              required
            />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="address">
              Prefered Time to call
            </span>
            <input value={pttt} onChange={handleChange("pttt")} className="field__input" type="text" id="address" required />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="address">
              email
            </span>
            <input
            value={email} onChange={handleChange("email")}
              className="field__input"
              type="email"
              id="address"
              required
            />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="address">
              Additonal Information
            </span>
            <input value={addition} onChange={handleChange("addition")} className="field__input" type="text" id="address" required />
          </label>
        </div>
       </form>
        <hr />
        <div>
          <br>
          </br>
          <h4>
          <span className="field__label" htmlFor="address">
              <h6>Cart</h6>
            </span>
            
          </h4>
          {products.map((product,index)=>
            {
              return (
                <div >
                <span key={index} className="field__label" htmlFor="address">
                    <h7 >{product.name} X {product.stock}</h7>
                  </span>
                  </div>
              )
            }
          )}
         
          
          
          
          
          <p>
          <span className="field__label" htmlFor="address">
              <h5>Total</h5>
            </span>
            <span className="price" style={{ color: "black" }}>
              <h6>{pricehandler()}</h6>
            </span>
          </p>
        </div>
        <button onClick={onSubmit}  className="buttonc">
        Continue 
          </button>
        
      </div>
    </Base>
  );
}




export default Checkout;
