import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import ProfileEditBtn from "../../components/ProfileEditBtn/ProfileEditBtn";
import Input from "../../components/Input/Input";
import Spaces from "../../components/Spaces/Spaces";

export default function ProfileModification() {
  return (
    <StyledDiv>
      <Header></Header>

      <StyledForm>
        <ProfileEditBtn />
        <Spaces gap="140px" />
        <Input
          label="사용자 이름"
          inputBorderColor="#dbdbdb"
          placeholder="2~10자 이내여야 합니다."
          autoFocus={true}
        />
        <Spaces gap="16px" />
        <Input
          label="계정 ID"
          inputBorderColor="#dbdbdb"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
        <Spaces gap="16px" />
        <Input
          label="소개"
          inputBorderColor="#dbdbdb"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        />
      </StyledForm>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  background-color: #fff;
  font-family: "Spoqa Han Sans Neo";
`;

const StyledForm = styled.form`
  padding: 30px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
