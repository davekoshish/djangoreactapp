import {API} from "../../Backend";

 const getCategories =()=>{
    return fetch(`${API}category/`, {method: "GET"})
    .then((Response)=> {
        return Response.json();
    })
    .catch((err) => console.log(err));
};


export default getCategories;