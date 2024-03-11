import React, { createContext, useEffect, useState } from "react";
import { server_api } from "./api";
import all_products from "../assets/all_products"


export const ShopContext= createContext(null);
const ShopContextProvider=(props)=>{
    // const contextValue={all_products};
    const [authProduct,setAuthProduct] = useState([])

    /////To get products/////////////
    useEffect(()=>{

        async function getAllProducts()
        {
            await fetch(server_api + '/api/listProducts')
            .then(response=>response.json())
            .then(response=>{
               
                setAuthProduct(response)
               
            })
        }
        getAllProducts()
    },[])
const contextValue=authProduct
 
    return(
        <ShopContext.Provider value={[authProduct,setAuthProduct] } >
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
