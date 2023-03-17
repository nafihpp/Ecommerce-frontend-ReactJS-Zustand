import React, { useCallback } from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "swiper/css";
import "swiper/css/navigation";
import clothing from "../../assets/clothing.png";
import jewellery from "../../assets/jewellery.webp";
import mobile from "../../assets/mobile.png";
import electronics from "../../assets/electronics.webp";
import grocery from "../../assets/grocery.webp";
import animationData from "../../loader/9582-liquid-4-dot-loader.json";
import Lottie from "react-lottie";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";

function CategoryBar() {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    SwiperCore.use([Autoplay]);

    const navigate = useNavigate();
    let listProducts = () => {
        return (
            <>
                {/* {category.map((cat) => ( */}
                <>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                        }}
                    >
                        <SwiperSlide
                            onClick={(e) => {
                                navigate(`category/jewelery`);
                            }}
                        >
                            <ImageContainer>
                                <ProductImg src={jewellery} alt="cat" />
                            </ImageContainer>
                            <p
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                }}
                            >
                                Jewellery
                            </p>
                            {/* </Child> */}
                        </SwiperSlide>
                        <SwiperSlide
                            onClick={(e) => {
                                navigate(`category/jewelery`);
                            }}
                        >
                            {/* <Child
                                onClick={(e) => {
                                    navigate(`category/jewellery`);
                                }}
                            > */}
                            <ImageContainer>
                                <ProductImg src={mobile} alt="cat" />
                            </ImageContainer>
                            <p
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                }}
                            >
                                Mobile
                            </p>
                            {/* </Child> */}
                        </SwiperSlide>
                        <SwiperSlide
                            onClick={(e) => {
                                navigate(`category/jewelery`);
                            }}
                        >
                            {/* <Child
                                onClick={(e) => {
                                    navigate(`category/jewellery`);
                                }}
                            > */}
                            <ImageContainer>
                                <ProductImg src={electronics} alt="cat" />
                            </ImageContainer>
                            <p
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                }}
                            >
                                Electronics
                            </p>
                            {/* </Child> */}
                        </SwiperSlide>
                        <SwiperSlide
                            onClick={(e) => {
                                navigate(`category/clothing`);
                            }}
                        >
                            {/* <Child
                                onClick={(e) => {
                                    navigate(`category/clothing`);
                                }}
                            > */}
                            <ImageContainer>
                                <ProductImg src={clothing} alt="cat" />
                            </ImageContainer>
                            <p
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                }}
                            >
                                Clothing
                            </p>
                            {/* </Child> */}
                        </SwiperSlide>
                        <SwiperSlide
                            onClick={(e) => {
                                navigate(`category/clothing`);
                            }}
                        >
                            {/* <Child
                                onClick={(e) => {
                                    navigate(`category/clothing`);
                                }}
                            > */}
                            <ImageContainer>
                                <ProductImg src={grocery} alt="cat" />
                            </ImageContainer>
                            <p
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                }}
                            >
                                Grocery
                            </p>
                            {/* </Child> */}
                        </SwiperSlide>
                    </Swiper>
                </>
                {/* ))} */}
            </>
        );
    };
    return (
        <>
            {
                <MainContainer>
                    <Wrapperlist>
                        <ParentList>{listProducts()}</ParentList>
                    </Wrapperlist>
                </MainContainer>
            }
        </>
    );
}

const Wrapperlist = styled.div`
    width: 92%;
    margin: 0 auto;
`;
const MainContainer = styled.section`
    background: #fff;
    padding: 10px 0;
`;
const ParentList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    list-style: none;
    overflow-x: scroll;
`;
const Child = styled.li`
    border-radius: 50%;
    width: 9%;
    padding: 8px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (max-width: 768px) {
        width: 35%;
        height: 110px;
        padding: 0px !important;
    }
`;
const ImageContainer = styled.div`
    width: 100px;
    max-width: 68%;
    overflow: hidden;
    cursor: pointer;
`;
const ProductImg = styled.img`
    display: block;
    width: 100%;
`;
export default CategoryBar;
