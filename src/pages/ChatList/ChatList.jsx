import React from "react";
import Chat from "./Chat";
import { styled } from "styled-components";
import KebabHeader from "../../components/Header/KebabHeader";
import Navigator from "../../components/Navigator/Navigator";

export default function ChatList() {
  const ChatListLayout = styled.div`
    padding-bottom: 80px;
    height: 100vh;
  `;
  return (
    <ChatListLayout>
      <KebabHeader />
      <Chat
        nickName={"애월읍 위니브 감귤농장"}
        msg={"이번에 정정 언제하맨마씸?"}
        date={"2020.10.25"}
      />
      <Chat
        nickName={"제주감귤마을"}
        msg={"깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지..."}
        date={"2020.10.21"}
      />
      <Chat
        nickName={"누구네 농장 친환경 한라봉"}
        msg={"내 차는 내가 평가한다. 오픈 이벤트에 참여 하..."}
        date={"2020.10.20"}
      />
      <Navigator />
    </ChatListLayout>
  );
}
