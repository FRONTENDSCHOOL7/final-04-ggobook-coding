import React from "react";
import styled from "styled-components";

export default function SearchButton({ onClick }) {
  return <StyledSearchButton onClick={onClick}></StyledSearchButton>;
}

const StyledSearchButton = styled.button`
  width: 25px;
  height: 25px;
  padding: 0;
  background: url("/images/icon-search.svg");
  background-position: center;
  background-size: 24px;
`;
