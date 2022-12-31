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
import axios from "axios";

function CategoryBar() {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products/categories")
            .then((response) => {
                setCategory(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(category);

    const navigate = useNavigate();
    let listProducts = () => {
        return (
            <>
                {category.map((cat) => (
                    <>
                        <Child
                            onClick={(e) => {
                                navigate(`category/${cat}`);
                            }}
                        >
                            <ImageContainer>
                                <ProductImg src={apricot} alt="cat" />
                            </ImageContainer>
                            <p
                                style={{
                                    textAlign: "center",
                                    fontSize: "12px",
                                }}
                            >
                                {cat}
                            </p>
                        </Child>
                    </>
                ))}
            </>
        );
    };
    return (
        <>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <MainContainer>
                    <Wrapperlist>
                        <h1 style={{ textAlign: "center" }}>Categories</h1>
                        <ParentList>{listProducts()}</ParentList>
                    </Wrapperlist>
                </MainContainer>
            )}
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
    border: 3px solid #000;
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
