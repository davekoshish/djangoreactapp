import React from 'react'
import Base from './Base'
import "../styles.css"

export default function Cartdesign() {
  return (
    <Base>
    <section className="h-100 gradient-custom">
    <div className="container py-5">
      <div className="row d-flex justify-content-center my-4">
        <div className="col-md-8">

            
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Cart - 2 items</h5>
            </div>
            <div className="card-body">
              {/* Single item */}
              <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                  {/* Image */}
                  <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp" className="w-100" alt="Blue Jeans Jacket" />
                    <a href="#!">
                      <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                    </a>
                  </div>
                  {/* Image */}
                </div>
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  {/* Data */}
                  <p><strong>Blue denim shirt</strong></p>
                  <p>Color: blue</p>
                  <p>Size: M</p>
                  <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                    <i className="fa fa-trash" />
                  </button>
                  <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                    <i className="fa fa-heart" />
                  </button>
                  {/* Data */}
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  {/* Quantity */}
                  <div className="d-flex mb-3" style={{maxWidth: '200px'}} >
                    <button className="btn btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i className="fa fa-minus" />
                    </button>
                    <div className="form-outline">
                      <input id="form1" min={0} name="quantity" defaultValue={1}  className="form-control" style={{maxWidth: '40px'}}  readOnly={true}/>
                    
                    </div>
                    <button className="btn btn-primary px-3 ms-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i className="fa fa-plus" />
                    </button>
                  </div>
                  {/* Quantity */}
                  {/* Price */}
                  <p className="text-start text-md-center">
                    <strong>$17.99</strong>
                  </p>
                  {/* Price */}
                </div>
              </div>
              
              {/* Single item */}
              
              {/* Single item */}
              
              {/* Single item */}
            </div>
        {/*end of first product*/}
            
          </div>
           <div className="card mb-4">
           
        <div className="card-body p-3 d-flex flex-row">
        
          <div className="form-outline flex-fill">
        
            <input type="text" placeholder="Promo Code" id="form1" className="form-control form-control-lg" />
           
          </div>
          <button type="button" className="btn btn-outline-primary btn-lg ms-3">Apply</button>
        </div>
        <div className="card mb-4">
            <div className="card-body">
              <p><strong>Expected shipping delivery</strong></p>
              <p className="mb-0">Within 4-5 Working Days</p>
            </div>
          </div>
      </div>
        
          <div className="card mb-4 mb-lg-0">
            <div className="card-body">
              <p><strong>We accept</strong></p>
              <img className="me-2" width="45px" src="https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg" alt="Visa" />
              <img className="me-2" width="40px" src="https://cryptologos.cc/logos/litecoin-ltc-logo.svg" alt="American Express" />
              <img className="me-2" width="25px" src="https://cryptologos.cc/logos/ethereum-eth-logo.svg" alt="Mastercard" />
              <img className="me-2" width="45px" src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg" alt="PayPal acceptance mark" />
              <img className="me-2" width="45px" src="https://cryptologos.cc/logos/tether-usdt-logo.svg" alt="PayPal acceptance mark" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$53.98</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>$53.98</strong></span>
                </li>
              </ul>
              <button type="button" className="btn btn-primary btn-lg btn-block">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </Base>
  )
}
