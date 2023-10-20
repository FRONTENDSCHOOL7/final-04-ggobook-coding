import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const NavLayout = styled.nav`
    border-top: 0.5px solid #DBDBDB;
    background: #FFF;
    padding: 12px 0 6px;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    max-width: 390px;

    li {
        display: flex;
        justify-content: space-around;
    }

    img {
        width: 24px;
        height: 24px;
        margin: 0 auto 4px;
    }

    a {
        text-align: center;
        text-decoration: none;
        font-size: 10px;
        color: #767676;
        line-height: 14px;
    }


`
export default function Navigator() {
  return (
    <NavLayout>
        <ul>
            <li>
                <a href="#">
                    <img src="/images/icon-home.svg"/>홈
                </a>
                <a href="#">
                    <img src="/images/icon-message-circle.svg"/>채팅
                </a>
                <a href="#">
                    <img src="/images/icon-edit.svg"/>게시글 작성
                </a>
                <a href="#">
                    <img src="/images/icon-user.svg"/>프로필
                </a>
            </li>
        </ul>
    </NavLayout>
  )
}
