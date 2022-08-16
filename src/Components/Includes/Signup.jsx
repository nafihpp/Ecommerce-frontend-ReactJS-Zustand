import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

export default function Signup() {
    return (
        <>
            <Helmet>
                <title>Login Now</title>
            </Helmet>
            <Container>
                <LeftContainer>
                    <MainHeading>Your Favourite Ecommerce Shopping</MainHeading>
                </LeftContainer>
                <RightContainer>
                    <LoginContainer>
                        <LoginHeading>Register into Account</LoginHeading>
                        <LoginInfo>
                            Create an account to buy your favourite Product
                        </LoginInfo>
                        <Form>
                            <InputContainer>
                                <TextInput type="text" placeholder="Name" />
                            </InputContainer>
                            <InputContainer>
                                <TextInput type="email" placeholder="Email" />
                            </InputContainer>
                            <InputContainer>
                                <TextInput
                                    type="password"
                                    placeholder="Password"
                                />
                            </InputContainer>
                            <LoginButton to="/login">Login Now</LoginButton>
                            <ButtonContainer>
                                <SubmitButton>Create an Account</SubmitButton>
                            </ButtonContainer>
                        </Form>
                    </LoginContainer>
                </RightContainer>
            </Container>
        </>
    );
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;
`;
const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    @media all and (max-width: 680px) {
        display: none;
    }
`;
const MainHeading = styled.h1`
    font-size: 36px;
    color: #090e5e;
    line-height: 1.4em;
`;
const RightContainer = styled.div`
    background: #efefef;
    width: 45%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 20px;
    padding: 0 70px 70px;
    @media all and (max-width: 640px) {
        width: 100%;
        padding: 0 55px 55px;
    }
`;
const LoginContainer = styled.div`
    padding-bottom: 70px;
    border-bottom: 1px solid #fff;
    width: 100%;
`;
const LoginHeading = styled.h3`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
`;
const LoginInfo = styled.p`
    font-size: 18px;
    margin-bottom: 35px;
`;
const Form = styled.form`
    width: 100%;
    display: block;
`;
const InputContainer = styled.div`
    margin-bottom: 15px;
    position: relative;
`;
const TextInput = styled.input`
    padding: 20px 25px 20px 30px;
    width: 100%;
    display: block;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    outline: none;
`;
const LoginButton = styled(Link)`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
    color: #046bf6;
    font-size: 20px;
    text-decoration: none;
`;
const SubmitButton = styled.button`
    background: #000;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 25px 40px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
