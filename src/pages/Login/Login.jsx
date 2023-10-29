import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";
import Spaces from "../../components/Spaces/Spaces";

export default function Login() {
  return (
    <StyledDiv>
      <ButtonSection>
        <ButtonWrapper>
          <ButtonList>
            <Button
              width="332px"
              padding="13px"
              border="1px solid #F2C94C"
              before
              beforeBackground="/images/logo-kakao.svg"
            >
              카카오톡 계정으로 로그인
            </Button>
          </ButtonList>
          <Spaces gap="10px" />
          <ButtonList>
            <Button
              width="332px"
              padding="13px"
              border="1px solid #767676"
              before
              beforeBackground="/images/logo-google.svg"
            >
              구글 계정으로 로그인
            </Button>
          </ButtonList>
          <Spaces gap="10px" />
          <ButtonList>
            <Button
              width="332px"
              padding="13px"
              backgroundColor="transparents"
              border="1px solid #2D9CDB"
              before
              beforeBackground="/images/logo-facebook.svg"
            >
              페이스북 계정으로 로그인
            </Button>
          </ButtonList>
        </ButtonWrapper>

        <LoginJoinWrapper>
          <EmailLoginLink to="/loginemail">이메일로 로그인</EmailLoginLink>
          <JoinLink to="/joinmembership">회원가입</JoinLink>
        </LoginJoinWrapper>
      </ButtonSection>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  position: relative;
  background-color: #237b46;
  color: var(--767676, #767676);
  font-family: "Spoqa Han Sans Neo";
`;

const ButtonSection = styled.section`
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  padding: 50px 34px;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
`;

const ButtonWrapper = styled.ul`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonList = styled.li`
  position: relative;
  width: content-fit;
`;

const LoginJoinWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
`;

const EmailLoginLink = styled(Link)`
  color: #767676;
  text-decoration: none;
  &::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: #c4c4c4;
    vertical-align: bottom;
    margin: 0 12px;
  }
`;

const JoinLink = styled(Link)`
  color: #767676;
  text-decoration: none;
`;
