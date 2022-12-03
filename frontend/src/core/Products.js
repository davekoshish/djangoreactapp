import React, { useEffect, useState } from "react";

import Base from './Base';
import  getProducts  from "./helper/Coreapicalls";
import Catagory from './Catagory';
import getCategories from './helper/getCategories';
import Card from './Card';


const  Products = () => {


    const [products, setProducts] = useState([]);
    const [Cat, setCat] = useState([]);
    const [error, setError] = useState(false);
    const [Cerror, setCError] = useState(false);
    const [cproducts,setcProducts] =useState([]);

    const filter =(text)=>

    {
      const ress=products.filter((prop)=>
      {
        return prop.description===text;
      })
      setcProducts(ress);
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

      const loadallProducts = () => {
        getProducts().then((data) => {
          if (data && data.error) {
            setError(data.error);
            console.log(error);
          } else {
            setProducts(data);
            setcProducts(data);
          }
        });
      };      

      useEffect(() => {
        loadallProducts();
        loadallCat();
        
        
        
      }, []);
    
  return (
    <Base>
    <br>
    </br>
    <br>
    </br>
        <div className="productbox">   
        <div className="row">
        <div className="col-md-3">
          <header className="card-header"><h6 className="title">All Categories </h6></header>
          <article className="card-group-item">
    
            <div className="filter-content">
            <div className="list-group list-group-flush">
      
            <a href="#" onClick={()=>filter("Xanax")} className="list-group-item">Xanax<span className="float-right badge badge-light round"></span> </a>
            <a href="#" onClick={()=>filter("Percocet")} className="list-group-item">Percocet<span className="float-right badge badge-light round"></span> </a>
            <a href="#" onClick={()=>filter("Oxycotine")} className="list-group-item">Oxycotine<span className="float-right badge badge-light round"></span> </a>
            <a href="#" onClick={()=>filter("Oxycodone")} className="list-group-item">Oxycodone<span className="float-right badge badge-light round"></span> </a>
            <a href="#" onClick={()=>filter("Hydrocodone")} className="list-group-item">Hydrocodone<span className="float-right badge badge-light round"></span> </a>
            <a href="#" onClick={()=>filter("Dilaudid")} className="list-group-item">Dilaudid<span className="float-right badge badge-light round"></span> </a>
            <a href="#" onClick={()=>filter("Adderall")} className="list-group-item">Adderall<span className="float-right badge badge-light round"></span> </a>
        
        
            </div>
         <br>
         </br>  {/* list-group .// */}
    </div>
  </article>
         </div>
         
         
         <div className="col-md-9">
            <h2>All Products</h2>
            <br>
            </br>
         <div className="row">
         {cproducts.map((product, index) => {
            
              
           
            return (
              
              <div key={index} className="col-md-3">
                <Card product={product} />

                </div>
            );
          })}
               </div> 
         </div>
         
         </div>
         </div>   
    </Base>
  )
}
export default Products;