import React from "react";
import styled from "styled-components";

export default function Input({
  label,
  inputBorderColor,
  placeholder,
  autoFocus,
}) {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        $inputBorderColor={inputBorderColor}
        placeholder={placeholder}
        autoFocus={autoFocus}
      ></StyledInput>
    </InputContainer>
  );
}

const InputContainer = styled.div``;

const StyledLabel = styled.label`
  color: #767676;
  font-family: "Spoqa Han Sans Neo";
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
`;

const StyledInput = styled.input`
  width: 322px;
  height: 32px;
  border-bottom: 1px solid ${(props) => props.$inputBorderColor};

  &::placeholder {
    color: #dbdbdb;
    font-size: 14px;
  }

  &:focus {
    border-bottom: 1px solid var(--mainColor);
  }
`;
