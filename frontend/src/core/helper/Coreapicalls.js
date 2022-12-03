import {API} from "../../Backend";

 const getProducts = () => {
    return fetch(`${API}product/`, {method: "GET"})
    .then((Response)=> {
        return Response.json();
    })
    .catch((err) => console.log(err));
};



 export default getProducts;