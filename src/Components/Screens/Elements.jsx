import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";

function Elements({ item, setItem }) {
    const { id } = useParams();
    const [page, setPage] = useState([]);
    const [count, setCount] = useState(1);
    let navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then(function (response) {
                // handle success
                setPage(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [id]);

    function increment() {
        setCount((prev) => prev + 1);
    }
    function decrement() {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    }
    function back() {
        navigate("/");
    }
    return (
        <>
            <Helmet>
                <title>{`${page.id} | Shopping`}</title>
            </Helmet>
            <MainContainer>
                <BackButton onClick={back}>
                    <IoArrowBackOutline />
                </BackButton>
                <Wrapper>
                    <MainDiv>
                        <ImageContainer>
                            <img src={page.image} alt="" className="image" />
                        </ImageContainer>
                        <div class="right">
                            <Headline>{page.title}</Headline>
                            <p
                                style={{
                                    border: "2px solid black",
                                    width: "100%",
                                    fontSize: "13px",
                                    minHeight: "30px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                    marginTop: "10px",
                                }}
                            >
                                {page.category}
                            </p>

                            <div class="prices">
                                <h1 class="new">${page.price}</h1>
                                <span>10%</span>
                            </div>
                            <div class="cart-items">
                                <Quantity>Quantity</Quantity>
                                <div class="left">
                                    <div
                                        href=""
                                        class="operator"
                                        style={{ textDecoration: "none" }}
                                        onClick={() => decrement()}
                                    >
                                        -
                                    </div>
                                    <h5>{count}</h5>
                                    <div
                                        href=""
                                        class="operator"
                                        style={{ textDecoration: "none" }}
                                        onClick={() => increment()}
                                    >
                                        +
                                    </div>
                                </div>
                            </div>
                            <DivCart>
                                <a
                                    style={{
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    href="#"
                                >
                                    {" "}
                                    <AiOutlineShoppingCart /> Add to cart
                                </a>
                            </DivCart>
                        </div>
                    </MainDiv>
                </Wrapper>
            </MainContainer>
        </>
    );
}
const Quantity = styled.p`
    margin-bottom: 0px !important;
`;
const DivCart = styled.div`
    margin-top: 10px;
    background-color: #f86338;
    padding: 10px;
    border-radius: 8px;
    width: 35%;
    @media all and (max-width: 480px) {
        width: 100%;
    }
`;
const Headline = styled.h1`
    @media all and (max-width: 480px) {
        font-size: 20px;
        width: 241%;
    }
`;
const BackButton = styled.div`
    border: 1px solid #000;
    padding: 5px;
    cursor: pointer;
    width: 12%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 20px;
`;
const MainDiv = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 75%;
    margin: 0 auto;
`;
const MainContainer = styled.div`
    height: 100vh;
`;
const ImageContainer = styled.div`
    width: 28%;
    @media all and (max-width: 640px) {
        width: 70%;
    }
    @media all and (max-width: 480px) {
        width: 80%;
    }
    @media all and (max-width: 320px) {
    }
`;
export default Elements;
