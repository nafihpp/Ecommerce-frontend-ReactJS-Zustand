import React from 'react';
import Helmet from "react-helmet";
import styled from "styled-components";

function Cart({item, setItem}) {
  let cartitems = () => {
    return item.map((cartss) => (
      <>
       <CartItems key={cartss.id}>
          <ImageBox>
            <Image src={cartss.image} />
          </ImageBox>
          <AboutDiv>
            <Title>{cartss.title}</Title>
            <SubTitle>{cartss.category}</SubTitle>
          </AboutDiv>
          <PricesDiv>
            <DivAmount>${cartss.price}</DivAmount>
            <DivRemove>
              <u>Remove</u>
            </DivRemove>
          </PricesDiv>
        </CartItems> 
      </>
    ));
  };
  return (
    <Mainof>
      <HeadDivision>
        <MainHead>
          <Helmet>
            <title>My Cart</title>
          </Helmet>
          <Heading>Shopping Cart</Heading>
          <Removeall>Remove all</Removeall>
        </MainHead>
        {cartitems()}
        <HorizontalLine />
        <h1>Total:
        </h1>
      </HeadDivision>
    </Mainof>
  );
}
const DivAmount = styled.div`
  font-size: 26px;
  font-family: "Open Sans";
  font-weight: 800;
  color: #202020;
`;
const DivRemove = styled.div`
  padding-top: 5px;
  font-size: 14px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #e44c4c;
  cursor: pointer;
`;
const PricesDiv = styled.div`
  height: 100%;
  text-align: right;
`;
const SubTitle = styled.h3`
  font-size: 18px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #909090;
`;
const Title = styled.h1`
  padding-top: 10px;
  font-size: 14px;
  font-family: "Open Sans";
  font-weight: 800;
  color: #202020;
`;
const AboutDiv = styled.div`
  height: 100%;
  width: 24%;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  height: 120px;
`;
const ImageBox = styled.div`
  width: 15%;
  text-align: center;
`;
const CartItems = styled.div`
  margin: 40px auto;
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Removeall = styled.h5``;
const Heading = styled.h3`
  font-size: 20px;
  font-family: "Open Sans";
  font-weight: 700;
  color: #2f3841;
`;
const HorizontalLine = styled.hr`
  width: 66%;
  float: right;
  margin-right: 5%;
`;
const MainHead = styled.div`
  margin: auto;
  width: 91%;
  height: 41%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
`;
const Mainof = styled.section`
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom right, #e3f0ff, #fafcff);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;
const HeadDivision = styled.div`
  width: 70%;
  height: 90%;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px #1687d933;
  @media all and (max-width: 768px) {
    width: 95%;
  }
`;

export default Cart;
