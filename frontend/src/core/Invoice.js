import React, { useEffect, useState } from "react";
import Base from "./Base";
import Checkout from "./Checkout";
import { loadcart, loadform } from "./helper/Carthelper";
let logo = require("../images/logo.png");

const Invoice =() =>{
    const [details, setDetails] = useState([]);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [products, setProducts] = useState([]);

    
    const pricehandler = () => {
        let nprice = 0;
    
        products.map((product) => {
          nprice = nprice + (parseInt(product.price)*product.stock);
        });
        
        return nprice;
      };

    useEffect(() => {
        setDetails(loadform());
        setProducts(loadcart());
    }, []);
  return (
    <Base>
    
      
         {details.slice(details.length-1, details.length).map((detail,index)=>
         {
            return(
                <div key={index}>
                    <div>
                        {console.log()}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t\t\t.invoice-box {\n\t\t\t\tmax-width: 1500px;\n\t\t\t\tmargin: auto;\n\t\t\t\tpadding: 30px;\n\t\t\t\tborder: 1px solid #eee;\n\t\t\t\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n\t\t\t\tfont-size: 16px;\n\t\t\t\tline-height: 30px;\n\t\t\t\tfont-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;\n\t\t\t\tcolor: #555;\n\t\t\t}\n\n\t\t\t.invoice-box table {\n\t\t\t\twidth: 100%;\n\t\t\t\tline-height: inherit;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\n\t\t\t.invoice-box table td {\n\t\t\t\tpadding: 5px;\n\t\t\t\tvertical-align: top;\n\t\t\t}\n\n\t\t\t.invoice-box table tr td:nth-child(2) {\n\t\t\t\ttext-align: right;\n\t\t\t}\n\n\t\t\t.invoice-box table tr.top table td {\n\t\t\t\tpadding-bottom: 20px;\n\t\t\t}\n\n\t\t\t.invoice-box table tr.top table td.title {\n\t\t\t\tfont-size: 45px;\n\t\t\t\tline-height: 45px;\n\t\t\t\tcolor: #333;\n\t\t\t}\n\n\t\t\t.invoice-box table tr.information table td {\n\t\t\t\tpadding-bottom: 40px;\n\t\t\t}\n\n\t\t\t.invoice-box table tr.heading td {\n\t\t\t\tbackground: #eee;\n\t\t\t\tborder-bottom: 1px solid #ddd;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\n\t\t\t.invoice-box table tr.details td {\n\t\t\t\tpadding-bottom: 20px;\n\t\t\t}\n\n\t\t\t.invoice-box table tr.item td {\n\t\t\t\tborder-bottom: 1px solid #eee;\n\t\t\t}\n\n\t\t\t.invoice-box table tr.item.last td {\n\t\t\t\tborder-bottom: none;\n\t\t\t}\n\n\t\t\t.invoice-box table tr.total td:nth-child(2) {\n\t\t\t\t ;border-top: 2px solid #eee;\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\n\t\t\t@media only screen and (max-width: 600px) {\n\t\t\t\t.invoice-box table tr.top table td {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\n\t\t\t\t.invoice-box table tr.information table td {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/** RTL **/\n\t\t\t.invoice-box.rtl {\n\t\t\t\tdirection: rtl;\n\t\t\t\tfont-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;\n\t\t\t}\n\n\t\t\t.invoice-box.rtl table {\n\t\t\t\ttext-align: right;\n\t\t\t}\n\n\t\t\t.invoice-box.rtl table tr td:nth-child(2) {\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t",
          }}
        />
        <div className="invoice-box">
        <div class="alert alert-success" role="alert">
        Thank You for the order !!
            </div>
          <table cellPadding={0} cellSpacing={0}>
            <tbody>
              <tr className="top">
                <td colSpan={2}>
                  <table>
                    <tbody>
                      <tr>
                        <td className="title">
                          <img
                            src={logo}
                            style={{ width: "", maxWidth: "" }}
                          />
                        </td>
                        <td>
                          Order id #: 123
                          <br />
                          
                          Placed : {date}
                          <br />
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="information">
                <td colSpan={2}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          
                          {detail.address}
                          <br />
                          {detail.zipcode} {detail.city}
                          <br />
                          {detail.state} {detail.country}
                          
                        </td>
                        <td>
                          
                          
                        
                          {detail.fname} {detail.lname}
                          <br />
                          {detail.email}
                          <br />
                          Phone no. {detail.phone}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="heading">
                <td>Prefered Time to Talk</td>
                <td> {detail.pttt}</td>
              </tr>
              <tr className="heading">
                <td>Note</td>
                <td> {detail.addition}</td>
              </tr>
              <tr className="heading">
                <td>Payment Method</td>
                <td>Cash on Delivery</td>
              </tr>
             
              <tr className="heading">
                <td>Products</td>
                <td>Price</td>
              </tr>

            {products.map((product,index)=>
            {
                return(
                    
                        <tr className="item">
                         <td>{product.name} x{product.stock}</td>
                        <td>{product.price}</td>
                    </tr>

                    
                )
            })}  
              
              <tr className="item last">
                <td />
                <td ><h5 style={{"font-weight": "bold"}}>Total: ${pricehandler()}</h5></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
                    
                </div>

            )
         })}

             
      <br>
      </br>
      <br>
      </br>
    </Base>
  );
}


export default Invoice;