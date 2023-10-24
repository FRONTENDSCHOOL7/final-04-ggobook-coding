import React from "react";
import styled from "styled-components";

import Navigator from "../../components/Navigator/Navigator";
import HeaderProfile from "../../components/Header/HeaderProfile";

// 총 배경 ================================================

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;




// section 1 =============================================
const Sect1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProImg = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 41px;
  text-align: center;
  button {
    background-color: #fff;
    border-style: none;
    span {
      font-size: 18px;
      font-weight: 700;
    }
    p {
      font-size: 10px;
      font-weight: 400;
      color: #767676;
    }
    .followers {
      color: black;
    }
  }
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 6px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #767676;
    margin-bottom: 16px;
  }
`;

const Btns = styled.div`
  display: flex;
  margin-top: 24px;
  /* 버튼 아래 마진 추가 */
  margin-bottom: 24px;
  justify-content: center;
  gap: 10px;
  button {
    border-radius: 30px;
    border: 1px solid var(--DBDBDB, #dbdbdb);
    padding: 7px;
    background-color: #fff;
  }
  .btn-follow {
    background: #237B46;
    color: #fff;
    width: 120px;
  }
`;

// section 2 =============================================

const Sect2 = styled.div`
  h2 {
    margin-top: 20px;
    margin-left: 18px;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
  }
`;

const Sale = styled.div`
  display: flex;
  margin-left: 18px;
  gap: 10px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    width: 140px;
    height: 90px;
  }
  p {
    margin-top: 6px;
    height: 6px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 12px;
  }
  span {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 700;
    color: #237B46;
    /* 판매상품 하단 간격 추가 */
    display: block;
    margin-bottom: 12px;
    
    
  }
  img{
      border-radius: 10px;
    }
`;


// section 3 =============================================

const Sect3 = styled.div`
  .album-btns {
    display: flex;
    justify-content: right;
    /* 중앙선 추가 */
    border-top: 6px solid var(--DBDBDB, #dbdbdb);
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
    /* 위아래 패딩 추가 */
    padding-top: 9px;
    padding-bottom: 9px;
  }
  button {
    background: #fff;
    border: none;
  }
  .content-container::-webkit-scrollbar {
    display: none;
  }
  .content-container {
    height: 500px;
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
  }

  img{
      border-radius: 10px;
    }
`;



export default function Profile() {
  return (
    <HomeLayout>
      <HeaderProfile />
      <Sect1>
        <ProImg>
          <button>
            <span className="followers">2950</span>
            <p>followers</p>
          </button>
          <img src="images/basic-profile-img-.svg" alt="" />
          <button>
            <span>128</span>
            <p>followings</p>
          </button>
        </ProImg>
        <Intro>
          <h2>애월읍 위니브 감귤농장</h2>
          <p>@ weniv_Mandarin</p>
          <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
        </Intro>
        <Btns>
          <button>
            <img src="images/icon-message-circle.svg" alt="" />
          </button>
          <button className="btn-follow">팔로우</button>
          <button>
            <img src="images/icon-share.svg" alt="" />
          </button>
        </Btns>
      </Sect1>

    <Sect3>
      <div className="album-btns">
        <button>
          <img src="/images/icon-post-list-on.svg" alt="" />
        </button>
        <button>
          <img src="/images/icon-post-album-off.svg" alt="" />
        </button>
      </div>
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
                  <img src="/images/s-icon-more-vertical.svg" alt="" />
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

      </div>
    </Sect3>
      {/* 하단 */} 
      <Navigator /> 
    </HomeLayout>
  );
}