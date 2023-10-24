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


// section 1 ============================================

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


// section2 =====================================

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
        /* 추가본 */
        display: block;
    margin-bottom: 12px;
  }
  img{
      border-radius: 10px;
    }
`;


// section 3 ====================================

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
    
`;

// 그리드 레이아웃을 적용할 컴포넌트 추가
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 114px);
  gap: 10px;
  justify-content: center;
  border-top: 10px solid White;  /* 이 부분 추가 */
  padding-top: 10px;  /* border와 이미지 사이에 간격을 주기 위해 추가 */
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
      <Sect2>
      <h2>판매중인 상품</h2>
      <Sale>
        <div>
          <img src="https://via.placeholder.com/140x90" alt="" />
          <p>애월읍 노지 감귤</p>
          <span>35,000원</span>
        </div>
        <div>
          <img src="https://via.placeholder.com/140x90" alt="" />
          <p>애월읍 노지 감귤</p>
          <span>35,000원</span>
        </div>
        <div>
          <img src="https://via.placeholder.com/140x90" alt="" />
          <p>애월읍 노지 감귤</p>
          <span>35,000원</span>
        </div>
      </Sale>
    </Sect2>
    <Sect3>
      <div className="album-btns">
        <button>
          <img src="/images/icon-post-list-off.svg" alt="" />
        </button>
        <button>
          <img src="/images/icon-post-album-on.svg" alt="" />
        </button>
      </div>
      <ImageGrid>
          <img src="https://via.placeholder.com/114x114" alt="" />
          <img src="https://via.placeholder.com/114x114" alt="" />
          <img src="https://via.placeholder.com/114x114" alt="" />
          <img src="https://via.placeholder.com/114x114" alt="" />
          <img src="https://via.placeholder.com/114x114" alt="" />
          <img src="https://via.placeholder.com/114x114" alt="" />
          <img src="https://via.placeholder.com/114x114" alt="" />
          <img src="https://via.placeholder.com/114x114" alt="" />
          <img src="https://via.placeholder.com/114x114" alt="" />
          
        </ImageGrid>
    </Sect3>
      {/* 하단 */} 
      <Navigator /> 
    </HomeLayout>
  );
}