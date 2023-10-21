import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Spaces from "../../components/Spaces/Spaces";

export default function LoginEmail() {
  return (
    <StyledDiv>
      <Styledh1>로그인</Styledh1>
      <Spaces gap="40px" />

      <StyledForm>
        <Input
          label="이메일"
          inputBorderColor="#dbdbdb"
          placeholder="이메일을 입력해 주세요."
          autoFocus={true}
        />
        <Spaces gap="10px" />
        <Input
          label="비밀번호"
          inputBorderColor="#dbdbdb"
          placeholder="비밀번호를 입력해 주세요."
        />
        <Spaces gap="30px" />
        <Button width="322px" backgroundColor="var(--mainColor)" color="#fff">
          로그인
        </Button>
      </StyledForm>
      <Spaces gap="20px" />

      <StyledLink>이메일로 회원가입</StyledLink>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100%;
  padding: 30px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  font-family: "Spoqa Han Sans Neo";
`;

const Styledh1 = styled.h1`
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StyledForm = styled.form``;

const StyledLink = styled.a`
  color: #767676;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
