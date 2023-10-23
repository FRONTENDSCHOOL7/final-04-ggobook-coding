import React from "react";
import styled from "styled-components";

export default function ProfileEditBtn({ marginTop }) {
  return <StyledButton $marginTop={marginTop}></StyledButton>;
}

const StyledButton = styled.button`
  width: 110px;
  height: 110px;
  margin-top: ${(props) => (props.$marginTop ? props.$marginTop : "0")};
  position: absolute;
  background: url("images/img-profile-default.svg") no-repeat;
  background-size: 110px;
  border-radius: 110px;
  border: 1px solid #dbdbdb;

  &::before {
    content: "";
    display: inline-block;
    width: 36px;
    height: 36px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: url("images/upload-file.svg");
    background-size: 36px;
  }
`;
