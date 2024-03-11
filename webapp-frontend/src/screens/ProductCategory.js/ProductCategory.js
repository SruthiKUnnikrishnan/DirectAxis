import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../const/ShopContext";
import { Dropdown, IndexSort, LoadMore, ProductCat, Products, Sort, SortBtn } from "./ProductCategory.styled";
import { FaChevronDown } from "react-icons/fa";
import ItemCard from "../../components/ItemCard/ItemCard";
import { product_img_url } from "../../const/api";

function ProductCategory(props) {

    
    const [authProduct, setAuthProduct] = useContext(ShopContext)
    const [search, setSearch] = useState('')
 
   
////////////////////SORTING///////////////////////
    async function sortProduct() {
        const categoryList = authProduct.filter((item) => item.category === props.category);
        const sortedlist = categoryList.sort((a, b) => (a.price > b.price) ? 1 : -1)
        setAuthProduct(sortedlist)  
    }


    return (
        <>
            <ProductCat>
                {/************** * Search and Sort ************************/}
                <IndexSort>
                    <form>
                        <input placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
                    </form>

                    <Sort>
                        <SortBtn> Sort by <FaChevronDown /></SortBtn>

                        <Dropdown>
                            <p onClick={() => sortProduct()}>price low to high </p>
                        </Dropdown>
                    </Sort>

                </IndexSort>
                <Products>
                    {/*********************** Product Listing ********************************/}
                    {
                        authProduct
                            .filter((item) => {
                                return search.toLowerCase() === '' ? item
                                    :
                                    item.name.toLowerCase().includes(search);
                            })
                            .map((item, i) => {
                                if (props.category === item.category) {
                                    return <ItemCard
                                        key={i}
                                        id={item.id}
                                        name={item.name}
                                        img={product_img_url + item.image}
                                        price={item.price} />
                                }
                                else {
                                    return null
                                }
                            })
                    }

                </Products>
                

            </ProductCat>
        </>
    )
}
export default ProductCategory