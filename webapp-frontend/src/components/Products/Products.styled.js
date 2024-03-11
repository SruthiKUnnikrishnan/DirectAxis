import styled from "styled-components";
const ProductMain=styled.div`
margin:30px;
margin-inline:120px;

`;
const ProductDisplay=styled.div`
display:flex;
flex-direction:row;
box-shadow: 1px 3px 15px 1px #D3D3D3;

gap:70px;
`;
const ProductDisplayLeft=styled.div`

`;
const ProductDisplayRight=styled.div`
button{
    padding:15px;
    background:#008000;
    border:none;
    color:#fff;
    font-weight:600;
    font-size:18px;
}
`;
const ProductDisplayImg=styled.div`
img{
    width:400px;
    height:400px;
}

`;
const ProductReview=styled.div`
margin-bottom:20px;
`;
const Description=styled.div`
padding-right:30px;
font-size:13px;
`;
const ProductPrice=styled.div`
font-size:22px;
`;
export{
    ProductMain,
    ProductDisplay,
    ProductDisplayLeft,
    ProductDisplayRight,
    ProductDisplayImg,
    ProductReview,
    ProductPrice,
    Description
    
}