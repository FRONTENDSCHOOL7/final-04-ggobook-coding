import React from "react";
import { styled } from "styled-components";

export default function InputMsg() {
  const InputMsgLayout = styled.div`
    width: 390px;
    height: 60px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #dbdbdb;
    padding: 0 20px;

    img {
      width: 36px;
      height: 36px;
      margin-right: 18px;
    }

    button {
      color: #c4c4c4;
      font-size: 14px;
      white-space: nowrap;
    }
  `;

  return (
    <InputMsgLayout>
      <img src="/images/img-button.svg" alt="사진 선택" />
      <input placeholder="메시지 입력하기..."></input>
      <button>전송</button>
    </InputMsgLayout>
  );
}
