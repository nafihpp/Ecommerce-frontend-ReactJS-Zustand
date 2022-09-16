import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "../styles/Cart.module.css";

function LoginModal({
    item,
    setItem,
    modal,
    setModal,
    activeTabs,
    setActiveTabs,
}) {
    const location = useLocation();
    const [error, setError] = useState("");
    let sum = 0;
    item.map((mapped) => {
        sum += mapped.price;
    });
    let discounted = (sum / 100) * 10;
    let final = sum.toFixed(2) - discounted.toFixed(2);

    let formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(final);

    const remove = (carted) => {
        console.log(carted);
    };

    let cartitems = () => {
        return item.map((cartss) => (
            <>
                <CartItems key={cartss.id}>
                    <ImageBox>
                        <Image src={cartss.image} />
                    </ImageBox>
                    <PricesDiv>
                        <DivAmount>${cartss.price}</DivAmount>
                        <DivRemove onClick={remove(cartss)}>Remove</DivRemove>
                    </PricesDiv>
                </CartItems>
            </>
        ));
    };
    return (
        <Container>
            <JoinNow>
                <CloseIcon
                    onClick={() => {
                        setModal(!modal);
                        setActiveTabs("");
                    }}
                >
                    <AiOutlineCloseCircle />
                </CloseIcon>
                <ItemContainer>
                    <>
                        <Content>
                            <MiddleContainer>
                                <>{cartitems()}</>
                                {item.length > 0 ? (
                                    <div className={styles.right}>
                                        <div className={styles.wrapper}>
                                            <h2 className={styles.title}>
                                                CART TOTAL
                                            </h2>
                                            <div className={styles.totalText}>
                                                <b
                                                    className={
                                                        styles.totalTextTitle
                                                    }
                                                >
                                                    Subtotal:
                                                </b>
                                                ${sum.toFixed(2)}
                                            </div>
                                            <div className={styles.totalText}>
                                                <b
                                                    className={
                                                        styles.totalTextTitle
                                                    }
                                                >
                                                    Discount:
                                                </b>
                                                ${discounted.toFixed(2)}
                                            </div>
                                            <div className={styles.totalText}>
                                                <b
                                                    className={
                                                        styles.totalTextTitle
                                                    }
                                                >
                                                    Total: {formatted}
                                                </b>
                                            </div>
                                            <Links to="/login">
                                                CHECKOUT NOW!
                                            </Links>
                                        </div>
                                    </div>
                                ) : (
                                    <h1 style={{ textAlign: "center" }}>
                                        Cart is Empty
                                    </h1>
                                )}
                            </MiddleContainer>
                        </Content>
                    </>
                </ItemContainer>
            </JoinNow>
        </Container>
    );
}
export default LoginModal;
const Links = styled(Link)`
    height: 30px;
    color: #000;
    background-color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
    border: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const DivAmount = styled.div`
    font-size: 20px;
    font-family: "Open Sans";
    font-weight: 800;
    color: #202020;
`;
const DivRemove = styled.div`
    padding-top: 5px;
    font-size: 14px;
    font-family: "Open Sans";
    font-weight: 600;
    color: #e44c4c;
    cursor: pointer;
`;
const PricesDiv = styled.div`
    height: 100%;
`;
const Image = styled.img`
    display: block;
    width: 100%;
`;
const ImageBox = styled.div`
    width: 15%;
    text-align: center;
`;
const CartItems = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-top: 18px;
`;

const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 100000000000000000;
    background: rgba(0, 0, 0, 0.6);
`;
const CloseIcon = styled.span`
    font-size: 40px;
    color: #000;
    position: absolute;
    left: -43px;
    top: 4px;
    color: #fff;
    cursor: pointer;
    @media (max-width: 480px) {
        font-size: 30px;
        left: -38px;
    }
    @media (max-width: 380px) {
        font-size: 30px;
        left: -48px;
        z-index: 500;
    }
`;
const JoinNow = styled.div`
    z-index: 500;
    background: #fff;
    width: 600px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    animation: slide-box 0.4s ease;
    @keyframes slide-box {
        0% {
            right: -600px;
        }
        100% {
            right: 0;
        }
    }
    @media (max-width: 640px) {
        width: 428px;
    }
    @media (max-width: 480px) {
        width: 359px;
    }
    @media (max-width: 400px) {
        width: 300px;
    }
`;
const ItemContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
    @media (max-width: 980px) {
    }
    @media (max-width: 640px) {
        padding: 0 29px;
    }
    @media (max-width: 380px) {
        padding: 0 22px;
        background-position-y: -79px;
    }
`;
const Content = styled.div`
    @media (max-width: 640px) {
    }
`;

const InputContainer = styled.div`
    font-family: "gordita_medium";
    position: relative;
    border: 1px solid;
    border-radius: 7px;
    padding: 15px 18px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #000;
    font-size: 17px;
    margin-left: 10px;
    width: -webkit-fill-available;
    width: -moz-available;
    @media (max-width: 640px) {
        padding: 13px 13px;
    }
    @media (max-width: 480px) {
        padding: 8px 8px;
        border-color: #5f6367;
        font-size: 15px;
    }
    @media (max-width: 380px) {
        font-size: 14px;
        min-height: 40px;
    }
    &:focus-within {
        border-color: #5cc66a;
    }
`;
const Icon = styled.img`
    max-width: 17px;
    max-height: 17px;
    margin-right: 12px;
    display: block;
    @media (max-width: 480px) {
        display: none;
    }
`;
const InputField = styled.input`
    font-family: "gordita_medium";
    width: 81%;
    color: #000;
    font-size: 17px;
    padding-left: 5px;
    caret-color: #5cc66a;
    @media (max-width: 640px) {
        width: 70%;
        ::placeholder {
            font-size: 14px;
        }
    }
    @media (max-width: 480px) {
        width: 80%;
        font-size: 16px;
        ::placeholder {
            font-size: 12px;
        }
    }
    @media (max-width: 380px) {
        font-size: 14px;
    }
`;
const BottomRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 14px 0 70px;
    font-size: 14px;
    @media (max-width: 640px) {
        margin: 20px 0 10px 0;
    }
    @media (max-width: 480px) {
        font-size: 13px;
    }
`;
const RowItem = styled(Link)`
    color: #5cc66a;
    font-size: 14px;
    margin-left: 7px;
    @media (max-width: 480px) {
        font-size: 13px;
    }
`;
const LoaderContainer = styled.div`
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
const MiddleContainer = styled.div``;
const ErrorText = styled.span`
    font-size: 13px;
    position: absolute;
    left: 0;
    color: #f46565;
    bottom: -27px;
    @media (max-width: 480px) {
        font-size: 12px;
        bottom: -26px;
    }
`;
const BottomButton = styled.div`
    cursor: pointer;
    background: linear-gradient(
        272deg,
        rgba(34, 193, 195, 1) 0%,
        rgba(99, 187, 76, 1) 0%,
        rgba(24, 152, 175, 1) 100%
    );
    display: block;
    border-radius: 6px;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    color: #fff;
    min-height: 50px;
    @media (max-width: 640px) {
        height: 50px;
    }
    @media (max-width: 480px) {
        font-size: 15px;
        height: 44px;
    }
`;
