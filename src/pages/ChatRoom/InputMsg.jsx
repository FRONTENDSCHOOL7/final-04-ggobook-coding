import React from 'react'
import { styled } from 'styled-components'

export default function InputMsg() {
  
  const InputMsgLayout = styled.div`
    width: 390px;
    height: 60px;
    background-color: #FFF;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 16px;
    position: fixed;
    bottom: 0;

    img {
      width: 36px;
      height: 36px;
      margin-right: 18px;
    }

    button {
      color: #C4C4C4;
      font-size: 14px;
      white-space: nowrap;
    }
  ` 

  return (
    <InputMsgLayout>
      <img src="/images/img-button.svg" alt="사진 선택" />
      <input placeholder='메시지 입력하기...'></input>
      <button>전송</button>
    </InputMsgLayout>
  )
}
