import React, { useState } from "react";
import { styled } from "styled-components";

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
    color: var(--mainColor);
    font-size: 14px;
    white-space: nowrap;
  }

  button:disabled {
    color: #c4c4c4;
  }
`;

export default function InputMsg() {
  const [inputTxt, setInputTxt] = useState("");

  return (
    <InputMsgLayout>
      <img src="/images/img-button.svg" alt="사진 선택" />
      <input
        value={inputTxt}
        onChange={(e) => {
          setInputTxt(e.target.value);
        }}
        placeholder="메시지 입력하기..."
      ></input>
      <button disabled={!inputTxt}>전송</button>
    </InputMsgLayout>
  );
}
