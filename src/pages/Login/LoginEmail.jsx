import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Spaces from "../../components/Spaces/Spaces";
import { Link } from "react-router-dom";

export default function LoginEmail() {
  // 이메일로 로그인 기능 구현
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const login = async (email, password) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr"; // https 서버
    const reqPath = "/user/login"; // Request

    try {
      // 로그인한 후 토큰 꺼내기
      const res = await fetch(baseUrl + reqPath, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        // 문자열로 전환
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
          },
        }),
      });

      const json = await res.json();

      if (json.status === 422) {
        setErrorMsg("*아이디 또는 비밀번호가 틀렸습니다.");
      } else if (!email || !password) {
        setErrorMsg("이메일 또는 비밀번호를 입력해 주세요.");
      } else {
        const token = json.user.token;
        localStorage.setItem("token", token); // token 값을 자유롭게 사용할 수 있도록 로컬스토리지에 저장
        setErrorMsg("");

        alert("로그인 성공!");
      }
    } catch (error) {
      console.log("에러 발생");
    }
  };

  const inputEmail = (event) => {
    setEmail(event.target.value);
    setErrorMsg("");
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
    setErrorMsg("");
  };

  const handleLogin = (event) => {
    event.preventDefault(); // 페이지가 새로고침 되는 것을 막음
    login(email, password);
  };

  return (
    <LoginEmailPage>
      <Styledh1>로그인</Styledh1>
      <Spaces gap="40px" />

      <StyledForm onSubmit={handleLogin}>
        <Input
          label="이메일"
          inputBorderColor="#dbdbdb"
          type="email"
          onChange={inputEmail}
          value={email}
          placeholder="이메일을 입력해 주세요."
          autoFocus={true}
        />
        <Spaces gap="10px" />
        <Input
          label="비밀번호"
          inputBorderColor="#dbdbdb"
          type="password"
          onChange={inputPassword}
          value={password}
          placeholder="비밀번호를 입력해 주세요."
        />
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        <Spaces gap="30px" />
        <Button
          width="322px"
          padding="13px"
          backgroundColor="var(--mainColor)"
          color="#fff"
        >
          로그인
        </Button>
      </StyledForm>
      <Spaces gap="20px" />

      <JoinEmailLink to="/joinmembership">이메일로 회원가입</JoinEmailLink>
    </LoginEmailPage>
  );
}

const LoginEmailPage = styled.div`
  height: 100vh;
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

const ErrorMsg = styled.p`
  margin-top: 6px;
  color: #eb5757;
  font-size: 12px;
  font-weight: 400;
`;

const JoinEmailLink = styled(Link)`
  color: #767676;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
