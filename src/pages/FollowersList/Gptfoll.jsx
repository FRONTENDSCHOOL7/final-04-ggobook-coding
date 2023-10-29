import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

// Follower 컴포넌트 스타일링
const FollowerLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0 16px 0;
  padding: 0 16px;

  h3 {
    padding-bottom: 6px;
    font-size: 14px;
  }

  p {
    font-size: 12px;
    color: #767676;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    width: 56px;
    height: 28px;
    border-radius: 26px;
    background: var(--mainColor);
    color: #fff;
    margin-left: auto;
    font-size: 12px;
  }
`;


function Follower({ imgSrc, name, id }) {
  return (
    <FollowerLayout>
      <img src={imgSrc} alt="사용자 프로필 사진" />
      <div>
        <h3>{name}</h3>
        <p>{id}</p>
      </div>
      <button>팔로우</button>
    </FollowerLayout>
  );
}

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzdjZGI2YjJjYjIwNTY2Mzg1ZjhlZCIsImV4cCI6MTcwMzM1MTM0MywiaWF0IjoxNjk4MTY3MzQzfQ.oJlrkrlk8XQSW17M24AL_csorLzsVXxvXzDc-3tFDyo";

// API 호출 함수
async function fetchFollowers(accountname, token, limit = 10, skip = 0) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follower/?limit=${limit}&skip=${skip}`;

  const headers = {
    "Authorization": `Bearer ${token}`,
    "Content-type": "application/json",
  };

  const response = await fetch(url, { method: "GET", headers: headers });

  if (!response.ok) {
    throw new Error('해당 계정이 존재하지 않습니다.');
  }

  return response.json();
}

// FollowersList 컴포넌트
export default function FollowersList({ accountname, token }) {
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFollowers() {
      try {
        const data = await fetchFollowers(accountname, token);
        setFollowers(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadFollowers();
  }, [accountname, token]);

  if (error) {
    return <div>{error}</div>;
  }

  <FollowersList accountname="account_name_here" token={TOKEN} />
  
  return (
    <>
      {followers.map(follower => (
        <Follower 
          key={follower._id}
          name={follower.username} 
          id={follower.accountname} 
          imgSrc={follower.image}
        />
      ))}
    </>
  );
}
