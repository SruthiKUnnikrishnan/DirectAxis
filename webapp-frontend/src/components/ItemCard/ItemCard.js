import React from "react";
import { Div, Item } from "./ItemCard.styled";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


function ItemCard(props) {
    async function addToWishlist() {

    }
    let navigate = useNavigate()
    return (
        <>
            <Item onClick={() => navigate(`/ProductDetails/${props.id}`)}>
                <img src={props.img} alt="" />
                <div>
                    <p>{props.name}</p>
                    <Div>
                        <div>

                            <p><span><FaIndianRupeeSign />
                                {props.price}</span></p>
                        </div>
                        <BsHeart onClick={() => addToWishlist()} style={{ height: 20, width: 20, cursor: 'pointer' }} />


                    </Div>
                </div>
            </Item>
        </>
    )
}
export default ItemCard