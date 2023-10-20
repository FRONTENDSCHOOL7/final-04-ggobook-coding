import React from "react";
import styled from "styled-components";

const PostModalParent = styled.ul`
  position: fixed;
  max-width: 390px;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  border-radius: 10px 10px 0 0;

  .spaceBar {
    content: "";
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 4px;
    background-color: #dbdbdb;
    margin: 16px 0;
  }
`;

const PostModalInner = styled.li`
  position: relative;
  button {
    width: 100%;
    text-align: left;
    padding: 14px 0 14px 26px;
    font-weight: 600;
  }
`;

export default function PostModal() {
  return (
    <PostModalParent>
      <div className="spaceBar"></div>
      <PostModalInner>
        <button>신고하기</button>
      </PostModalInner>
      {/* <PostModalInner>
        <button>신고하기</button>
      </PostModalInner> */}
    </PostModalParent>
  );
}
