import React from "react";
import styled from "styled-components";

export default function ProfileEditBtn({
  type,
  marginTop,
  onChange,
  background,
}) {
  return (
    <StyledLabel $marginTop={marginTop} $background={background}>
      <ProfileImgSetting
        type={type}
        name="image"
        accept="image/*"
        onChange={onChange}
      ></ProfileImgSetting>
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  position: absolute;
  margin-top: ${(props) => (props.$marginTop ? props.$marginTop : "0")};
  background: no-repeat url(${(props) => props.$background});
  background-size: 110px;
  cursor: pointer;

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

const ProfileImgSetting = styled.input`
  display: none;
`;
