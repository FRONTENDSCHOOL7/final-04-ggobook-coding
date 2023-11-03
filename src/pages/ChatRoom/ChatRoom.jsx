import React from "react";
import ReceivedMsg from "./ReceivedMsg";
import SentMsg from "./SentMsg";
import InputMsg from "./InputMsg";
import { styled } from "styled-components";
import KebabHeader from "../../components/Header/KebabHeader";

export default function ChatRoom() {
  const ChatRoomayout = styled.div`
    height: 100vh;
  `;
  const ChatLayout = styled.div`
    padding: 20px 16px;
  `;

  return (
    <ChatRoomayout>
      <KebabHeader content={"애월읍 위니브 코딩팩토리"} />
      <ChatLayout>
        <ReceivedMsg
          msg={"안녕하세요~! 자바스크립트 코드리뷰 요청드려요."}
          time={"12:39"}
        />
        <ReceivedMsg
          msg={"https://github.com/FRONTENDSCHOOL7/final-04-ggobook-coding"}
          time={"12:41"}
        />
        <ReceivedMsg msg={"GitHub 링크 남길게요!"} time={"12:41"} />
        <SentMsg
          msg={"여기로 25,000원 입금해주시면 3일내로 코드리뷰 가능합니다."}
          time={"12:50"}
        />
      </ChatLayout>
      <InputMsg />
    </ChatRoomayout>
  );
}
