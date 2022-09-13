import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

function Elements({ item, setItem }) {
    const { id } = useParams();
    const [page, setPage] = useState([]);
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

    function buyed(boughted) {
        const now = [...item, boughted];
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
                            <p class="company">{page.title}</p>
                            <h1>{page.category}</h1>
                            <p>{page.description}</p>
                            <div class="prices">
                                <h1 class="new">$125.00</h1>
                                <span>50%</span>
                                <h3 class="old">$250.00</h3>
                            </div>
                            <div class="cart-items">
                                <div class="left">
                                    <a
                                        href=""
                                        class="operator"
                                        style={{ textDecoration: "none" }}
                                    >
                                        -
                                    </a>
                                    <h5>0</h5>
                                    <a
                                        href=""
                                        class="operator"
                                        style={{ textDecoration: "none" }}
                                    >
                                        +
                                    </a>
                                </div>
                                <div class="right" onClick={() => buyed(page)}>
                                    <a href="#">
                                        <div class="cartimage"></div>
                                        <h4 class="white">Add to cart</h4>
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
