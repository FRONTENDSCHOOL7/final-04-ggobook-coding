import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SearchButton() {
  const navigate = useNavigate();

  const handleMovetoSearch = () => {
    navigate("/search");
  };
  return <StyledSearchButton onClick={handleMovetoSearch}></StyledSearchButton>;
}

const StyledSearchButton = styled.button`
  width: 25px;
  height: 25px;
  padding: 0;
  background: url("/images/icon-search.svg");
  background-position: center;
  background-size: 24px;
`;
