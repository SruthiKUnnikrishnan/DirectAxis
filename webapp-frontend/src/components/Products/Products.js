import React from "react";
import { HiMiniStar } from "react-icons/hi2";
import { FaRupeeSign } from "react-icons/fa";
import { product_img_url } from "../../const/api";
import { Description, ProductDisplay, ProductDisplayImg, ProductDisplayLeft, ProductDisplayRight, ProductMain, ProductPrice, ProductReview } from "./Products.styled";
function Products(props) {
    const { product } = props
    // console.log(product.image)
    return (
        <>
            <ProductMain>
                <p>Shop/{product.category}/{product.name}</p>
                <img src={product.image} alt="" />
                <ProductDisplay>
                    <ProductDisplayLeft>
                        <ProductDisplayImg>
                            <img src={product_img_url + product.image} alt="" />
                        </ProductDisplayImg>
                    </ProductDisplayLeft>
                    <ProductDisplayRight>
                        <h1>{product.name}</h1>
                        <ProductReview>
                            <HiMiniStar style={{ color: "gold" }} />
                            <HiMiniStar style={{ color: "gold" }} />
                            <HiMiniStar style={{ color: "gold" }} />
                            <HiMiniStar style={{ color: "#808080" }} />
                            <HiMiniStar style={{ color: "#808080" }} />

                        </ProductReview>
                        <ProductPrice>
                            <FaRupeeSign />{product.price}

                        </ProductPrice>
                        <Description>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex ac enim sollicitudin imperdiet et a elit. Nulla lacus orci, dictum vel lacus vitae, gravida laoreet magna. Nulla iaculis neque erat, a ultricies magna faucibus vel. Maecenas varius vehicula risus ac suscipit.
                                Curabitur sit amet malesuada mi, sit amet placerat erat. Vivamus vestibulum quis tellus eget hendrerit. Donec leo enim, condimentum sed semper ac, mattis at libero.</p>
                        </Description>
                        <button>Add to cart</button>
                    </ProductDisplayRight>

                </ProductDisplay>
            </ProductMain>
        </>
    )
}
export default Products