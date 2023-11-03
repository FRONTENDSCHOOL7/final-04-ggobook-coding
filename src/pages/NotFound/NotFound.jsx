import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { CommonBtn } from "../../styles/GlobalStyle";

export default function NotFound() {
  const navigate = useNavigate(); // useNavigate 초기화

    // 뒤로 가기 기능을 처리하는 함수
    const goBack = () => {
      navigate(-1); // 이전 페이지로 이동
    };

  const Page404Layout = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 158px;
      height: 158px;
      margin: 0 auto 30px;
    }

    p {
      color: #767676;
      text-align: center;
      font-size: 14px;
      margin-bottom: 20px;
    }

    button {
      width: 120px;
      height: 44px;
      border-radius: 44px;
      background-color: #237b46;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      margin: auto auto;
      display: block;
    }
  `;

  return (
    <Page404Layout>
      <div>
        <img src="/images/logo-404.svg" alt="사용자 프로필 사진" />
        <p>페이지를 찾을 수 없습니다. :(</p>
        <CommonBtn onClick={goBack}>이전 페이지</CommonBtn>
      </div>
    </Page404Layout>
  );
}
