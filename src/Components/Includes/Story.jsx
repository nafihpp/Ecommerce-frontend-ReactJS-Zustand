import React from "react";
import styled from "styled-components";
import Orange from "../../assets/apple.png";

function Story() {
    return (
        <MainContainer>
            <Wrapper>
                <MainDiv>
                    <LeftContainer>
                        <img src={Orange} className="image" />
                    </LeftContainer>
                    <RightContainer>
                        <Headline>Disclaimer About Our Brand</Headline>
                        <Para>
                            Everything Shown in this Website is for the Demo
                            Purpose , These Products and datas does not exist!
                        </Para>
                        <Button>Read Full Story</Button>
                    </RightContainer>
                </MainDiv>
            </Wrapper>
        </MainContainer>
    );
}
const ImageContainer = styled.div``;
const MainContainer = styled.div`
    background-color: #f4f7f8;
    padding: 80px 0;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;
const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LeftContainer = styled.div`
    width: 16%;
    border-radius: 8px;
    height: 136px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const RightContainer = styled.div`
    width: 49%;
`;
const Headline = styled.h1`
    margin-bottom: 20px;
`;
const Para = styled.p`
    margin-bottom: 10px;
`;
const Button = styled.a`
    color: #f86338;
`;
export default Story;
