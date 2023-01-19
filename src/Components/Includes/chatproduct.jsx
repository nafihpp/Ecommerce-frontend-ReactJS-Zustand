import React from "react";
import styled from "styled-components";
import image from "../../assets/apricot.jpg";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
`;

const ImageContainer = styled.div`
    width: 50%;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const ZoomOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    background-color: rgba(0, 0, 0, 0.5);

    &:hover {
        display: block;
    }
`;

const ZoomIcon = styled.i`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: white;
`;

const ProductName = styled.h1`
    margin: 1rem 0;
    font-size: 2rem;
    text-align: center;
`;

const Price = styled.h2`
    margin: 0.5rem 0;
    font-size: 1.5rem;
    color: tomato;
`;

const Description = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: justify;
`;

const Button = styled.button`
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 0;
    border-radius: 0.25rem;
    background-color: tomato;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: darkred;
    }
`;

const ProductPage = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src={image} alt="Fruit" />
                <ZoomOverlay>
                    <ZoomIcon className="fas fa-search-plus" />
                </ZoomOverlay>
            </ImageContainer>
            <ProductName>Fruit Name</ProductName>
            <Price>$10.99/kg</Price>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                auctor lectus non leo volutpat, at pulvinar ligula ultricies.
            </Description>
            <Button>Add to Cart</Button>
        </Container>
    );
};

export default ProductPage;
