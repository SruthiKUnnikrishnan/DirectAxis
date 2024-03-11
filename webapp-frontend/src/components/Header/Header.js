import React, { useState } from "react";
import { CartCount, HeaderMain, NavList, NavLogo, NavMenu } from "./Header.styled";
import logo from "../../assets/logo.png"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

function Header() {

    const [menu, setMenu] = useState("Home")
    function onClick(props){
        console.log(props)
window.location.href=props
    }

    return (
        <>
            <HeaderMain>
                <NavLogo>
                    <img src={logo} alt="" style={{ height: 60, width: 60 }} />
                    <p>J E W E L B O X</p>
                </NavLogo>
                <NavList>
                    {/* <ul>
                        <li onClick={() => { setMenu("Home") }}><Link to='/' style={{textDecoration:'none',color:'#626262'}}>Shop</Link>{menu === "Home" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("Necklace") }}><Link to='/Necklace'style={{textDecoration:'none',color:'#626262'}}>Necklace</Link>{menu === "Necklace" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("Earrings") }}><Link to='/Earrings'style={{textDecoration:'none',color:'#626262'}}>Earrings</Link>{menu === "Earrings" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("Bangles") }}><Link to='/Bangles'style={{textDecoration:'none',color:'#626262'}}>Bangles</Link> {menu === "Bangles" ? <hr /> : <></>}</li>
                        <li onClick={() => { setMenu("Anklets") }}><Link to='/Anklets'style={{textDecoration:'none',color:'#626262'}}>Anklets</Link> {menu === "Anklets" ? <hr /> : <></>}</li>
                    </ul> */}
                    <ul>
                    <li><Link to='/' style={{textDecoration:'none',color:'#626262'}}>Shop</Link></li>
                        <li onClick={() =>onClick ("/Necklace",)}>Necklace{menu === "Necklace" ? <hr /> : <></>}</li>
                        <li onClick={() => onClick("/Earrings")}>Earrings{menu === "Earrings" ? <hr /> : <></>}</li>
                        <li onClick={() =>onClick ("/Bangles")}>Bangles {menu === "Bangles" ? <hr /> : <></>}</li>
                        <li onClick={() => onClick("/Anklets")}>Anklets {menu === "Anklets" ? <hr /> : <></>}</li>
                    </ul>
                </NavList>
                <NavMenu>
                    <button>Login</button>

                   <Link to='/Wishlist'><FcLike style={{ height: 30, width: 30 }} /></Link>
                    <HiOutlineShoppingBag style={{ height: 30, width: 30,cursor: 'pointer' }} />
                    <CartCount>0</CartCount>

                </NavMenu>
            </HeaderMain>
        </>
    )
}
export default Header