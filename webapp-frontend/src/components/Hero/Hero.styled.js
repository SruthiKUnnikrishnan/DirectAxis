import styled from "styled-components";
import Hero2 from "../../assets/hero4.jpg"

const Main=styled.div`
padding-inline:120px;

`
const HeroImg=styled.div`
background-image: url(${Hero2});
  display: flex;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  margin-bottom:50px;
`
const HeroLeft=styled.div`
display:flex;
flex-direction:column;
color:#808080;
align-items:center;
justify-content:center;
text-align:center;
h2{
    font-size:40px;
}
p{
    font-size:28px;
}
i{
    color:#DAA520;
}
`
const HeroRight=styled.div`
`
export{
    Main,
    HeroLeft,
    HeroRight,
    HeroImg
}