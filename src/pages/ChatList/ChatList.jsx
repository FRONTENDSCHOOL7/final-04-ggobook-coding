import React from "react";
import Chat from "./Chat";
import { styled } from "styled-components";
import KebabHeader from "../../components/Header/KebabHeader";
import Navigator from "../../components/Navigator/Navigator";
import { useNavigate } from "react-router-dom";

export default function ChatList() {
  const navigate = useNavigate();
  const ChatListLayout = styled.div`
    padding-bottom: 80px;
    height: 100vh;
  `;
  return (
    <ChatListLayout>
      <KebabHeader />
      <div
        onClick={(e) => {
          navigate("/chatroom");
        }}
      >
        <Chat
          nickName={"위니브 코딩팩토리"}
          msg={"안녕하세요~! 자바스크립트 코드리뷰 요청드..."}
          date={"2020.11.09"}
        />
        <Chat
          isChecked={"true"}
          nickName={"코딩마을"}
          msg={"11월 10일에 하는 프론트엔드 모임 자리 남..."}
          date={"2020.11.02"}
        />
        <Chat
          isChecked={"true"}
          nickName={"꼬북이네 코딩스쿨"}
          msg={"지금 git 충돌나는데 원인을 모르겠어요..."}
          date={"2020.10.30"}
        />
      </div>
      <Navigator />
    </ChatListLayout>
  );
}
