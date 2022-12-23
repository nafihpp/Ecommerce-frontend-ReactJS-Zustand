import React from "react";
import styled from "styled-components";

function CategoryBar() {
    return (
        <MainContainer>
            <Wrapper>
                <Container>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </Container>
            </Wrapper>
        </MainContainer>
    );
}
const MainContainer = styled.div``;
const Wrapper = styled.div`
    width: 98%;
    margin: 0 auto;
`;
const Container = styled.div`
    display: flex;

    overflow-x: scroll;
`;
const Box = styled.span`
    border: 2px solid #000;
    border-radius: 50%;
    width: 30%;
    height: 100px;
`;

export default CategoryBar;
