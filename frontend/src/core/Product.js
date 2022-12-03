import React, { useEffect, useState } from "react";
import Base from "./Base";
import getProducts from "./helper/Coreapicalls";
import { Navigate, useParams } from "react-router-dom";
import { API } from "../Backend";
import ImageHelper from "./helper/Image";
import Review from "./Review";
import Desc from "./Desc";
import Card from "./Card";
import { addItemToCart } from "./helper/Carthelper";


const isAuthenticated=true;

const Product = () => {
  const [products, setProducts] = useState([]);

  const [error, setError] = useState(false);

  const { productId } = useParams();
  const [nnproducts,setnnProducts]=useState([])
  const [sproduct, setSproduct] = useState({

    
    price: price,
    clicked:true,
    atc:1,
    rc:false,
    dc:true,
  });

  const [redirect,setRedirect]=useState(false)

  const addTocart=(prop)=>{
      if (isAuthenticated)
      {
          addItemToCart(prop,()=>setRedirect(true))
          console.log("added to cart")
      }
      else{
          console.log("login first!")
      }
  };

  const getredirect=(redirect)=>{
      if(redirect)
      {
          return <Navigate to="/shoppingcart"/>
      }
  };


  const {price,clicked,atc,rc,dc} =sproduct;

  const handlerfprice = (name,rate) =>(event) =>
  {
    setSproduct({...sproduct,clicked:false,[name]:parseInt(price)+rate})
  }

  //todo
  const filter =(text) =>

  {
    const ress=nnproducts.filter((prop)=>
    {
     console.log(prop.description,text)
      return prop.description===text;
    })
    setnnProducts(ress);
  }

  const getProduct = () => {
    return fetch(`${API}product/${productId}/`, { method: "GET" })
      .then((Response) => {
        return Response.json();
      })
      .catch((err) => console.log(err));
  };

  const loadProduct = () => {
    getProduct().then((data) => {
      if (data && data.error) {
        console.log(error);
      } else {
        setSproduct(data);
      }
    });
  };

  const onButtonClick =()=> {
    setSproduct({
      ...sproduct,rc: true,dc:false
    });
  }

  const onButtonClickdes = () =>
  {
    setSproduct({
      ...sproduct,dc:true,rc:false
    })
  }

  const loadallProducts = () => {
    getProducts().then((data) => {
      if (data && data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setProducts(data);
        setnnProducts(data);
        
      }
    });
  };

 
  
  const handlerforprice = (name)=> (event) =>
  {
    setSproduct({...sproduct,clicked:false,[name]:parseInt(price)})
  }


  const handlerforatc = (name) => (event) =>
  {
    let natc=atc
    setSproduct({...sproduct,[name]:atc})
  }
 
  useEffect(() => {
    loadallProducts();
    filter();
    loadProduct();
    getProduct();
    
    
  }, []);

  return (
    <Base>
      <div>
      {getredirect(redirect)}
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        {/*---- Include the above in your HEAD tag --------*/}
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />
        <div className="pd-wrap">
          <div className="container">
            <div className="heading-section">
              <h2>Product Details</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                    <ImageHelper product={sproduct}/>
               
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{sproduct.name}</div>

                    <div className="reviews-counter">
                      <div className="rate">
                        <input
                          type="radio"
                          id="star5"
                          name="rate"
                          defaultValue={5}
                          defaultChecked
                        />
                        <label htmlFor="star5" title="text">
                          5 stars
                        </label>
                        <input
                          type="radio"
                          id="star4"
                          name="rate"
                          defaultValue={4}
                          defaultChecked
                        />
                        <label htmlFor="star4" title="text">
                          4 stars
                        </label>
                        <input
                          type="radio"
                          id="star3"
                          name="rate"
                          defaultValue={3}
                          defaultChecked
                        />
                        <label htmlFor="star3" title="text">
                          3 stars
                        </label>
                        <input
                          type="radio"
                          id="star2"
                          name="rate"
                          defaultValue={2}
                        />
                        <label htmlFor="star2" title="text">
                          2 stars
                        </label>
                        <input
                          type="radio"
                          id="star1"
                          name="rate"
                          defaultValue={1}
                        />
                        <label htmlFor="star1" title="text">
                          1 star
                        </label>
                      </div>
                      <span>3 Reviews</span>
                    </div>
                    <div className="product-price-discount">
                      <span>{sproduct.price}</span>
                      <span className="line-through">$29.00</span>
                    </div>
                  </div>
                  

                  <div
                    class="btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      class="btn-group mr-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button  type="button" class="btn btn-secondary">
                        60
                      </button>
                      <button onClick={clicked ? handlerfprice("price",140) : ()=>{}}  type="button" class="btn btn-secondary">
                        120
                      </button>
                      <button onClick={handlerfprice("price",120)} type="button" class="btn btn-secondary">
                        180
                      </button>
                      <button onClick={handlerfprice("price",270)} type="button" class="btn btn-secondary">
                        240
                      </button>
                      <button onClick={handlerfprice("price",410)} type="button" class="btn btn-secondary">
                        300
                      </button>
                      
                    </div>
                  </div>
                  <div className="product-count">
                    <label htmlFor="size">Quantity</label>
                    <form action="#" className="display-flex">
                      <div  className="qtyminus">-</div>
                      <input
                        type="text"
                        name="quantity"
                        defaultValue={1}
                        value={atc}
                        className="qty"
                      />
                      <div onClick={handlerforatc()}  className="qtyplus">+</div>
                    </form>
                    <a href="#" onClick={()=>addTocart(sproduct)} className="round-black-btn">
                      Add to Cart
                    </a>
                  </div>
                  <br></br>
                  <a>SKU : <span>{sproduct.stock}</span></a>
                  <br></br>
                  <a>Category : <span>{sproduct.description}</span></a>
                  
                  <br>
                  </br>
                  <a>TAGS : <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span></a>
                  
                </div>
              </div>
            </div>
            <div className="product-info-tabs">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li  onClick={onButtonClickdes} className="nav-item">
                  <a
                    className="nav-link active"
                    id="description-tab"
                    data-toggle="tab"
                    href="#description"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li onClick={onButtonClick} className="nav-item">
                  <a
                    className="nav-link"
                    id="review-tab"
                    data-toggle="tab"
                    href="#review"
                    role="tab"
                    aria-controls="review"
                    aria-selected="false"
                  >
                    Reviews (0)
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
              <div>
                {dc ?
                    <Desc /> :
                    null
                    }
                {rc ?
                    <Review /> :
                    null
                    }
                </div>
               
                
              </div>
            </div>

         
          </div>
          
        </div>
       
        
            
          
          
                   
        <div className="container">
        
        {nnproducts.slice(0, 4).map((product, index) => {
            
              
            
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
    </Base>
  );
};

export default Product;
