import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Input from "../../components/Input/Input";
import Spaces from "../../components/Spaces/Spaces";
import Button from "../../components/Button/Button";
import { UserInfoContext } from "../../context/UserInfoContext";

export default function JoinMembership() {
  const { email, setEmail } = useContext(UserInfoContext);
  const { password, setPassword } = useContext(UserInfoContext);

  const [pwErrMsg, setPwErrMsg] = useState("");

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);

    // if (password.length >= 6) {
    //   setPwErrMsg("");
    // } else {
    //   setPwErrMsg("*비밀번호는 6자 이상이어야 합니다.");
    // }
  };

  return (
    <StyledDiv>
      <Styledh1>이메일로 회원가입</Styledh1>
      <Spaces gap={"40px"} />

      <StyledForm>
        <Input
          label="이메일"
          inputBorderColor="#dbdbdb"
          type="email"
          onChange={inputEmail}
          value={email}
          placeholder="이메일을 주소를 입력해 주세요."
          autoFocus={true}
        />
        {/* {emailErrMsg && <ErrMsg>{emailErrMsg}</ErrMsg>} */}
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
        <Link to="/profilesetting">
          <Button
            width="322px"
            padding="13px"
            backgroundColor="var(--disabled)"
            color="#fff"
          >
            다음
          </Button>
        </Link>
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
