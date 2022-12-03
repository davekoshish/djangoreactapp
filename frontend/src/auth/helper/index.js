import {API} from "../../Backend";
import { cartEmpty } from "../../core/helper/Carthelper";
//cause after sign out i want cart to became empty


export const signup = (user) =>
{
    return fetch(`${API}user/`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response=>{
        return response.json();
    })
    .catch(err=>console.log(err))
};

export const signin = (user) =>
{
    const formData = new FormData()

    for (const name in user)
    {
        formData.append(name,user[name]) 
    }

    return fetch(`${API}user/login/`,{
        method:"POST",
        body:formData
    })
    .then((response)=>
        {
            console.log("SUCESS",response);
            return response.json();
        })
    .catch(err=>console.log(err))
};



export const authenticate = (data,next)=>
{
    if(typeof window!==undefined)
    {
        localStorage.setItem("jwt",JSON.stringify(data));
        next();
    }
};


export const iisAuthenticated = () =>
{
    if (typeof window==undefined)
    {
        return false
    }
    if (localStorage.getItem("jwt"))
    {
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
        return false;
    }

};

export const signout = next =>
{
    const userId=iisAuthenticated() && iisAuthenticated().user.userId
    if(typeof window!==undefined)
    {
        localStorage.removeItem("jwt")
        cartEmpty(()=>{
            
        });
        //next();

        return fetch(`${API}user/logout/${userId}`,
        {
            method:"GET"
        })
        .then(response=>{console.log("signout success")
        next();})
        .catch(err=>console.log(err));
    }
}







