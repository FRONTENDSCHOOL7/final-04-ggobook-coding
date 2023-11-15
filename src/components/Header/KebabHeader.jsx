import React from "react";
import styled from "styled-components";
import BackButton from "../common/BackButton";
import KebabIcon from "../common/KebabIcon";

export default function KebabHeader({ onClick, content, kebab }) {
  return (
    <StyledHeader>
      <BackButton />
      {content && <StyledContent>{content}</StyledContent>}
      <StyledKebab>{kebab && <KebabIcon onClick={onClick} />}</StyledKebab>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 48px;
  padding: 12px 12px 12px 16px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const StyledContent = styled.span`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 10px;
`;

const StyledKebab = styled.span`
  margin-left: auto;
`;
