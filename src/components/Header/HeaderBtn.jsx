import React from 'react'
// import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { CommonBtn } from '../../styles/GlobalStyle';

// 헤더 ===================================================

const Header = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  button {
    margin: 13px 16px;
    background: #fff;
    border-style: none;
  }

  /* 임시. 나중에 버튼 컴포넌트 사용할지도  */
  .btn-follow {
    border-radius: 32px;
    background: #237B46;
    /* 비 활성화 컬러 */
    /* background: #A7CAB5; */
    color: #fff;
    width: 90px;
    padding: 4px;
    font-size: 14px;
    
  }
  
`;
export default function HeaderProfile() {
  return (
<Header>
<button>
  <img src="images/icon-arrow-left.svg" alt="" />
</button>
<CommonBtn className="btn-follow" $w="90px" $h="32px">저장</CommonBtn>
</Header>
      );
    }