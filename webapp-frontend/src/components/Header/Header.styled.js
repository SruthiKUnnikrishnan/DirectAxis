import styled from "styled-components";

const HeaderMain=styled.div`
display:flex;
justify-content:space-around;
align-items:center;
padding:16px;
box-shadow:0 1px 3px -2px #000;
flex-direction:row;
`
const NavLogo=styled.div`
display:flex;
align-items:center;
gap:7px;
p{
  color:#171717;
  font-size:28px;
  font-weight:600;  
}
`
const NavList=styled.div`
ul{
display:flex;
align-items:center;
justify-content:center;
list-style:none;
gap:50px;
color:#626262;
font-size:18px;
font-weight:500;
}
li{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:3px;
    cursor:pointer;
}
hr {
    border:none;
    width:90%;
    height:3px;
    border-radius:10px;
    background:#FF4141;
    margin:0;
 }

`
const NavMenu=styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:35px;
button{
    width:110px;
    height:35px;
    outline:none;
    border:1px solid #7a7a7a;
    border-radius:75px;
    color:#515151;
    font-size:16px;
    font-weight:500;
    background:#fff;
    cursor: pointer;
&:hover{
border:2px solid #7a7a7a;

}
}

`
const CartCount=styled.div`
width:18px;
height:18px;
display:flex;
justify-content:center;
align-items:center;
margin-top:-30px;
margin-left:-50px;
border-radius:11px;
font-size:12px;
background:red;
color:#fff;
`
export {
   HeaderMain,
   NavLogo,
   NavMenu,
   NavList,
   CartCount
}