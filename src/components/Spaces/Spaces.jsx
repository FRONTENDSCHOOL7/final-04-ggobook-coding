import React from "react";
import styled from "styled-components";

export default function Spaces({ gap }) {
  return <StyledSpaces $gap={gap} />;
}

const StyledSpaces = styled.div`
  margin-bottom: ${(props) => props.$gap};
`;
