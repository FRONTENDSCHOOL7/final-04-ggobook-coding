import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'

// import Header from "../../components/Header/Header";
// import { HomeLayout, MiddleSearch, Button} from "./HomeStyle";


// 총 배경 ========================================================

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

// 헤더 ===========================================================

// 헤더 배경
const HeaderLayout = styled.div`
  display: flex;
  padding: 13px 0;
  /* flex-direction: column; -> 필요 없는듯? */
  border-bottom: 0.5px solid #dbdbdb;
  
`;

// 헤더 폰트
const HeaderTitle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  padding-left: 16px;
`

// 헤더 찾기 아이콘
const SearchImg = styled.img`
  margin-left: auto;
  padding-right: 16px;
  width: 24px;
  height: 24px;
`;

// 중앙 검색대 ===================================================


const MiddleSearch = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: block; 
  font-size: 14px;

  img{
    margin-bottom: 20px;
    margin-left: auto;
  margin-right: auto;
  display: block; 
  width: 100px;
  height: 100px;  
  /* 높이를 얼만치 해야하나... */
  margin-top: 150px
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


// 하단 ==========================================================

const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 0.5px solid #dbdbdb;
  /* 이게 왜 됨..? */
  position: fixed;
  bottom: 0;
  padding: 12px 0 6px;
  width: 100%;

  /* 오류 생길걸로 예상되는 코드 */
  max-width: 320px;
  /* --------------------------- */
  button {
    background: #fff;
    border-style: none;
    margin-top: 12px;
    img {
      width: 24px;
      height: 24px;
      margin: 0 auto 4px;
    }
  }

  p {
    font-size: 10px;
    font-weight: 400;
    margin-top: 4px;
  }
`



export default function Home() {
  return (
    <HomeLayout>
      {/* 헤더 */}
      <HeaderLayout>
        <HeaderTitle>감귤마켓 피드</HeaderTitle>
        <SearchImg img src="/images/icon-search.svg" alt="" />
      </HeaderLayout>

      {/* 중앙  */}
      <MiddleSearch>
        <img src="/images/symbol-logo-gray.svg" alt="" />
        유저를 검색해 팔로우 해보세요!</MiddleSearch>
        <Button>
        <button className="btn-search">검색하기</button>
        </Button>

      {/* 하단 */} 
      <Bottom>
      <button>
        <img src="images/icon-home.svg" alt="" />
        <p>홈</p>
      </button>
      <button>
        <img src="images/icon-message-circle-1.svg" alt="" />
        <p>채팅</p>
      </button>
      <button>
        <img src="images/icon-edit.svg" alt="" />
        <p>게시물 작성</p>
      </button>
      <button>
        <img src="images/icon-user.svg" alt="" />
        <p>프로필</p>
      </button>
      </Bottom>
    </HomeLayout>
  );
}

