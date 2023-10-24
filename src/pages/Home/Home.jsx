import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'

import Navigator from "../../components/Navigator/Navigator";
import HeaderHome from "../../components/Header/HeaderHome";




// 총 배경 ========================================================

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;


const MiddleSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh; // 100에서 자연스러워 보이는 부분으로 변경했음
  font-size: 14px;

  img {
    margin-bottom: 20px;
    width: 100px;
    height: 100px;
  }
`


const Button = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: center;
  gap: 10px;
  button{
    border-radius: 30px;
    border: 1px solid var(--DBDBDB, #dbdbdb);
    padding: 7px;
    background-color: #fff;
  }
  .btn-search{
    background: #237b46;
    color: #fff;
    width: 120px;
  }
  `

export default function Home() {
  return (
    <HomeLayout>
      <HeaderHome />
      <MiddleSearch>
        <img src="/images/symbol-logo-gray.svg" alt="" />
        <div style={{ color: "#767676" }}>유저를 검색해 팔로우 해보세요!</div>
        <Button>
          <button className="btn-search">검색하기</button>
        </Button>
        </MiddleSearch>
      <Navigator /> 
    </HomeLayout>
  );
}

