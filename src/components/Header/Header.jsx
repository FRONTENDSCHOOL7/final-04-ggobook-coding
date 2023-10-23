import React from 'react'
import styled from 'styled-components'
 
const HeaderLayout = styled.header`
    height: 48px;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid #DBDBDB;
    background: #FFF;

    img {
        width: 22px;
        height: 22px;
        margin: 0 10px 0 16px;
    }

    p {
      font-size: 14px;
      font-weight: 500;
    }

`

export default function Header() {
  return (
    <HeaderLayout>
        <img src="/images/icon-arrow-left.svg"></img> 
        <p>Followers</p>
    </HeaderLayout>
  )
}
