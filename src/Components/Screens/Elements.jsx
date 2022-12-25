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
import { GrView } from "react-icons/gr";

function Elements({ item, setItem }) {
    const { id } = useParams();
    const [page, setPage] = useState([]);
    const [count, setCount] = useState(1);
    let navigate = useNavigate();

    function buy(bought) {
        let already = item.filter((im) => bought.id === im.id);
        if (already.length < 1) {
            notify();
            setItem((prev) => [...prev, bought]);
        }
    }
    const notify = () =>
        toast.success("Added to Cart", {
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
    console.log(page);
    return (
        <>
            <Helmet>
                <title>{`${page.id} | Shopping`}</title>
            </Helmet>
            <MainContainer>
                <Wrapper>
                    <BackButton onClick={back}>
                        <IoArrowBackOutline />
                    </BackButton>
                    <LeftContainer>
                        <ImageContainer>
                            <img
                                src={page.image}
                                style={{ display: "block", width: "100%" }}
                            />
                        </ImageContainer>
                        <Buttoncart onClick={() => console.log("hi")}>
                            <AiOutlineShoppingCart />
                        </Buttoncart>{" "}
                        <Links to={`/h`}>
                            <GrView />
                        </Links>
                    </LeftContainer>

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
const ImageContainer = styled.div`
    width: 50%;
`;
const LeftContainer = styled.div`
    width: 50%;
    margin-top: 30px;
`;
const Buttoncart = styled.a`
    :hover {
    }
`;
const Links = styled(Link)`
    :hover {
    }
`;
const MainContainer = styled.div`
    position: relative;
`;
const BackButton = styled.div`
    cursor: pointer;
    font-size: 34px;
    position: absolute;
    top: -5%;
    left: 3%;
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
