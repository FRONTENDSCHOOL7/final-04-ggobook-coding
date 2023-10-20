import React from "react";
import styled from "styled-components";
import { CommonImgThumbnail } from "../../styles/GlobalStyle";

const LayoutAddProduct = styled.ul`
  padding-top: 48px;
  label,
  input {
    display: block;
  }

  input {
    height: 30px;
    margin-top: 10px;
    border-bottom: 2px solid var(--disabled);
    &:focus {
      outline: none;
      border: none;
      border-bottom: 2px solid var(--mainColor);
    }
  }

  label {
    font-size: 12px;
    line-height: 14px;
    color: #767676;
    margin-bottom: 18px;
  }
`;

const LayoutInner = styled.li`
  position: relative;

  button {
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
  &:nth-of-type(1) {
    margin-bottom: 30px;
  }
  &:nth-child(n + 1) {
    margin-bottom: 16px;
  }
`;

export default function AddProduct() {
  return (
    <>
      <LayoutAddProduct>
        <LayoutInner>
          <label htmlFor="">이미지 등록</label>
          <CommonImgThumbnail src="" alt="" />
          <button type="button">저장</button>
        </LayoutInner>

        <LayoutInner>
          <label htmlFor="">
            상품명
            <input type="text" placeholder="2~15자 이내여야합니다." />
          </label>
        </LayoutInner>
        <LayoutInner>
          <label htmlFor="">
            가격
            <input type="number" placeholder="숫자만 입력가능합니다." />
          </label>
        </LayoutInner>
        <LayoutInner>
          <label htmlFor="">
            판매 링크
            <input type="text" placeholder="URL을 입력해주세요" />
          </label>
        </LayoutInner>
      </LayoutAddProduct>
    </>
  );
}
