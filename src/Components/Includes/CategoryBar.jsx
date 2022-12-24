import React from "react";
import styled from "styled-components";

function CategoryBar() {
    return (
        <MainContainer>
            <Wrapper>
                <Container>
                    <div>
                        <Box></Box>
                    </div>
                    <div>
                        <Box></Box>
                    </div>
                    <div>
                        <Box></Box>
                    </div>
                    <div>
                        <Box></Box>
                    </div>
                    <div>
                        <Box></Box>
                    </div>
                    <div>
                        <Box></Box>
                    </div>
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
const Container = styled.div``;
const Box = styled.div``;

export default CategoryBar;
