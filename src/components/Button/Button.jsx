import React from "react";
import styled, { css } from "styled-components";

export default function Button({
  width,
  backgroundColor,
  border,
  color,
  before,
  beforeBackground,
  children,
  disabled,
  type,
  padding,
}) {
  return (
    <StyledButton
      $width={width}
      $backgroundColor={backgroundColor}
      $border={border}
      $color={color}
      $before={before} // 가상연산자가 있을 경우 props로 true 전달
      $beforeBackground={beforeBackground}
      $disabled={disabled} //disabled 적용
      $type={type} //button type 명시
      $padding={padding}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: ${(props) => props.$width};
  padding: ${(props) => `${props.$padding} 0`};
  background-color: ${(props) =>
    props.$disabled ? "var(--disabled)" : props.$backgroundColor};
  color: ${(props) => (props.$color ? props.$color : "#767676")};
  font-family: "Spoqa Han Sans Neo";
  font-size: 14px;
  border: ${(props) => (props.$border ? props.$border : "none")};
  border-radius: 44px;

  /* props에 before가 true일 때 ::before 스타일을 적용 */
  ${(props) =>
    props.$before &&
    css`
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 10px;
        left: 14px;
        width: 24px;
        height: 24px;
        background: url(${(props) => props.$beforeBackground});
      }
    `}
`;
