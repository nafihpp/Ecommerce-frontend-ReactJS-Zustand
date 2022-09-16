import React from "react";
import styled from "styled-components";
import Orange from "../../assets/apple.png";
function Story() {
    return (
        <MainContainer>
            <Wrapper>
                <MainDiv>
                    <LeftContainer>
                        <ImageContainer>
                            <img src={Orange} alt="storyimg" width={100} />
                        </ImageContainer>
                    </LeftContainer>
                    <RightContainer>
                        <Headline>Story About Our Brand</Headline>
                        <Para>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sapiente enim animi beatae neque quam saepe
                            aut aliquam architecto ducimus minima officiis
                            possimus aliquid dignissimos, velit rerum
                            praesentium id adipisci magni!
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
    padding: 30px 0;
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
    background-color: #e5e5e5;
    width: 40%;
    border-radius: 8px;
    height: 300px;
`;
const RightContainer = styled.div`
    width: 45%;
`;
const Headline = styled.h5``;
const Para = styled.p``;
const Button = styled.a`
    color: #f86338;
`;
export default Story;
