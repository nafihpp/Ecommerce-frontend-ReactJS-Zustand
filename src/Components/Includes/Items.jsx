import React, { useCallback } from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "swiper/css";
import "swiper/css/navigation";
import { useStore } from "../../store/Products/Products";
import loaderData from "../../loader/132083-loading-tau.json";
import { Box } from "@material-ui/core";

function Items() {
    const [isCategory, setCategory] = useState("");
    const [filtered, setFiltered] = useState([]);
    let navigate = useNavigate();

    const items = useStore((state) => state.Allproducts);

    const loader = useStore((state) => state.loading);

    function filtering() {
        if (isCategory == "") {
            if (loader == false) {
                setFiltered(items);
            }
        } else {
            if (loader == false) {
                const final = items?.filter(
                    (fil) => fil?.category == isCategory
                );
                setFiltered(final);
            }
        }
    }

    useEffect(() => {
        if (items?.length !== 0) {
            filtering();
        }
    }, []);

    useEffect(() => {
        filtering();
    }, [isCategory]);

    const Pagepush = (produce) => {
        navigate(`/products/${produce.id}`);
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loaderData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    let listProducts = () => {
        return filtered?.map((produc) => (
            <>
                <StyledBox
                    key={produc.id}
                    onClick={() => Pagepush(produc)}
                    width={50}
                >
                    <ImageContainer>
                        <ProductImg src={produc?.image} alt={produc?.title} />
                    </ImageContainer>
                    <Empdiv>
                        <HeadProduct>{produc?.title}</HeadProduct>
                        <Rating
                            initialValue={produc?.rating?.rate}
                            allowHover={false}
                            readonly={true}
                            size={22}
                        />
                        <PriceContainer>
                            <PriceDiscountProduct
                                style={{
                                    color: "red",
                                    textDecoration: "line-through",
                                }}
                            >
                                ${" "}
                                {(produc?.price - produc?.price / 10).toFixed(
                                    2
                                )}
                            </PriceDiscountProduct>
                            <PriceProduct>${produc?.price}</PriceProduct>
                        </PriceContainer>

                        <MainCartContainer>
                            {/* <Buttoncart onClick={() => optimize(produc)}>
                                <AiOutlineShoppingCart />
                            </Buttoncart> */}
                            {/* <Links to={`/${produc.id}`}>
                                <GrView />
                            </Links> */}
                        </MainCartContainer>
                    </Empdiv>
                </StyledBox>
            </>
        ));
    };
    return (
        <>
            <MainContainer>
                <Wrapperlist>
                    <HeadingMain style={{ textAlign: "end" }}>
                        Trending Now
                        <hr style={{ borderTop: "3px solid red" }} />
                    </HeadingMain>
                    <MainCont>
                        <MainSpan
                            className={isCategory === "" ? "active" : "null"}
                            onClick={() => setCategory("")}
                        >
                            All
                        </MainSpan>
                        <MainSpan
                            className={
                                isCategory === "men's clothing"
                                    ? "active"
                                    : "null"
                            }
                            onClick={() => {
                                setCategory("men's clothing");
                            }}
                        >
                            Men's
                        </MainSpan>
                        <MainSpan
                            className={
                                isCategory === "jewelery" ? "active" : "null"
                            }
                            onClick={() => {
                                setCategory("jewelery");
                            }}
                        >
                            Jewellery
                        </MainSpan>
                        <MainSpan
                            className={
                                isCategory === "women's clothing"
                                    ? "active"
                                    : "null"
                            }
                            onClick={() => {
                                setCategory("women's clothing");
                            }}
                        >
                            Women's
                        </MainSpan>
                        <MainSpan
                            className={
                                isCategory === "electronics" ? "active" : "null"
                            }
                            onClick={() => {
                                setCategory("electronics");
                            }}
                        >
                            electronics
                        </MainSpan>
                    </MainCont>
                    <ParentList>{listProducts()}</ParentList>
                </Wrapperlist>
            </MainContainer>
        </>
    );
}
const PriceContainer = styled.div`
    display: flex;
`;
const HeadingMain = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    font-size: 30px;
    @media (max-width: 680px) {
        font-size: 23px;
    }
`;
const MainCont = styled.div`
    display: flex;
    justify-content: center;
`;
const MainSpan = styled.span`
    margin-right: 10px;
    padding: 5px;
    width: 25%;
    max-height: 70px;
    cursor: pointer;
    border-radius: 6px;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    &.reset {
        background-color: #f86338;
        border: none;
        color: #fff;
    }
    &.active {
        background-color: #000;
        color: #fff;
    }
    @media (max-width: 480px) {
        font-size: 10px;
    }
`;
const MainCartContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
`;
const Empdiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Wrapperlist = styled.div`
    width: 92%;
    margin: 0 auto;
`;
const MainContainer = styled.section`
    background: aliceblue;
    padding-top: 57px;
`;
const ParentList = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 23px;
    overflow-x: scroll;
    padding-bottom: 10px;
`;

const StyledBox = styled(Box)`
    display: flex;
    background: #fff;
    padding: 20px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 16.666%;
    border-radius: 10px;

    scroll-behavior: smooth;
    scrollbar-width: none; /* Hide scrollbar in Firefox */
    -ms-overflow-style: none; /* Hide scrollbar in Internet Explorer */

    /* Hide scrollbar in Chrome/Safari/Webkit */
    &::-webkit-scrollbar {
        display: none;
    }
    min-width: 167px !important;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        height: auto;
    }
`;
const Child = styled.li`
    width: 23%;
    margin-right: 20px;
    margin-bottom: 46px;
    border-radius: 4px;
    padding: 16px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const ImageContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;
const ProductImg = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: contain;
`;
const HeadProduct = styled.h4`
    height: 1.5rem;
    overflow: hidden;
    cursor: pointer;
`;
const PriceDiscountProduct = styled.p`
    font-size: 12px;
    margin-right: 10px;
`;
const PriceProduct = styled.p``;

const Links = styled(Link)`
    margin: 8px 0;
    text-decoration: none;
    display: flex;
    padding: 5px;
    border-radius: 4px;
    color: grey;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :hover {
        color: white;
    }
`;
export default Items;
