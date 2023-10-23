import React from "react";
import styled from "styled-components";

export default function SplashScreen() {
  return (
    <StyledDiv>
      <StyledImg src="" alt="로고" />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  /* border: 1px solid red; // 구분선 */
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: red;
`;
