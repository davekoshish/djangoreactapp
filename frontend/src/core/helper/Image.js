import React from 'react';

export default function ImageHelper({product}) {
   const imageurl= product ? product.image : `https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg`;
  
    return (
        
            <div>
            <img
            
            src={imageurl}
            style={{width:"90%", height:"90%", objectFit:"cover",}}
            className="card-img-top" 
            alt="Apple Computer"
            
            />
            </div>

        
  );
};


