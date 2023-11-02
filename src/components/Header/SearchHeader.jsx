import React from "react";
import styled from "styled-components";
import BackButton from "../common/BackButton";
import SearchInput from "../common/SearchInput";

export default function SearchHeader({ placeholder }) {
  return (
    <StyledHeader>
      <BackButton />
      <SearchInput placeholder={placeholder} />
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
