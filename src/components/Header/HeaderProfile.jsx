import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

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
  /* 삭제 할듯 */
  /* .btn-save {
    color: #fff;
    background: #6f76b6;
    padding: 7px 32px;
    border-radius: 32px;
  } */
`;
export default function HeaderProfile() {
  return (
<Header>
<button>
  <img src="images/icon-arrow-left.svg" alt="" />
</button>
<button>
  <img src="images/s-icon-more-vertical.svg" alt="" />
</button>
</Header>
      );
    }