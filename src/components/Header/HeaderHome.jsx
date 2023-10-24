import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

// 헤더 ===========================================================

// 헤더 배경
const HeaderLayout = styled.div`
  display: flex;
  padding: 13px 0;
  /* flex-direction: column; -> 필요 없는듯? */
  border-bottom: 0.5px solid #dbdbdb;
  justify-content: space-between;
  button {
    /* margin: 13px 16px; */
    background: #fff;
    border-style: none;
  }
  
`;

// 헤더 폰트
const HeaderTitle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  padding-left: 16px;
`
export default function HeaderHome() {
  return (
      <HeaderLayout>
        <HeaderTitle>감귤마켓 피드</HeaderTitle>
        <button>
        <img src="images/icon-search.svg" alt="" />
        </button>
      </HeaderLayout>
      );
    }