export const addItemToCart =(item,next)=>
{
    let cart=[]
    if (typeof window!==undefined)
    {
        if (localStorage.getItem("cart"))
        {
            cart=JSON.parse(localStorage.getItem("cart"))
        }

        cart.push(
            {
             ...item,
            }
        );
    
        localStorage.setItem("cart",JSON.stringify(cart));
        next();
    }

};

export const addItemToCartnew =(item)=>
{
    let cart=[]
    if (typeof window!==undefined)
    {
        if (localStorage.getItem("cart"))
        {
            cart=JSON.parse(localStorage.getItem("cart"))
        }

        cart.push(
            {
             ...item,
            }
        );
    
        localStorage.setItem("cart",JSON.stringify(cart));
        
    }

};



export const loadcart = () => 
{
    if (typeof window!==undefined)
    {
        if(localStorage.getItem("cart"))
        {
            return JSON.parse(localStorage.getItem("cart"))
        }
    }

}


export const addunit=(productId) =>
{
    let cart=[]
    if(typeof window!==undefined)
    {
        if (localStorage.getItem("cart"))
        {
            cart=JSON.parse(localStorage.getItem("cart"))
        }

        cart.map((product,i)=>{
            if (product.id===productId)
            {
                product.stock=parseInt(product.stock)+1
                //cart.splice(i,1)
            }

        })
        localStorage.setItem("cart",JSON.stringify(cart))
    }   
    return cart;
};

export const removeunit=(productId) =>
{
    let cart=[]
    if(typeof window!==undefined)
    {
        if (localStorage.getItem("cart"))
        {
            cart=JSON.parse(localStorage.getItem("cart"))
        }

        cart.map((product,i)=>{
            if (product.id===productId)
            {
                product.stock=parseInt(product.stock)-1
                //cart.splice(i,1)
            }

        })
        localStorage.setItem("cart",JSON.stringify(cart))
    }   
    return cart;
};


export const removeitemfromcart=(productId) =>
{
    let cart=[]
    if(typeof window!==undefined)
    {
        if (localStorage.getItem("cart"))
        {
            cart=JSON.parse(localStorage.getItem("cart"))
        }

        cart.map((product,i)=>{
            if (product.id===productId)
            {
                cart.splice(i,1)
            }

        })
        localStorage.setItem("cart",JSON.stringify(cart))
    }   
    return cart;
};

export const cartEmpty = next =>
{
    if(typeof window!==undefined)
    {
        localStorage.removeItem("cart")
        let cart=[]
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    
};



export const addformtoinvoice =(item,next)=>
{
    let invoice=[]
    if (typeof window!==undefined)
    {
        if (localStorage.getItem("invoice"))
        {
            invoice=JSON.parse(localStorage.getItem("invoice"))
        }

        invoice.push(
            {
             ...item,
            }
        );
    
        localStorage.setItem("invoice",JSON.stringify(invoice));
        next();
    }

};


export const loadform = () => 
{
    if (typeof window!==undefined)
    {
        if(localStorage.getItem("invoice"))
        {
            return JSON.parse(localStorage.getItem("invoice"))
        }
    }

}