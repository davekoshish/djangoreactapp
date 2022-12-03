import React, { useEffect, useState } from 'react';
import ImageHelper from './helper/Image';
import { Link,Navigate } from 'react-router-dom';
import { addItemToCart,removeitemfromcart } from './helper/Carthelper';
import useFetch from "react-fetch-hook"
import Product from './Product';
import "../styles.css"

//TODO:
const isAuthenticated=true;




const Card =({
    product,
    addtocart=true,
    removefromcart=false,
    reload=undefined,
    setReload = f => f,
    
    //function(f){return f}
})=> {

  const [redirect,setRedirect]=useState(false)

    const addTocart=()=>{
        if (isAuthenticated)
        {
            addItemToCart(product,()=>setRedirect(true))
            console.log("added to cart")
        }
        else{
            console.log("login first!")
        }
    };

    const getredirect=(redirect)=>{
        if(redirect)
        {
            return <Navigate to="/cart"/>
        }
    };

    const showaddtocart = (addTocart) =>
    {
        return(
            addTocart && (
              <span onClick={addTocart} className="add-to-cart">
              <span   className="txt">Add in cart</span>
            </span>
            )
        );
    };

    const showremovefromcart = removefromcart =>
    {
        return (
            removefromcart && 
            (
                <label class=" btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off" onClick={()=>{
                    removeitemfromcart(product.id);
                    setReload(!reload)
                    console.log("will make it run");}}/> Remove
                </label>
            )
        );
    };
    
 
    const style = {
 
      // Adding media query..
      
      '@media (max-width: 767px)': {
	
        
          width: '450px',
          margin: '30px auto',
        
        },
    };
 
   
  return (
    
    <div>
        
          <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
        <div className="el-wrapper" style={style} >
        <Link to={`/products/${product.id}` } style={{ textDecoration: 'none' }}>
        <div className="box-up">
            <div className="img" ><ImageHelper product={product}/> </div>
            <div className="img-info">
              <div className="info-inner">
                <span className="p-name">{product.name}</span>
                <span  className="p-company">{product.description}</span>
              </div>
              <div className="a-size">Pills unit : <span className="size">60 , 120 , 180 , 240 , 300</span></div>
            </div>
          </div>
        </Link>
        {getredirect(redirect)}
          <div className="box-down">
            <div className="h-bg">
              <div className="h-bg-inner" />
            </div>
            <a  className="cart" href="#">
              <span className="price">{product.price}</span>
              {showaddtocart(addTocart)}
            
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
      
    </div>
  );
};

export default Card;
