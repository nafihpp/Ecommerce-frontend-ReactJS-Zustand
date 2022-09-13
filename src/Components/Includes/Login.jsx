import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Navbar from "./Navbar";

export default function Login() {
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
                        <LoginHeading>Login to your Account</LoginHeading>
                        <LoginInfo>Enter email and password to login</LoginInfo>
                        <Form>
                            <InputContainer>
                                <TextInput type="email" placeholder="Email" />
                            </InputContainer>
                            <InputContainer>
                                <TextInput
                                    type="password"
                                    placeholder="Password"
                                />
                            </InputContainer>
                            <LoginButton to="/signup">Signup Now</LoginButton>
                            <ButtonContainer>
                                <SubmitButton to="/login">Login</SubmitButton>
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
    padding: 15px;
    flex-wrap: wrap;
`;
const LeftContainer = styled.div`
    padding: 40px 70px 70px;
    display: flex;
    align-items: center;
    @media all and (max-width: 640px) {
        display: none;
    }
`;
const MainHeading = styled.h1`
    font-size: 38px;
    color: #8d1818;
    line-height: 1.4em;
`;
const RightContainer = styled.div`
    background: #000;
    color: #fff;
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
    padding-top: 10px;
    border-bottom: 1px solid #ab1414;
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
    &:before {
    }
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
    color: #f60404;
    font-size: 20px;
    text-decoration: none;
`;
const SubmitButton = styled(Link)`
    background: #000;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 25px 40px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
