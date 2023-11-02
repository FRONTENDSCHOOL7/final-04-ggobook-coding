import React from "react";
import { styled } from "styled-components";

export default function ReceivedMsg({ msg, time }) {
  const ReceivedMsgLayout = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 9px;

    img {
      width: 42px;
      height: 42px;
      border-radius: 42px;
      border: 0.5px solid #dbdbdb;
      margin-bottom: auto;
    }
    .msg {
      border-radius: 0 10px 10px 10px;
      border: solid 1px #c4c4c4;
      font-size: 14px;
      padding: 12px;
      margin: 0 6px 0 12px;
    }
    .time {
      color: #767676;
      font-size: 10px;
      margin-top: auto;
    }
  `;
  return (
    <ReceivedMsgLayout>
      <img src="/images/img-profile-default.svg" alt="사용자 프로필 사진" />
      <p className="msg">{msg}</p>
      <p className="time">{time}</p>
    </ReceivedMsgLayout>
  );
}
