import React from "react";
import styled from "styled-components";
import Input from "../../components/Input/Input";
import Spaces from "../../components/Spaces/Spaces";
import Button from "../../components/Button/Button";
import ProfileEditBtn from "../../components/ProfileEditBtn/ProfileEditBtn";

export default function ProfileSetting() {
  return (
    <StyledDiv>
      <Styledh1>프로필 설정</Styledh1>
      <Spaces gap="14px" />
      <StyledP>나중에 언제든지 변경할 수 있습니다.</StyledP>

      <ProfileEditBtn marginTop="86px" />
      <Spaces gap="170px" />

      <StyledForm>
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
        <Spaces gap="30px" />
        <Button width="322px" backgroundColor="var(--disabled)" color="#fff">
          코북코딩 시작하기
        </Button>
      </StyledForm>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100%;
  padding: 30px 34px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  font-family: Spoqa Han Sans Neo;

  img {
    width: 110px;
    margin: 30px 0;
  }
`;

const Styledh1 = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
`;

const StyledP = styled.p`
  color: #767676;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
`;

const StyledForm = styled.form``;
