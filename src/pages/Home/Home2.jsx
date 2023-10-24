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


// 게시글===============================================


const Sect3 = styled.div`
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

export default function Home() {
  return (
    <HomeLayout>
      <HeaderHome />
      <Sect3>
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
                  <img src="images/s-icon-more-vertical.svg" alt="" />
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
                <img src="images/s-icon-more-vertical.svg" alt="" />
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
                  <img src="images/s-icon-more-vertical.svg" alt="" />
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
      <Navigator /> 
    </HomeLayout>
  );
}