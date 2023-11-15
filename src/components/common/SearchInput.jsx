import React from "react";
import styled from "styled-components";

export default function SearchInput({ placeholder }) {
  return <SearchBar placeholder={placeholder}></SearchBar>;
}

const SearchBar = styled.input`
  width: 316px;
  padding: 7px 16px;
  background-color: #f2f2f2;
  border-radius: 32px;
  color: #000;

  &::placeholder {
    color: #c4c4c4;
  }
`;
