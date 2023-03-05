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
import animationData from "../../loader/22380-e-commerce.json";
import Lottie from "react-lottie";

function Elements() {
    const { id } = useParams();
    const [page, setPage] = useState([]);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(true);

    const addtoCart = useCart((state) => state.addToCart);
    const CartItems = useCart((state) => state.cart);

    //let navigate = useNavigate();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

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
                setLoading(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [id]);

    useEffect(() => {
        const already = CartItems.find((mapcart) => mapcart.id === page.id);
        console.log(already, "cart is showing");
    }, [CartItems.length]);

    function increment() {
        setCount((prev) => prev + 1);
    }
    function decrement() {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    }
    function back() {
        //navigate("/");
        window.history.back();
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

    if (loading) {
        return (
            <>
                <div
                    style={{
                        background: "#000",
                        width: "100%",
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Lottie options={defaultOptions} height={300} width={300} />
                </div>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>{`${page.title} | Shopping`}</title>
            </Helmet>
            {/* <HeaderWithoutLocation /> */}
            <MainContainer>
                <Wrapper>
                    <BackButton onClick={back}>
                        <IoArrowBackOutline />
                    </BackButton>
                    {/* <div>
                        {" "}
                        <ReactImageZoom
                            zoomImage={page.image}
                            img={page.image}
                            zoomPosition="original"
                        />
                    </div> */}
                    <Container>
                        <ImageContainer>
                            {" "}
                            <img
                                src={page.image}
                                style={{ display: "block", width: "100%" }}
                            />
                        </ImageContainer>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            {" "}
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
                        </div>

                        <LeftContainer>
                            <h2>{page.title}</h2>
                            {page?.rating?.rate !== undefined ? (
                                <Rating
                                    initialValue={page.rating.rate}
                                    allowHover={false}
                                    readonly={true}
                                    size={22}
                                    style={{ marginTop: "20px" }}
                                />
                            ) : null}
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
                            ) : null}
                            <ProductDescription>
                                {page.description}
                            </ProductDescription>
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
const ProductDescription = styled.p`
    @media all and (max-width: 768px) {
        margin-bottom: 50px;
    }
`;
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
    margin-top: 30px;
    display: flex;
    justify-content: center;
    @media all and (max-width: 768px) {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        background-color: white;
    }
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
    margin-right: 2px;
    cursor: pointer;
    :hover {
    }
    @media all and (max-width: 768px) {
        width: 50%;
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
    @media all and (max-width: 768px) {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
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
