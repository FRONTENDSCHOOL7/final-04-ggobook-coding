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
          nickName={"위니부 코딩팩토리"}
          msg={"안녕하세요~! 자바스크립트 코드리뷰 요청드..."}
          date={"2020.11.09"}
        />
        <Chat
          nickName={"애월읍 의니브 스터디 클럽"}
          msg={"이번에 코드리뷰 모임 언제하마씸?"}
          date={"2023.10.25"}
          image={"/images/niv.svg"}
        />
        <Chat
          isChecked={"true"}
          nickName={"니이로비 아지트"}
          msg={"팀원분들 전부 다 오시는건가요?"}
          date={"2023.11.01"}
        />
        <Chat
          isChecked={"true"}
          nickName={"최원빔"}
          msg={"나 개발 좋아하나?"}
          date={"2023.10.20"}
          image={"/images/gary.svg"}
        />
        <Chat
          nickName={"한재헌"}
          msg={"내일 수업 시작할 때 다시 설명드리겠습니다!"}
          date={"2023.11.03"}
          image={"/images/wade.svg"}
        />
        <Chat
          nickName={"응애코딩"}
          msg={"스터디원 다 구하셨나요?"}
          date={"2023.10.25"}

        />
      </div>
      <Navigator />
    </ChatListLayout>
  );
}
