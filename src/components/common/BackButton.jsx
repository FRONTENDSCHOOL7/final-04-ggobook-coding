import React from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BackButton() {
  // const navigate = useNavigate();

  const handleBackClick = () => {
    // navigate(-1);
  };

  return <StyledBackButton onClick={handleBackClick}></StyledBackButton>;
}

const StyledBackButton = styled.button`
  width: 25px;
  height: 25px;
  background: url("/images/icon-arrow-left.svg");
  background-size: 22px;
  background-position: center;
`;
