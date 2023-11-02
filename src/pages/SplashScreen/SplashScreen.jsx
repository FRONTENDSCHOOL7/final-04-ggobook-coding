import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <StyledDiv>
      <StyledImg src="images/logo.svg" alt="로고" />
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
  width: 300px;
`;
