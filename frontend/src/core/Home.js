import React, { useEffect, useState } from "react";

import  getProducts  from "./helper/Coreapicalls";
import useFetch from "react-fetch-hook"
import Base from "./Base";
import Card from "./Card";
import "../styles.css";
import Catagory from "./Catagory";
import News from "./News";
import getCategories from "./helper/getCategories";
let Medicine = require("../images/medicine.png");


export default function Home() {
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState([]);
  const [error, setError] = useState(false);
  const [Cerror, setCError] = useState(false);
  const [res,setRes]=useState([]);
  const [nproducts, setnProducts] = useState([]);
  const [nerror, setnError] = useState(false);

  const loadallProducts = () => {
    getProducts().then((data) => {
      if (data && data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setProducts(data);
      }
    });
  };

  const loadallnProducts = () => {
    getProducts().then((data) => {
      if (data && data.nerror) {
        setError(data.nerror);
        console.log(nerror);
      } else {
        setnProducts(data);
      }
    });
  };

  const uniqueprod = (name) =>
  {
    const NRes = nproducts.filter((prod)=>prod.category===name);
    
  }





  const loadallCat = () => {
    getCategories().then((data) => {
      if (data && data.Cerror) {
        setCError(data.Cerror);
        console.log(Cerror);
      } else {
        setCat(data);
      }
    });
  };

 
 
 
  

  const filter =(text)=>

  {
    const ress=products.filter((prop)=>
    {
      return prop.description===text;
    })
    setnProducts(ress);
  }
          


  useEffect(() => {
    loadallProducts();
    loadallCat();
    loadallnProducts();
    
    
  }, []);


 

 

  return (
    <Base>
      
    <br>

    </br>
    <br>
    </br>
      <div className="containernew1">
        <div className="row">
        <div className="col-md-3">
          <header className="card-header"><h6 className="title">All Categories </h6></header>
         {cat.map((cate,index)=>{
          return(
            
            <div  key={index}>
           
           
               <Catagory  Cat={cate}/>
              </div> 
         
          )
         })}
         </div>
          
             
        
          
          <div className="col-md-9">
            <br>
            </br>
            <br>
            </br>
            <div className="row">
              <section className=" slider_section position-relative">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={0}
                      className="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={1}
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to={2}
                    />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="img-box">
                              <img src={Medicine} alt="" />
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="detail-box">
                              <h1>
                                Welcome To Our <br />
                                <span>Online Medicine</span>
                              </h1>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
                              </p>
                              <div>
                                <a href>Buy Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="img-box">
                              <img src={Medicine} alt="" />
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="detail-box">
                              <h1>
                                Welcome To Our <br />
                                <span>Online Medicine</span>
                              </h1>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
                              </p>
                              <div>
                                <a href>Buy Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="img-box">
                              <img src={Medicine} alt="" />
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="detail-box">
                              <h1>
                                Welcome To Our <br />
                                <span>Online Medicine</span>
                              </h1>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable.
                              </p>
                              <div>
                                <a href>Buy Now</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      
      
      <div className="containernew">
        <h1>
          Products
        </h1>
        <br>
        </br>
     
        <div className="row">
          
          {products.slice(0, 8).map((product, index) => {
            
              
           
            return (
              
              <div key={index} className="col-md-3">
                <Card product={product} />


                

              
              </div>
            );
          })}
          
          
        </div>
     
      
          <br>
          </br>
      <h2>
        Catagory Products
      
        

        <br>
        </br>
        
      </h2>
      <div>
      <div className="row">
       
        <div align="center">
          
           
            <button  onClick={()=>filter("Xanax")}  className="btn btn-default filter-button">Xanax</button>
            <button  onClick={()=>filter("Percocet")}  className="btn btn-default filter-button">Percocet</button>
            <button onClick={()=>filter("Oxycotine")}  className="btn btn-default filter-button">Oxycotine</button>
            <button  onClick={()=>filter("Oxycodone")}  className="btn btn-default filter-button">Oxycodone</button>
            <button  onClick={()=>filter("Hydrocodone")}  className="btn btn-default filter-button">Hydrocodone</button>
            <button  onClick={()=>filter("Dilaudid")}  className="btn btn-default filter-button">Dilaudid</button>
            <button  onClick={()=>filter("Adderall")}  className="btn btn-default filter-button">Adderall</button>

          
          
          
        </div>
        <br>
        </br>
        <br>
        </br>
        <br />
      </div>
      <div className="col">
        <div className="row">
          {nproducts.map((product, index) => {
            return (
              <div key={index} className="col-md-3">
                <Card product={product} />
                
                <br></br>
                <br></br>
              </div>
            );
          })}
          
        </div>
      </div>
      </div>
      <h1>
        NEWS
        <br>
        </br>
      </h1>
      
      
      </div>
      
      <News />
    </Base>
  );
}
