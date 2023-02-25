import React from "react";
import styled from "styled-components";

function Achievement() {
    return (
        <MainContainer>
            <Wrapper>
                <Heading>Our Partners</Heading>
                <Parent>
                    <Child>
                        <img
                            src={
                                require("../../assets/payment-method.svg")
                                    .default
                            }
                            alt="Payment"
                        />
                    </Child>
                </Parent>
            </Wrapper>
        </MainContainer>
    );
}

const Heading = styled.h4`
    text-align: center;
    font-size: 40px;
    @media all and (max-width: 680px) {
        font-size: 20px;
    }
`;
const MainContainer = styled.div`
    padding: 20px 0 20px 0;
    background-color: #f4f7f8;
    padding-bottom: 100px;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Parent = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    @media all and (max-width: 680px) {
        flex-wrap: wrap;
    }
`;
const Child = styled.li`
    text-align: center;
    width: 100%;
    margin-top: 20px;
    @media all and (max-width: 680px) {
        width: 44%;
    }
`;

export default Achievement;
