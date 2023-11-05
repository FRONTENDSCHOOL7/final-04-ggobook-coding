import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Input from "../../components/Input/Input";
import Spaces from "../../components/Spaces/Spaces";
import Button from "../../components/Button/Button";
import { UserInfoContext } from "../../context/UserInfoContext";

export default function JoinMembership() {
  const { email, setEmail } = useContext(UserInfoContext);
  const { password, setPassword } = useContext(UserInfoContext);
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [pwErrMsg, setPwErrMsg] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const navigate = useNavigate();

  // 다음 버튼 disabled 처리
  const handleBtnDisabled = () => {
    if (email && password) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  };

  const inputEmail = (event) => {
    setEmail(event.target.value);
    setEmailErrMsg("");
    handleBtnDisabled();
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);

    if (password.length < 6) {
      setPwErrMsg("*비밀번호는 6자 이상 입력해 주세요.");
    } else {
      setPwErrMsg("");
      handleBtnDisabled();
    }
  };

  // 이메일 검증
  const emailValid = async (email) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr";
    const reqPath = "/user/emailvalid";

    try {
      const res = await fetch(baseUrl + reqPath, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: email,
          },
        }),
      });

      const json = await res.json();

      if (json.message === "이미 가입된 이메일 주소 입니다.") {
        setEmailErrMsg("이미 가입된 이메일 주소 입니다.");
      } else {
        navigate("/profilesetting");
      }
    } catch (error) {
      console.log("에러 발생");
    }
  };

  // 다음 버튼 클릭 시 이벤트
  const handleNext = (event) => {
    event.preventDefault();
    emailValid(email);
  };

  return (
    <StyledDiv>
      <Styledh1>이메일로 회원가입</Styledh1>
      <Spaces gap={"40px"} />

      <StyledForm onSubmit={handleNext}>
        <Input
          label="이메일"
          inputBorderColor="#dbdbdb"
          type="email"
          onChange={inputEmail}
          value={email}
          placeholder="이메일을 주소를 입력해 주세요."
          autoFocus={true}
        />
        {emailErrMsg && <ErrMsg>{emailErrMsg}</ErrMsg>}
        <Spaces gap="16px" />
        <Input
          label="비밀번호"
          inputBorderColor="#dbdbdb"
          type="password"
          onChange={inputPassword}
          value={password}
          placeholder="비밀번호를 설정해 주세요."
        />
        {pwErrMsg && <ErrMsg>{pwErrMsg}</ErrMsg>}
        <Spaces gap="30px" />
        <Button
          width="322px"
          padding="13px"
          backgroundColor="var(--mainColor)"
          color="#fff"
          disabled={isBtnDisabled}
        >
          다음
        </Button>
      </StyledForm>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
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

const ErrMsg = styled.p`
  margin-top: 6px;
  color: #eb5757;
  font-size: 12px;
  font-weight: 400;
`;
