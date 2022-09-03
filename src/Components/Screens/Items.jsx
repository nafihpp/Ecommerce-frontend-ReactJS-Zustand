import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Apple from "../../assets/apple.jpg";
import Apricot from "../../assets/apricot.jpg";
import Banana from "../../assets/banana.jpg";
import Cherry from "../../assets/cherry.jpg";
import ButtonNavbar from "../Includes/BottomNavBar";
import { GrView } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { isMobile } from "react-device-detect";
import BottomNavBar from "../Includes/BottomNavBar";

function Items({ item, setItem }) {
    const notify = () =>
        toast.success("Added to Cart", {
            position: "top-center",
            autoClose: 400,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const axios = require("axios");
        axios
            .get("https://fakestoreapi.com/products/")
            .then(function (response) {
                // handle success
                setProducts(response.data);
                console.log(product);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    function buy(bought) {
        notify();
        const newItem = [...item, bought];
        setItem(newItem);
    }
    let listProducts = () => {
        return product.map((produc) => (
            <>
                <Child key={produc.id}>
                    <ImageContainer>
                        <ProductImg src={produc.image} alt={produc.title} />
                    </ImageContainer>
                    <Empdiv>
                        <HeadProduct>{produc.title}</HeadProduct>
                        <PriceProduct>${produc.price}</PriceProduct>
                        <MainCartContainer>
                            <Buttoncart onClick={() => buy(produc)}>
                                <AiOutlineShoppingCart />
                            </Buttoncart>
                            <Links to={`cart/${produc.id}`}>
                                <GrView />
                            </Links>
                        </MainCartContainer>
                        <ToastContainer autoClose={300} />
                    </Empdiv>
                </Child>
            </>
        ));
    };
    return (
        <>
            <MainContainer>
                <Wrapperlist>
                    <ParentList>{listProducts()}</ParentList>
                </Wrapperlist>
            </MainContainer>
            {isMobile && (
                <>
                    <BottomNavBar />
                </>
            )}
        </>
    );
}
const MainCartContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 25px;
`;
const Buts = styled.a`
    cursor: pointer;
    background: green;
    border-radius: 10px;
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
    padding-top: 95px;
`;
const ParentList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 23px;
    margin-top: -1px;
`;
const Child = styled.li`
    width: 23%;
    margin-bottom: 46px;
    border-radius: 4px;
    padding: 4px;
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
`;
const ProductImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 15px;
`;
const HeadProduct = styled.h4`
    height: 1.5rem;
    overflow: hidden;
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
