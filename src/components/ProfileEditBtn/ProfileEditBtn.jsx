import React from "react";
import styled from "styled-components";

export default function ProfileEditBtn({
  type,
  marginTop,
  imgSrc,
  onChange,
  background,
}) {
  return (
    <StyledLabel $marginTop={marginTop} $imgSrc={imgSrc}>
      <ProfileImgSetting
        type={type}
        name="image"
        accept="image/*"
        onChange={onChange}
      ></ProfileImgSetting>
    </StyledLabel>
    // <SetProfileImg
    //   type={type}
    //
    //   $imgSrc={imgSrc}
    // ></SetProfileImg>
  );
}

// const SetProfileImg = styled.input`
//   width: 110px;
//   height: 110px;
//   margin-top: ${(props) => (props.$marginTop ? props.$marginTop : "0")};
//   position: absolute;
//   /* background: url(${(props) =>
//     props.$imgSrc ? props.$imgSrc : "images/img-profile-default.svg"};); */
//   background-size: 110px;
//   border-radius: 110px;
//   border: 1px solid #dbdbdb;

//   &::before {
//     content: "";
//     display: inline-block;
//     width: 36px;
//     height: 36px;
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     background: url("images/upload-file.svg");
//     background-size: 36px;
//   }
// `;

const StyledLabel = styled.label`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  position: absolute;
  margin-top: ${(props) => (props.$marginTop ? props.$marginTop : "0")};
  background: url(${(props) =>
    props.$imgSrc ? props.$imgSrc : "images/img-profile-default.svg"});
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
