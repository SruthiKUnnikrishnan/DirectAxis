import React, { useContext, useState } from "react";
import Hero from "../../components/Hero/Hero";
import ItemCard from "../../components/ItemCard/ItemCard";
import { LoadMore, ProductCat, Products } from "../ProductCategory.js/ProductCategory.styled";
import { ShopContext } from "../../const/ShopContext";
import { product_img_url } from "../../const/api";


function Home() {
  const [authProduct, setAuthProduct] = useContext(ShopContext)
  const [visible, setVisible] = useState(8)
  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 8)
  }

  return (
    <>
      <Hero />
      <ProductCat>
        <Products>
          {authProduct.slice(0, visible).map((item, i) => {

            return <ItemCard
              key={i}
              id={item.id}
              name={item.name}
              img={product_img_url + item.image}
              price={item.price} />

          })}


        </Products>
        <LoadMore>
          <span onClick={showMoreItems}> Explore More</span>
        </LoadMore>
      </ProductCat>
    </>
  )
}
export default Home