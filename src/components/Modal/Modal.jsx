import React from "react";
import styled from "styled-components";

const ModalParent = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  max-width: 390px;
  width: 100%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalInner = styled.section`
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 252px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  p {
    padding: 20px 0;
    border-bottom: 0.5px solid #dbdbdb;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    position: relative;
    width: 100%;
    height: 46px;
    font-weight: 600;
    font-size: 14px;

    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      right: 0;
      top: 0;
      width: 0.5px;
      height: 46px;
      background-color: #dbdbdb;
    }
    &:last-child::before {
      content: none;
    }
    &:last-child {
      color: var(--mainColor);
    }
  }
`;

export default function Modal() {
  return (
    <ModalParent>
      <ModalInner>
        <p>게시글을 삭제할까요?</p>
        <ButtonWrap>
          <button type="button">취소</button>
          <button type="button">삭제</button>
        </ButtonWrap>
      </ModalInner>
    </ModalParent>
  );
}
