import React from "react";
import styled from "styled-components";

/**
 * @param title modal 상단부 text
 * @param handleModalCancelButton 취소 버튼 클릭시 모달의 상태 입력 (배경 클릭시에도 사라짐)
 * @returns 공통부 Modal
 */
export default function Modal({ title, children, handleModalCancelButton }) {
  return (
    <ModalParent onClick={handleModalCancelButton}>
      <ModalInner onClick={(e) => e.stopPropagation()}>
        <p>{title}</p>
        <ButtonWrap>
          <button type="button" onClick={handleModalCancelButton}>
            취소
          </button>
          {children}
        </ButtonWrap>
      </ModalInner>
    </ModalParent>
  );
}

const ModalParent = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  max-width: var(--appWidth);
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
