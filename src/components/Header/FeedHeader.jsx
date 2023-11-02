import React from "react";
import styled from "styled-components";
import SearchButton from "../common/SearchButton";

export default function FeedHeader({ onClick }) {
  return (
    <StyledHeader>
      <StyledSpan>꼬북코딩 피드</StyledSpan>
      <SearchButton onClick={onClick} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  height: 48px;
  padding: 13px 16px;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSpan = styled.span`
  display: inline-block;
  color: #000;
  font-family: "Spoqa Han Sans Neo";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
