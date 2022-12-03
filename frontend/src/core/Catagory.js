import React from 'react';
import { Link } from 'react-router-dom';
import "../styles.css";
import Products from './Products';



const Catagory =({Cat}) => {
    
    const caategory= Cat ? Cat.name : "false";
    
  return (
              <div>
            
    <article className="card-group-item">
    
      <div className="filter-content">
        <div className="list-group list-group-flush">
        
          <Link to="/products" className="list-group-item">{caategory}<span className="float-right badge badge-light round"></span> </Link>
          
          
        </div>  {/* list-group .// */}
      </div>
    </article> {/* card-group-item.// */}
 {/* card-group-item.// */}
 
        </div>
  )
}

export default Catagory;