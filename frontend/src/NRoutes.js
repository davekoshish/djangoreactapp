import React from "react";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import  Signup  from "./user/Signup";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Cart from "./core/Cart";
import Product from "./core/Product";
import Products from "./core/Products";
import Shoppingcart from "./core/Shoppingcart";
import Contactus from "./core/Contactus";
import Checkout from "./core/Checkout";
import Trackorder from "./core/Trackorder";
import News from "./core/News";
import Blog from "./core/Blog";
import Invoice from "./core/Invoice";
import Cardnew from "./core/Cardnew";
import Cartdesign from "./core/Cartdesign";



const NRoutes = () =>
{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/signup"  element={<Signup/>}/>
                <Route path="/signin"  element={<Signin/>}/>
                <Route path="/cart"  element={<Shoppingcart/>}/>
                <Route path="/contact"  element={<Contactus/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/trackorder" element={<Trackorder/>}/>
                <Route path="/products"  element ={<Products/>}/>
                <Route path="/shoppingcart" element ={<Shoppingcart/>}/>
                <Route path="/blogs"  element ={<Blog/>}/>
                <Route path="/invoice"  element ={<Invoice/>}/>
                <Route path="/cardnew"  element ={<Cardnew/>}/>
                <Route path="/cartdesign"  element ={<Cartdesign/>}/>

                
                <Route path="/products/:productId" element={<Product/>}/>
                
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default NRoutes;