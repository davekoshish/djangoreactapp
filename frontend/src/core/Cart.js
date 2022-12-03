import React , {useState,useEffect}from 'react'
import "../styles.css"
import Base from './Base'
import { loadcart } from './helper/Carthelper'
import Card from './Card'

const Cart =() => {

  const [products,setProducts]=useState([])
  const [reload,setReload]=useState(false)

  useEffect(()=>
  {
    setProducts(loadcart());
  },[reload])

  const loadallProducts=()=>
  {
    return(
      <div>
        <h1>Products</h1>
        {products.map((product,index)=>
        (
          <Card 
            key={index}
            product={product}
            removefromcart={true}
            addtocart={false}
            reload={reload}
            setReload={setReload}
          />
        ))}
      </div>

    );
  };

  const loadCheckout = () =>
  {
    return(
    <div>
      <h1>Checkout</h1>
    </div>
    );
  };
  return (
    <Base>
      <div className='row text-center'>
        <div className='col-3'>
          {loadallProducts(products)}
        </div>
        <div className='col-9'>
          {loadCheckout()}
        </div>
      </div>
      </Base>
  )
}

export default Cart;