import React from "react";
import styled from "styled-components";


// 바디
const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

// 헤더
const Top = styled.div`
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
  .btn-save {
    color: #fff;
    background: #6f76b6;
    padding: 7px 32px;
    border-radius: 32px;
  }
`;

const TopFollowers = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  button {
    margin: 13px 16px;
    background: #fff;
    border-style: none;
  }
  h2 {
    transform: translateY(-15%);
    font-size: 20px;
    margin-left: -5px;
  }
`;



// section 1
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
  justify-content: center;
  gap: 10px;
  button {
    border-radius: 30px;
    border: 1px solid var(--DBDBDB, #dbdbdb);
    padding: 7px;
    background-color: #fff;
  }
  .btn-follow {
    background: #fff;
    color: #DBDBDB;
    width: 120px;
  }
`;

// section1

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
  }
  img{
      border-radius: 10px;
    }
`;
// section 2

// section 3

const Sect3 = styled.div`
  .album-btns {
    display: flex;
    justify-content: right;
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
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


// 하단탭
const Tab = styled.div`
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
`;

export default function Profile() {
  return (
    <Body>
      <Top>
      <button>
        <img src="images/icon-arrow-left.svg" alt="" />
      </button>
      <button>
        <img src="images/s-icon-more-vertical.svg" alt="" />
      </button>
    </Top>
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
          <button className="btn-follow">언팔로우</button>
          <button>
            <img src="images/icon-share.svg" alt="" />
          </button>
        </Btns>
      </Sect1>

      <Tab>
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
    </Tab>
    </Body>
  );
}