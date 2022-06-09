// import React from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Helmet from "react-helmet";
// import styled from "styled-components";

// function Elements({item,setItem}) {
//   const { id } = useParams();
//   const [page, setPage] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products/${id}`)
//       .then(function (response) {
//         // handle success
//         setPage(response.data);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       });
//   }, []);

//   return (
//     <Wrapper>
//       <Helmet>
//         <title>{`${page.id} | Shopping`}</title>
//       </Helmet>
//       <MainHeading>{page.title}</MainHeading>
//       <LocationContainer>
//         <Category>{page.category}</Category>
//         <LocationDetails>
//           <PlaceName>{page.title}</PlaceName>
//         </LocationDetails>
//       </LocationContainer>
//       <AllPlacesImageContainer>
//         <LeftContainer>
//           <Image className="main-image" src={page.image} alt="Place" />
//         </LeftContainer>
//       </AllPlacesImageContainer>
//       <PlaceHeading>Proudct Details</PlaceHeading>
//       <BuyNow>Buy Now</BuyNow>
//       <PlaceDetailsContainer>
//         <PlaceDetails>{page.description}</PlaceDetails>
//       </PlaceDetailsContainer>
//     </Wrapper>
//   );
// }
// const Wrapper = styled.div`
//   width: 70%;
//   margin: 0 auto;
//   max-width: 1200px;
// `;
// const MainHeading = styled.h1`
//   font-size: 45px;
//   font-weight: bolder;
// `;
// const Category = styled.span`
//   padding: 4px 8px;
//   border: 1px solid #b1adad;
//   display: inline-block;
//   border-radius: 30px;
//   color: #b1adad;
// `;
// const LocationContainer = styled.div`
//   display: flex;
//   margin-top: 10px;
// `;
// const LocationDetails = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 12px;
// `;
// const PlaceName = styled.small`
//   margin-left: 5px;
//   font-weight: bolder;
//   color: #969292;
// `;
// const AllPlacesImageContainer = styled.div`
//   margin-top: 20px;
//   display: flex;
//   justify-content: center;
// `;
// const LeftContainer = styled.div`
//   width: 28%;
//   height: 313px;
//   border: 4px solid;
//   border-radius: 62px;
//   overflow: hidden;
// `;
// const Image = styled.img`
//   width: 100%;
//   display: block;
//   border-top-left-radius: 10px;
//   height: 100%;
// `;
// const PlaceDetailsContainer = styled.div`
//   margin-top: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: end;
// `;
// const PlaceHeading = styled.h3`
//   font-size: 24px;
//   margin-top: 56px;
// `;
// const PlaceDetails = styled.p`
//   margin-top: 15px;
// `;
// const BuyNow = styled.button``;
// export default Elements;
