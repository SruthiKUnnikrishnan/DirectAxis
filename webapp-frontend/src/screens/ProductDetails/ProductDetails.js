import React, { useContext } from "react";
import { ShopContext } from "../../const/ShopContext";
import { useParams } from "react-router-dom";
import Products from "../../components/Products/Products";
function ProductDetails(){
    const [authProduct, setAuthProduct]=useContext(ShopContext);
    const{productId}=useParams();
    const product=authProduct.find((e)=>e.id===Number(productId))
    return(
        <>
        <Products product={product}/>
        </>
    )
}
export default ProductDetails