import React from "react";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useStore } from "../../store/Products/Products";
import styles from "../styles/Cart.module.css";
import { useCart } from "../../store/Cart/Cart";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ setModal, modal }) => {
    const item = useCart((state) => state.cart);
    const updateFromStore = useCart((state) => state.updateFromCart);
    const deleteFromStore = useCart((state) => state.removeFromCart);
    const [discounted, setDiscount] = useState(0);
    const [couponCode, setCouponCode] = useState("");
    const navigate = useNavigate();

    let sum = 0;
    item.map((mapped) => {
        sum += mapped.price * mapped.quantity;
    });

    function discounting() {
        if (couponCode === "10percentage") {
            setDiscount(sum / 10);
        } else {
            setDiscount(0);
        }
    }

    let final = sum.toFixed(2) - discounted.toFixed(2);

    let formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(final);

    function AddCount(item) {
        const updatedItem = {
            id: item.id,
            image: item.image,
            price: item.price,
            quantity: item.quantity + 1,
            title: item.title,
        };
        updateFromStore(updatedItem);
    }

    function descreaseCount(item) {
        if (item.quantity > 1) {
            const updatedItem = {
                id: item.id,
                image: item.image,
                price: item.price,
                quantity: item.quantity - 1,
                title: item.title,
            };
            updateFromStore(updatedItem);
        } else {
            deleteFromStore(item);
        }
    }

    function deleteItem(item) {
        deleteFromStore(item);
    }

    return (
        <Body>
            <Header>
                <h3></h3>
                <AiOutlineClose
                    style={{ cursor: "pointer" }}
                    onClick={(e) => setModal(false)}
                />
            </Header>
            {item?.map((cart) => (
                <Content>
                    <div className="thumbnail">
                        <img src={cart?.image} alt={cart?.title} />
                    </div>
                    <div className="details">
                        <p>
                            {cart?.title.slice(0, 25)}
                            <br />
                            <div
                                style={{
                                    display: "flex",
                                    background: "grey",
                                    borderRadius: "7px",
                                    width: 80,
                                    justifyContent: "center",
                                }}
                            >
                                <div
                                    style={{
                                        marginRight: "20px",
                                        cursor: "pointer",
                                    }}
                                    onClick={(e) => {
                                        descreaseCount(cart);
                                    }}
                                >
                                    -
                                </div>
                                {cart?.quantity}
                                <div
                                    style={{
                                        marginLeft: "20px",
                                        cursor: "pointer",
                                    }}
                                    onClick={(e) => {
                                        AddCount(cart);
                                    }}
                                >
                                    +
                                </div>{" "}
                            </div>
                            <strong>
                                total : $
                                {cart?.price.toFixed(2) * cart?.quantity}
                            </strong>
                        </p>
                    </div>
                    <div className="delete" onClick={(e) => deleteItem(cart)}>
                        <AiOutlineDelete />
                    </div>
                </Content>
            ))}

            <MiddleContainer>
                <div className={styles.right}>
                    <div className={styles.wrapper}>
                        {item?.length >= 1 ? (
                            <div className="coupon">
                                <p>Have a Coupon code ?</p>
                                <Input
                                    type="text"
                                    className="zo"
                                    style={{ padding: "5px", border: "none" }}
                                    onChange={(e) =>
                                        setCouponCode(e.target.value)
                                    }
                                />
                                <div
                                    style={{
                                        background: "#fff",
                                        color: "#000",
                                        padding: "5px",
                                        marginTop: "8px",
                                        cursor: "pointer",
                                        width: "65%",
                                        borderRadius: "3px",
                                        textAlign: "center",
                                        fontWeight: "600",
                                    }}
                                    onClick={(e) => discounting()}
                                >
                                    Apply Coupon code
                                </div>
                            </div>
                        ) : null}
                        <h2 className={styles.title}>CART TOTAL</h2>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>Subtotal:</b>$
                            {sum.toFixed(2)}
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>
                                Coupon Discount:
                            </b>
                            ${discounted.toFixed(2)}
                        </div>
                        <div className={styles.totalText}>
                            <b className={styles.totalTextTitle}>
                                Total: {formatted}
                            </b>
                        </div>
                    </div>
                </div>
            </MiddleContainer>
            <div
                onClick={(e) => {
                    if (item.length == 0) {
                        alert("cart is empty");
                    } else {
                        navigate("/login");
                    }
                }}
            >
                <button>Checkout</button>
            </div>
        </Body>
    );
};

const Input = styled.input`
    outline: none;
    border: none;
    ::placeholder {
        font-size: 13px;
    }
    &.zo {
        @media all and (max-width: 768px) {
            font-size: 16px;
            transform-origin: top left;
            transform: scale(0.75);
        }
    }
`;
const Links = styled(Link)``;
const MiddleContainer = styled.div``;
const Body = styled.div`
    width: 350px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 20%);
    background-color: white;
    position: absolute;
    right: 20px;
    z-index: 100;
    overflow-y: scroll;
    height: 500px;
    button {
        margin: 20px 20px 30px 20px;
        height: 55px;
        width: calc(100% - 40px);
        background-color: hsl(26, 100%, 55%);
        border: none;
        border-radius: 10px;
        color: white;
        font-weight: 700;
        cursor: pointer;
        transition: 100ms ease;
        &:hover {
            background-color: hsl(26, 100%, 55%, 50%);
        }
    }
    @media (max-width: 1340px) {
        right: 0;
        transform: translateX(30%);
    }
    @media (max-width: 769px) {
        left: 0;
        top: calc(100% + 10px);
        width: calc(100% - 20px);
        margin: auto;
        transform: translateX(0%);
        max-width: 350px;
    }
`;

const Header = styled.div`
    border-bottom: solid 1px hsl(223, 64%, 95%);
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;

const Content = styled.div`
    padding: 20px;
    line-height: 1.6;
    display: flex;
    align-items: center;
    .thumbnail {
        display: flex;
        align-items: center;
        margin-right: 20px;
        img {
            width: 50px;
            height: 50px;
            border-radius: 5px;
            cursor: auto;
        }
    }
    .details {
        margin-right: 20px;
    }
`;

export default Cart;
