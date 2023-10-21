import React from "react";
import styled from "styled-components";

export default function Spaces({ spaces }) {
  return <StyledSpaces spaces={spaces} />;
}

const StyledSpaces = styled.div`
  margin-bottom: ${(props) => props.spaces};
`;
