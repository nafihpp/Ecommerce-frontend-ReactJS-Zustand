import React from "react";
import styled from "styled-components";
import { Link, Router } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    return (
        <>
            <MainContainer>
                <Wrapper>
                    <Container>
                        <RightContainer>
                            <LoginContainer>
                                <LoginHead>
                                    <LoginHeading>Login</LoginHeading>
                                    <AiOutlineClose
                                        onClick={(e) => {
                                            navigate("/");
                                        }}
                                        style={{ cursor: "pointer" }}
                                    />
                                </LoginHead>
                                <LoginInfo>Enter Phone to Verify OTP</LoginInfo>
                                <Form>
                                    <InputContainer>
                                        <TextInput
                                            type="phone"
                                            placeholder="email"
                                            onChange={(e) =>
                                                console.log("none")
                                            }
                                        />
                                    </InputContainer>
                                    <InputContainer>
                                        <TextInput
                                            type="password"
                                            placeholder="password"
                                            onChange={(e) =>
                                                console.log("none")
                                            }
                                        />
                                    </InputContainer>
                                    <p></p>
                                    <MainButtonContainer>
                                        <SignupButton
                                            onClick={(e) => {
                                                console.log("nothing");
                                            }}
                                        ></SignupButton>
                                        <ForgotButton to="/signup">
                                            Create an Account?
                                        </ForgotButton>
                                    </MainButtonContainer>
                                    <ButtonContainer>
                                        <SubmitButton>Login</SubmitButton>
                                    </ButtonContainer>
                                </Form>
                            </LoginContainer>
                        </RightContainer>
                    </Container>
                </Wrapper>
            </MainContainer>
        </>
    );
}
const CrossDiv = styled.a`
    width: 7%;
    cursor: pointer;
`;
const CrossImg = styled.img`
    display: block;
    width: 100%;
`;
const LoginHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 21px;
`;
const MainButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const SignupButton = styled.a`
    font-size: 14px;
    font-weight: 550;
    cursor: pointer;
`;
const MainContainer = styled.section`
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(2px);
    z-index: 100;
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const Container = styled.div``;
const RightContainer = styled.div`
    border-radius: 20px;
    padding: 30px;
    color: #000;
    width: 27%;
    height: 369px;
    margin: 0 auto;
    background: #fff;
    @media all and (max-width: 1080px) {
        width: 80%;
        padding: 0 55px 55px;
    }
    @media all and (max-width: 780px) {
        width: 90%;
        padding: 0 19px 38px;
    }
    @media all and (max-width: 360px) {
        width: 96%;
        padding: 0 12px 22px;
    }
`;
const LoginContainer = styled.div`
    border-bottom: 1px solid #fff;
    width: 100%;
`;
const LoginHeading = styled.h3`
    font-size: 27px;
    font-weight: bold;
    @media all and (max-width: 640px) {
        font-size: 22px;
    }
`;
const LoginInfo = styled.p`
    font-size: 18px;
    margin-bottom: 35px;
    @media all and (max-width: 640px) {
        font-size: 14px;
    }
`;
const Form = styled.form`
    width: 100%;
    display: block;
`;
const InputContainer = styled.div`
    margin-bottom: 15px;
    &:before {
    }
`;
const TextInput = styled.input`
    padding: 20px 25px 20px 30px;
    width: 93%;
    display: block;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    border: 1px solid black;
    outline: none;
    @media all and (max-width: 640px) {
        width: 100%;
    }
`;
const ForgotButton = styled(Link)`
    margin-bottom: 25px;
    font-size: 15px;
    text-decoration: none;
    color: red;
    cursor: pointer;
    font-weight: 550;
`;
const SubmitButton = styled.a`
    background: #000;
    border: 0;
    outline: 0;
    color: #fff;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    border: 1px solid;
    @media all and (max-width: 640px) {
        padding: 6px 24px;
        font-size: 13px;
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;
