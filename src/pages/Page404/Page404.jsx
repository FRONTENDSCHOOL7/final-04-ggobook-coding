import React from 'react'
import { styled } from 'styled-components'

export default function Page404() {
    const Page404Layout = styled.div`

        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 158px;
            height: 158px;
            margin: 0 auto 30px ;
        }

        p {
            color: #767676;
            text-align: center;
            font-size: 14px;
            margin-bottom: 20px;
        }

        button {
            width: 120px;
            height: 44px;
            border-radius: 44px;
            background-color: #237B46;
            color: #FFF;
            font-size: 14px;
            font-weight: 500;
            margin: auto auto;
            display: block;
        }
    `

  return (
    <Page404Layout>
        <div>
            <img src="/images/img-profile-default.svg" alt="사용자 프로필 사진" />
            <p>페이지를 찾을 수 없습니다. :(</p>
            <button>이전 페이지</button>
        </div>
    </Page404Layout>
  )
}
