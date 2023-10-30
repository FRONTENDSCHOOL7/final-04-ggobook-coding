import React from "react";
import styled from "styled-components";

export default function Input({
  label,
  inputBorderColor,
  type,
  value,
  onChange,
  placeholder,
  autoFocus,
  onBlur,
  id,
  name,
}) {
  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        $inputBorderColor={inputBorderColor}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onBlur={onBlur}
        id={id}
        name={name}
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
    font-size: 14px;
  }

  &:focus {
    border-bottom: 1px solid var(--mainColor);
  }
`;
