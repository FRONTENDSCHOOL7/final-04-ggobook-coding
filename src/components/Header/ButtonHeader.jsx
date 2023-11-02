import React from "react";
import styled from "styled-components";
import BackButton from "../common/BackButton";
import Button from "../Button/Button";

export default function ButtonHeader({ disabled, onClick, children }) {
  return (
    <StyledHeader>
      <BackButton />
      <Button
        width="90px"
        padding="7px"
        color="#fff"
        disabled={disabled}
        backgroundColor="var(--mainColor)"
        onClick={onClick}
      >
        {children}
      </Button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 48px;
  padding: 8px 16px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
