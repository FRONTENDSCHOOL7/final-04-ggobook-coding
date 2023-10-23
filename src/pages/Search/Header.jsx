import React from "react";
import styled from "styled-components";

const HeaderLayout = styled.header`
  height: 52px;
  display: flex;
  align-items: center;
  border: 0.5px solid #dbdbdb;
  background: #fff;

  .pageBackImg {
    width: 22px;
    height: 22px;
    margin: 0 20px;
  }

  .searchInput {
    width: 316px;
    height: 32px;
    border-radius: 32px;
    background: #f2f2f2;
    padding-left: 16px;
  }
`;

export default function Header() {
  return (
    <HeaderLayout>
      <img className="pageBackImg" src="/images/icon-arrow-left.svg"></img>
      <input className="searchInput" placeholder="계정 검색"></input>
    </HeaderLayout>
  );
}
