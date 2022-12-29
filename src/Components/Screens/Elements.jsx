import React from "react";
import { Navigate, useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillThunderbolt } from "react-icons/ai";
import Header from "../Includes/Header";
import { Rating } from "react-simple-star-rating";
import { useCart } from "../../store/Cart/Cart";

function Elements() {
    const { id } = useParams();
    const [page, setPage] = useState([]);
    const [count, setCount] = useState(1);

    const addtoCart = useCart((state) => state.addToCart);
    const CartItems = useCart((state) => state.cart);

    let navigate = useNavigate();

    useEffect(() => {
        console.log(CartItems, "cart is showing");
    }, [CartItems.length]);

    // function buy(bought) {
    //     let already = item.filter((im) => bought.id === im.id);
    //     if (already.length < 1) {
    //         notify();
    //         setItem((prev) => [...prev, bought]);
    //     }
    // }
    const notify = () =>
        toast.success(`${count} Items Added to Cart`, {
            position: "bottom-center",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

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

    function buy(page) {
        let updatedPage = {
            id: page.id,
            title: page.title,
            quantity: count,
            image: page.image,
            price: page.price,
        };
        addtoCart(updatedPage);
    }

    return (
        <>
            <Helmet>
                <title>{`${page.title} | Shopping`}</title>
            </Helmet>

            <MainContainer>
                <Wrapper>
                    <BackButton onClick={back}>
                        <IoArrowBackOutline />
                    </BackButton>
                    <Container>
                        <ImageContainer>
                            <img
                                src={page.image}
                                style={{ display: "block", width: "100%" }}
                            />
                        </ImageContainer>
                        <LeftContainer>
                            <h2>{page.title}</h2>
                            <p>{page.description}</p>
                            {page?.rating?.rate !== undefined ? (
                                <Rating
                                    initialValue={page.rating.rate}
                                    allowHover={false}
                                    readonly={true}
                                    size={22}
                                    style={{ marginTop: "20px" }}
                                />
                            ) : (
                                <h1>Loading</h1>
                            )}
                            {page !== undefined ? (
                                <PriceContainer>
                                    <PriceDiscountProduct
                                        style={{
                                            color: "red",
                                            textDecoration: "line-through",
                                        }}
                                    >
                                        ${" "}
                                        {(
                                            page?.price -
                                            page?.price / 10
                                        ).toFixed(2)}
                                    </PriceDiscountProduct>
                                    <PriceProduct>${page?.price}</PriceProduct>
                                </PriceContainer>
                            ) : (
                                <h1>Loading</h1>
                            )}

                            <Quantity>
                                <div
                                    style={{
                                        fontSize: "30px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        decrement();
                                    }}
                                >
                                    -
                                </div>
                                <div>{count}</div>
                                <div
                                    style={{
                                        fontSize: "30px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        increment();
                                    }}
                                >
                                    +
                                </div>
                            </Quantity>
                        </LeftContainer>
                    </Container>
                    {page.length !== 0 ? (
                        <BottomContainer>
                            <Buttoncart
                                onClick={(e) => {
                                    buy(page);
                                    notify();
                                }}
                            >
                                Add to Cart <AiOutlineShoppingCart />
                            </Buttoncart>
                            <Links to="/login">
                                Buy Now
                                <AiFillThunderbolt />
                            </Links>{" "}
                        </BottomContainer>
                    ) : null}

                    <ToastContainer
                        toastStyle={{
                            position: "absolute",
                            bottom: "90px",
                            left: "40px",
                            width: "80%",
                        }}
                        autoClose={300}
                    />
                </Wrapper>
            </MainContainer>
        </>
    );
}
const Quantity = styled.div`
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(247, 248, 253);
    height: 55px;
    width: 160px;
    border-radius: 10px;
    user-select: none;
    margin-right: 20px;
`;
const PriceDiscountProduct = styled.p`
    font-size: 12px;
    margin-right: 10px;
`;
const PriceProduct = styled.p``;
const PriceContainer = styled.div`
    display: flex;
    margin-top: 30px;
`;
const Container = styled.div`
    width: 100%;
    padding-top: 7px;
`;
const BottomContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
`;
const ImageContainer = styled.div`
    width: 20%;
    margin: 0 auto;
    @media all and (max-width: 768px) {
        width: 60%;
        margin: 0 auto;
    }
`;
const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Buttoncart = styled.button`
    padding: 8px 7px;
    background: burlywood;
    color: #fff;
    border: none;
    margin-right: 6px;
    :hover {
    }
`;
const Links = styled(Link)`
    padding: 8px 7px;
    background: burlywood;
    color: #fff;
    border: none;
    text-decoration: none;
    :hover {
    }
`;
const MainContainer = styled.div`
    position: relative;
`;
const BackButton = styled.div`
    cursor: pointer;
    font-size: 34px;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

export default Elements;

{
    /* <MainDiv>
<ImageContainer>
    <img src={page.image} alt="" className="image" />
</ImageContainer>
<div class="right">
    <Headline>{page.title}</Headline>
    <Paragra
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
        <Par>{page.category}</Par>
    </Paragra>

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
</MainDiv> */
}
