import styled from "styled-components";
const Item=styled.div`
width:275px;
box-shadow: 1px 3px 15px 1px #D3D3D3;
cursor:pointer;
div{
   padding:0px 0px 0px 15px; 
}

p{
    margin:6px 0px;
    color:#374151;
    font-size:15px;
}
img{
    width:275px;
    height:275px;
}
span{
    font-size:14px;
    align-items:center;
    display:flex;
    font-weight:600
}
&:hover{
    transform:scale(1.05);
    transition:0.6s;

}
`
const Div= styled.div`
display:flex;
flex-direction:row;
width:100%;
align-items:center;
div{
    width:75%;
    padding:0px 0px 0px 0px;
}
`
export{
    Item,
    Div
}