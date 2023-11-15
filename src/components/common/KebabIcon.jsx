import React from "react";
import styled from "styled-components";

export default function KebabIcon({ onClick }) {
  return <KebabBtn onClick={onClick}></KebabBtn>;
}

const KebabBtn = styled.button`
  width: 25px;
  height: 25px;
  background: url("/images/icon-more-vertical.svg");
  background-position: center;
  background-size: 24px;
`;
