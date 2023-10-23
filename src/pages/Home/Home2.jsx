import React from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom'


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

// 게시글=================================================================


const Sect3 = styled.div`
  /* .album-btns {
    display: flex;
    justify-content: right;
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  }
  button {
    background: #fff;
    border: none;
  } */
  .content-container::-webkit-scrollbar {
    display: none;
  }
  .content-container {
    height: 600px;
    overflow-y: scroll;
    overflow-x: visible;
    display: flex;
    flex-direction: column;
    margin: 16px 16px 0;
    .content-list {
      display: flex;
      gap: 12px;
      margin-top: 12px;
    }
    .profile-img {
      width: 42px;
      height: 42px;
    }
    .content-title {
      display: flex;
      justify-content: space-between;
    }
    .content-id {
      h3 {
        margin-top: 2px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 600;
      }
      p {
        margin-top: 6px;
        margin-bottom: 16px;
        font-size: 12px;
        font-weight: 400;
        color: var(--767676, #767676);
      }
    }
    .content {
      display: flex;
      flex-direction: column;
    }
    .content-inner {
      font-size: 14px;
      font-weight: 400;
      p {
        margin-bottom: 16px;
      }
    }
    .like-comment {
      display: flex;
      button {
        display: flex;
        align-items: center;
        span {
          margin-left: 4px;
          margin-right: 4px;
          color: #767676;
        }
      }
    }
    .date {
      margin-top: 20px;
      color: #767676;
      font-size: 10px;
      font-weight: 400;
    }

    img{
      border-radius: 10px;
    }
  }
`;

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
      <Sect3>
      {/* <div className="album-btns">
        <button>
          <img src="/images/icon-post-list-on.svg" alt="" />
        </button>
        <button>
          <img src="/images/icon-post-album-off.svg" alt="" />
        </button>
      </div> */}
      {/* 게시글 목록 */}
      <div className="content-container">
        {/* 게시글 한개 */}
        <div className="content-list">
          <img src="/images/basic-profile.svg" alt="" className="profile-img" />
          <div className="content">
            <div className="content-title">
              <div className="content-id">
                <h3>애월읍 위니브 감귤농장</h3>
                <p>@ weniv_Mandarin</p>
              </div>
              <div>
                <button>
                  <img src="/images/basic-profile.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="content-inner">
              <p>
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </p>
              <img src="https://via.placeholder.com/304x228" alt="" />
            </div>
            <div className="like-comment">
              <button>
                <img src="/images/icon-heart.svg" alt="" /> <span>58</span>
              </button>
              <button>
                <img src="/images/icon-message-circle.svg" alt="" /> <span>12</span>
              </button>
            </div>
            <span className="date">2020년 10월 21일</span>
          </div>
        </div>
        {/* //게시글 한개 */}
        {/* 게시글 한개 */}
        <div className="content-list">
          <img src="/images/basic-profile.svg" alt="" className="profile-img" />
          <div className="content">
            <div className="content-title">
              <div className="content-id">
                <h3>서귀포시 한라봉 타운</h3>
                <p>@ hanlabong22</p>
              </div>
              <div>
                <button>
                  <img src="/images/basic-profile.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="content-inner">
              <p>
                감귤 잘 자라는 중....! 
              </p>
              <img src="https://via.placeholder.com/304x228" alt="" />
            </div>
            <div className="like-comment">
              <button>
                <img src="/images/icon-heart.svg" alt="" /> <span>58</span>
              </button>
              <button>
                <img src="/images/icon-message-circle.svg" alt="" /> <span>12</span>
              </button>
            </div>
            <span className="date">2020년 10월 21일</span>
          </div>
        </div>
        {/* //게시글 한개 */}
        {/* 게시글 한개 */}
        <div className="content-list">
          <img src="/images/basic-profile.svg" alt="" className="profile-img" />
          <div className="content">
            <div className="content-title">
              <div className="content-id">
                <h3>애월읍 위니브 감귤농장</h3>
                <p>@ weniv_Mandarin</p>
              </div>
              <div>
                <button>
                  <img src="/images/basic-profile.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="content-inner">
              <p>
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </p>
            </div>
            <div className="like-comment">
              <button>
                <img src="/images/icon-heart.svg" alt="" /> <span>58</span>
              </button>
              <button>
                <img src="/images/icon-message-circle.svg" alt="" /> <span>12</span>
              </button>
            </div>
            <span className="date">2020년 10월 21일</span>
          </div>
        </div>
        {/* //게시글 한개 */}
        
      </div>
    </Sect3>
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