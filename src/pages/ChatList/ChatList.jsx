import React from "react";
import Chat from "./Chat";
import { styled } from "styled-components";

export default function ChatList() {
  const ChatListLayout = styled.div`
    padding-bottom: 80px;
  `;
  return (
    <ChatListLayout>
      <Chat></Chat>
      <Chat></Chat>
      <Chat></Chat>
      <Chat></Chat>
      <Chat></Chat>
      <Chat></Chat>
    </ChatListLayout>
  );
}
