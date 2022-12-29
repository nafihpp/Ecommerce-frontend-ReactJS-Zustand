import React, { useCallback } from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "swiper/css";
import "swiper/css/navigation";
import { useStore } from "../../store/Products/Products";

function Items() {
    const [isCategory, setCategory] = useState("");
    const [filtered, setFiltered] = useState([]);
    let navigate = useNavigate();

    const fetch = useStore((state) => state.fetchProducts);
    const items = useStore((state) => state.Allproducts);

    function filtering() {
        if (isCategory == "") {
            setFiltered(items);
        } else {
            const final = items?.filter((fil) => fil.category == isCategory);
            setFiltered(final);
        }
    }

    useEffect(() => {
        filtering();
    }, [isCategory]);

    // useCallback to optimize cart performance
    // const optimize = useCallback(
    //     (bought) => {
    //         buy(bought);
    //     },
    //     [item]
    // );
    // Routing to the Description Page
    const Pagepush = (produce) => {
        navigate(`${produce.id}`);
    };

    let listProducts = () => {
        return filtered?.map((produc) => (
            <>
                <Child key={produc.id} onClick={() => Pagepush(produc)}>
                    <ImageContainer>
                        <ProductImg src={produc.image} alt={produc.title} />
                    </ImageContainer>
                    <Empdiv>
                        <HeadProduct>{produc.title}</HeadProduct>
                        <Rating
                            initialValue={produc.rating.rate}
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
                                {(produc.price - produc.price / 10).toFixed(2)}
                            </PriceDiscountProduct>
                            <PriceProduct>${produc.price}</PriceProduct>
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
                </Child>
            </>
        ));
    };
    return (
        <>
            <MainContainer>
                <Wrapperlist>
                    <HeadingMain>Our Premium Collection</HeadingMain>
                    <MainCont>
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
                        <MainSpan
                            className="reset"
                            onClick={() => setCategory("")}
                        >
                            Reset
                        </MainSpan>
                    </MainCont>
                    {items.length !== 0 ? (
                        <ParentList>{listProducts()}</ParentList>
                    ) : (
                        <h1>Loading</h1>
                    )}
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
const ParentList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-top: 23px;
    margin-top: -1px;
    overflow-x: scroll;
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
    @media (max-width: 768px) {
        width: 46%;
        flex-wrap: wrap;
    }
`;
const ImageContainer = styled.div`
    width: 80%;
    max-width: 68%;
    overflow: hidden;
    cursor: pointer;
`;
const ProductImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 15px;
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
