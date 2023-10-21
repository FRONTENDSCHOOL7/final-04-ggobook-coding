import React from "react";
import styled, { css } from "styled-components";

export default function Button({
  width,
  border,
  before,
  beforeBackground,
  children,
}) {
  return (
    <StyledButton
      width={width}
      border={border}
      before={before}
      beforeBackground={beforeBackground}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: ${(props) => props.width};
  padding: 13px 0;
  color: #767676;
  font-size: 14px;
  border: ${(props) => (props.border ? props.border : "2px solid #000")};
  border-radius: 44px;

  /* props에 before가 true일 때 ::before 스타일을 적용 */
  ${(props) =>
    props.before &&
    css`
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 10px;
        left: 14px;
        width: 24px;
        height: 24px;
        background: url(${(props) => props.beforeBackground});
      }
    `}
`;
