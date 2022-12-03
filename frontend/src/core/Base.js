import React from 'react';
import "../styles.css";
import {Link,  Navigate} from "react-router-dom";
let logo = require("../images/logo.png");





const Base =({className,children}) => {
  return (
    <div className="super_container">
    {/* Header */}
    <header className="header_section">
        
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container pt-4 ">
           
            <Link to="/" className="navbar-brand" >
              <a><img src={logo}  />
              <span>
                Medion
              </span></a>
              
            </Link>
          
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex  flex-column flex-lg-row align-items-center w-100 justify-content-between">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                   <Link className='nav-link' to='/'> Home</Link>
                  </li>
                  <li className="nav-item">
                  <Link className='nav-link' to='/products'> Products</Link>
                  </li>
                  <li className="nav-item">
                  <Link className='nav-link' to='/contact'> Contact</Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/blogs" className="nav-link" href="news.html"> Blog </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/shoppingcart"  className="nav-link" href="buy.html"> Cart </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/trackorder" className="nav-link" href="news.html"> Track Order </Link>
                  </li>
                  
                </ul>
                <form className="form-inline ">
                  <input type="search" placeholder="Search" />
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
                </form>

                <div className="login_btn-contanier ml-0 ml-lg-5">
                  
                    
                  
                    
                    <Link className='login-abc' to='/signin'>
                      Login 
                    </Link>
                    
                  
                </div>
                <div className="login_btn-contanier ml-0 ml-lg-5">
                  
                    
                  
                    
                    <Link className='login-abc' to='/signup'>
                      Sign up 
                    </Link>
                    
                  
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    
    <div className={className}>{children}</div>
    <div>
    
      {/*Important link source from https://bootsnipp.com/snippets/ooa9M*/}
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
        <footer id="dk-footer" className="dk-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div className="dk-footer-box-info">
                  <a href="index.html" className="footer-logo">
                    <img src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_960_720.png" alt="footer_logo" className="img-fluid" />
                  </a>
                  <p className="footer-info-text">
                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                  </p>
                  <div className="footer-social-link">
                    <h3>Follow us</h3>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* End Social link */}
                </div>
                {/* End Footer info */}
                <div className="footer-awarad">
                  <img src="images/icon/best.png" alt="" />
                  <p>Best Design Company 2019</p>
                </div>
              </div>
              {/* End Col */}
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-us">
                      <div className="contact-icon">
                        <i className="fa fa-map-o" aria-hidden="true" />
                      </div>
                      {/* End contact Icon */}
                      <div className="contact-info">
                        <h3>Jaipur India</h3>
                        <p>5353 Road Avenue</p>
                      </div>
                      {/* End Contact Info */}
                    </div>
                    {/* End Contact Us */}
                  </div>
                  {/* End Col */}
                  <div className="col-md-6">
                    <div className="contact-us contact-us-last">
                      <div className="contact-icon">
                        <i className="fa fa-volume-control-phone" aria-hidden="true" />
                      </div>
                      {/* End contact Icon */}
                      <div className="contact-info">
                        <h3>95 711 9 5353</h3>
                        <p>Give us a call</p>
                      </div>
                      {/* End Contact Info */}
                    </div>
                    {/* End Contact Us */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Contact Row */}
                <div className="row">
                  <div className="col-md-12 col-lg-6">
                    <div className="footer-widget footer-left-widget">
                      <div className="section-heading">
                        <h3>Useful Links</h3>
                        <span className="animate-border border-black" />
                      </div>
                      <ul>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Services</a>
                        </li>
                        <li>
                          <a href="#">Projects</a>
                        </li>
                        <li>
                          <a href="#">Our Team</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">Contact us</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                        </li>
                        <li>
                          <a href="#">Testimonials</a>
                        </li>
                        <li>
                          <a href="#">Faq</a>
                        </li>
                      </ul>
                    </div>
                    {/* End Footer Widget */}
                  </div>
                  {/* End col */}
                  <div className="col-md-12 col-lg-6">
                    <div className="footer-widget">
                      <div className="section-heading">
                        <h3>Subscribe</h3>
                        <span className="animate-border border-black" />
                      </div>
                      <p>{/* Don’t miss to subscribe to our new feeds, kindly fill the form below. */}
                        Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
                      <form action="#">
                        <div className="form-row">
                          <div className="col dk-footer-form">
                            <input type="email" className="form-control" placeholder="Email Address" />
                            <button type="submit">
                              <i className="fa fa-send" />
                            </button>
                          </div>
                        </div>
                      </form>
                      {/* End form */}
                    </div>
                    {/* End footer widget */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
              {/* End Col */}
            </div>
            {/* End Widget Row */}
          </div>
          {/* End Contact Container */}
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <span>Copyright © 2019, All Right Reserved Seobin</span>
                </div>
                {/* End Col */}
                <div className="col-md-6">
                  <div className="copyright-menu">
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Terms</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Copyright Container */}
          </div>
          {/* End Copyright */}
          {/* Back to top */}
          <div id="back-to-top" className="back-to-top">
            <button className="btn btn-dark" title="Back to Top" style={{display: 'block'}}>
              <i className="fa fa-angle-up" />
            </button>
          </div>
          {/* End Back to top */}
        </footer>
    </div>
  </div>
  );
};


export default Base;