import styled from "styled-components";
const ProductCat=styled.div`
margin-top:30px

`;
const IndexSort=styled.div`
display:flex;
margin:0px 170px;
justify-content:space-between;
align-items:center;

input{
    width:400px;
   padding:8px;
border-radius:6px;
border:1px solid #E6E6FA;
align-items:center;
display:flex;



}

`;

const SortBtn=styled.div`
padding:5px 10px;
border-radius:10px;
border:1px solid #E6E6FA;
align-items:center;
display:flex;
font-weight:600;
`;
const Dropdown=styled.div`
display: none;
position: absolute;
background-color: #fff;

box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
padding:15px;
width:140px;
cursor:pointer;

`
const Sort=styled.div`
position: relative;
  display: inline-block;
  

  &:hover ${Dropdown} {
    display: block;
  }
`;
const Products=styled.div`
margin:20px 170px;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
row-gap:50px;
`;
const LoadMore=styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:70px auto;
width:150px;
height:50px;
border-radius:75px;
background:#ededed;
color:#787878;
font-size:16px;
font-weight:500;
cursor:pointer;
`;

export {
    ProductCat,
    IndexSort,
    Sort,
    Products,
    LoadMore,
    SortBtn,
    Dropdown
} 