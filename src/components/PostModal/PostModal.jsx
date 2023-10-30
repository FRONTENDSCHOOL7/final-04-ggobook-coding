import React from "react";
import styled from "styled-components";

/**
 * @param children
 * @returns PostModal 화면 하단부에 띄워지는 모달
 */
export default function PostModal({ children }) {
  return (
    <PostModalParent>
      <div className="spaceBar"></div>
      <PostModalInner>{children}</PostModalInner>
    </PostModalParent>
  );
}

const PostModalParent = styled.ul`
  z-index: 10;
  position: fixed;
  max-width: var(--appWidth);
  bottom: 0;
  background-color: #fff;
  width: 100%;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);

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
