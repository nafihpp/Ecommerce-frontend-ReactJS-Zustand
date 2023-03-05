import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import animationData from "../../loader/9582-liquid-4-dot-loader.json";
import Lottie from "react-lottie";

function Category() {
    const { category } = useParams();
    const [categoryItem, setCategoryItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/category/${category}`)
            .then(function (response) {
                setCategoryItem(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(category);

    const Pagepush = (produce) => {
        navigate(`${produce.id}`);
    };
    function back() {
        navigate("/");
    }

    let listProducts = () => {
        return categoryItem?.map((produc) => (
            <>
                <Child key={produc?.id} onClick={() => Pagepush(produc)}>
                    <ImageContainer>
                        <ProductImg src={produc?.image} alt={produc?.title} />
                    </ImageContainer>
                    <Empdiv>
                        <HeadProduct>{produc?.title}</HeadProduct>
                        <Rating
                            initialValue={produc?.rating?.rate}
                            allowHover={false}
                            readonly={true}
                            size={17}
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
                </Child>
            </>
        ));
    };

    return (
        <>
            {loading ? (
                <Lottie options={defaultOptions} height={400} width={400} />
            ) : (
                <div>
                    <BackButton onClick={back}>
                        <IoArrowBackOutline />
                    </BackButton>
                    <ParentList>{listProducts()}</ParentList>
                </div>
            )}
        </>
    );
}
const BackButton = styled.div`
    cursor: pointer;
    font-size: 34px;
`;

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
    flex-wrap: wrap;
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

export default Category;
