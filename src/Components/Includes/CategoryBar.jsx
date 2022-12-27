import React, { useCallback } from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "swiper/css";
import "swiper/css/navigation";
import banana from "../../assets/banana.jpg";
import apricot from "../../assets/apricot.jpg";
import apple from "../../assets/apple.jpg";

function Items({ item, setItem }) {
    let listProducts = () => {
        return (
            <>
                <Child>
                    <ImageContainer>
                        <ProductImg src={apricot} alt="cat" />
                    </ImageContainer>
                </Child>
                <Child>
                    <ImageContainer>
                        <ProductImg src={banana} alt="cat" />
                    </ImageContainer>
                </Child>
                <Child>
                    <ImageContainer>
                        <ProductImg src={apple} alt="cat" />
                    </ImageContainer>
                </Child>
                <Child>
                    <ImageContainer>
                        <ProductImg src={apple} alt="cat" />
                    </ImageContainer>
                </Child>
                <Child>
                    <ImageContainer>
                        <ProductImg src={apple} alt="cat" />
                    </ImageContainer>
                </Child>
                <Child>
                    <ImageContainer>
                        <ProductImg src={apple} alt="cat" />
                    </ImageContainer>
                </Child>
            </>
        );
    };
    return (
        <>
            <MainContainer>
                <Wrapperlist>
                    <h1 style={{ textAlign: "center" }}>Categories</h1>
                    <ParentList>{listProducts()}</ParentList>
                </Wrapperlist>
            </MainContainer>
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
    overflow-x: scroll;
`;
const Child = styled.li`
    border: 1px solid #000;
    border-radius: 50%;
    width: 8%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 6px;
    align-items: center;
    @media (max-width: 768px) {
        width: 46%;
        flex-wrap: wrap;
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
export default Items;
