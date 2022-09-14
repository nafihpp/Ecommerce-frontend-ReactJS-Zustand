import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Elements({ item, setItem }) {
    const { id } = useParams();
    const [page, setPage] = useState([]);
    const [count, setCount] = useState(0);
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
        setCount((prev) => prev - 1);
    }

    return (
        <>
            <Helmet>
                <title>{`${page.id} | Shopping`}</title>
            </Helmet>
            <MainContainer>
                <Wrapper>
                    <MainDiv>
                        <ImageContainer>
                            <img src={page.image} alt="" className="image" />
                        </ImageContainer>
                        <div class="right">
                            <h1>{page.title}</h1>
                            <p
                                style={{
                                    border: "1px solid black",
                                    width: "40%",
                                    fontSize: "13px",
                                    minHeight: "30px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "8px",
                                }}
                            >
                                {page.category}
                            </p>
                            {page.description}
                            <div class="prices">
                                <h1 class="new">${page.price}</h1>
                                <span>10%</span>
                            </div>
                            <div class="cart-items">
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
                                <div class="right">
                                    <a href="#">
                                        {" "}
                                        <AiOutlineShoppingCart /> Add to cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    </MainDiv>
                </Wrapper>
            </MainContainer>
        </>
    );
}
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
    overflow-x: hidden;
`;
const ImageContainer = styled.div`
    width: 28%;
    @media all and (max-width: 640px) {
        width: 70%;
        padding: 0 55px 55px;
    }
    @media all and (max-width: 480px) {
        width: 90%;
    }
    @media all and (max-width: 320px) {
        width: 100%;
    }
`;
export default Elements;
