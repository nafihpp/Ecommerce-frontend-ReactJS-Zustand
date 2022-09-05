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
        console.log(now);
    }
    return (
        <>
            <Helmet>
                <title>{`${page.id} | Shopping`}</title>
            </Helmet>
            <MainContainer>
                <Wrapper>
                    <ImageContainer>
                        <img src={page.image} alt="" />
                    </ImageContainer>
                    <ul class="bottom">
                        <li>
                            <div class="thumbnail">
                                <img
                                    src="static/images/image-product-1-thumbnail.jpg"
                                    alt="thumbnail"
                                />
                            </div>
                            <div class="filter"></div>
                        </li>
                    </ul>
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
                                <a href="" class="operator">
                                    -
                                </a>
                                <h5>0</h5>
                                <a href="" class="operator">
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
                </Wrapper>
            </MainContainer>
        </>
    );
}
const MainContainer = styled.div``;
const ImageContainer = styled.div``;
export default Elements;
