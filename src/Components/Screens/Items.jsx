import React, { useCallback } from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "react-simple-star-rating";

function Items({ item, setItem }) {
    const [isCategory, setCategory] = useState("");
    const [isAll, setAll] = useState([]);
    const [others, setOthers] = useState([]);

    useEffect(() => {
        const axios = require("axios");
        axios
            .get("https://fakestoreapi.com/products/")
            .then(function (response) {
                setAll(response.data);
                setOthers(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    //Navigate Defined
    let navigate = useNavigate();
    //Notify On Cart Success
    const notify = () =>
        toast.success("Added to Cart", {
            position: "bottom-center",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    //Filtering with dependency Category

    //Filtering Function for Category
    function filtering() {
        if (isCategory == "") {
            setAll(others);
        } else {
            const final = isAll.filter((fil) => fil.category == isCategory);
            setAll(final);
        }
    }
    useEffect(() => {
        filtering();
    }, [isCategory]);

    //Buy Function with one Already exist warn
    function buy(bought) {
        let already = item.filter((im) => bought.id === im.id);
        if (already.length < 1) {
            notify();
            setItem((prev) => [...prev, bought]);
        }
    }
    // useCallback to optimize cart performance
    const optimize = useCallback(
        (bought) => {
            buy(bought);
        },
        [item]
    );
    // Routing to the Description Page
    const Pagepush = (produce) => {
        navigate(`${produce.id}`);
    };
    let listProducts = () => {
        return isAll.map((produc) => (
            <>
                <Child key={produc.id}>
                    <ImageContainer onClick={() => Pagepush(produc)}>
                        <ProductImg src={produc.image} alt={produc.title} />
                    </ImageContainer>
                    <Empdiv>
                        <HeadProduct onClick={() => Pagepush(produc)}>
                            {produc.title}
                        </HeadProduct>
                        <Rating
                            initialValue={produc.rating.rate}
                            allowHover={false}
                            readonly={true}
                            size={22}
                        />
                        <PriceProduct
                            style={{
                                color: "red",
                                textDecoration: "line-through",
                            }}
                        >
                            $ {(produc.price - produc.price / 10).toFixed(2)}
                        </PriceProduct>
                        <PriceProduct>${produc.price}</PriceProduct>
                        <MainCartContainer>
                            {/* <Buttoncart onClick={() => optimize(produc)}>
                                <AiOutlineShoppingCart />
                            </Buttoncart> */}
                            {/* <Links to={`/${produc.id}`}>
                                <GrView />
                            </Links> */}
                        </MainCartContainer>
                        <ToastContainer
                            toastStyle={{
                                position: "absolute",
                                bottom: "90px",
                                left: "40px",
                                width: "80%",
                            }}
                            autoClose={300}
                        />
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
                                setAll(others);
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
                                setAll(others);
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
                                setAll(others);
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
                                setAll(others);
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
                    <ParentList>{listProducts()}</ParentList>
                </Wrapperlist>
            </MainContainer>
        </>
    );
}
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
const PriceProduct = styled.p``;
const Buttoncart = styled.a`
    border-radius: 2px;
    padding: 4px;
    cursor: pointer;
    :hover {
        color: black;
    }
`;
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
