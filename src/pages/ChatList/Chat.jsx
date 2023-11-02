import React from "react";
import { styled } from "styled-components";

export default function Chat(props) {
  const ChatLayout = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 20px 0 16px 0;
    padding: 0 16px;
    position: relative;

    h3 {
      padding-bottom: 6px;
      font-size: 14px;
    }

    .msg {
      font-size: 12px;
      color: #767676;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .isChecked {
      position: absolute;
      transform: translateY(-15px);
      width: 12px;
      height: 12px;
      background-color: #237b46;
      border-radius: 50%;
    }

    .time {
      margin-top: auto;
      margin-left: auto;
      padding-bottom: 10px;
      color: #dbdbdb;
      font-size: 10px;
    }
  `;

  return (
    <>
      <ChatLayout>
        <div className="isChecked"></div>
        <img src="/images/img-profile-default.svg" alt="사용자 프로필 사진" />
        <div>
          <h3>{props.nickName}</h3>
          <p className="msg">{props.msg}</p>
        </div>
        <p className="time">{props.date}</p>
      </ChatLayout>
    </>
  );
}
