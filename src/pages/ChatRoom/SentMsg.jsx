import React from "react";
import { styled } from "styled-components";

export default function SentMsg({ msg, time }) {
  const SentMsgLayout = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 9px;

    img {
      width: 240px;
      height: 240px;
      border-radius: 10px;
    }
    .msg {
      background-color: var(--mainColor);
      color: #fff;
      border-radius: 10px 0 10px 10px;
      font-size: 14px;
      padding: 12px;
      word-break: break-all;
    }
    .time {
      color: #767676;
      font-size: 10px;
      margin: auto 6px 0 auto;
    }
  `;
  return (
    <>
      <SentMsgLayout>
        <p className="time">{time}</p>
        <img src="/images/QR-code.svg" alt="계좌QR코드" />
      </SentMsgLayout>
      <SentMsgLayout>
        <p className="time">{time}</p>
        <p className="msg">{msg}</p>
      </SentMsgLayout>
    </>
  );
}
