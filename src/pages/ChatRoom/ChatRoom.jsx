import React from "react";
import ReceivedMsg from "./ReceivedMsg";
import SentMsg from "./SentMsg";
import { styled } from "styled-components";

export default function ChatRoom() {
  const ChatRoomLayout = styled.div`
    margin: 20px 16px;
  `;

  return (
    <ChatRoomLayout>
      <ReceivedMsg
        msg={
          "옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다."
        }
        time={"12:39"}
      />
      <ReceivedMsg msg={"안녕하세요. 감귤 사고싶어요요요요요"} time={"12:41"} />
      <SentMsg msg={"네 말씀하세요."} time={"12:50"} />
    </ChatRoomLayout>
  );
}
