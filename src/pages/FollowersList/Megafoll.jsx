import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 스타일 컴포넌트 정의
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

// API 호출 함수
async function fetchFollowerList(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follower`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data; // 팔로워 데이터를 반환합니다.
  } catch (error) {
    console.error('Error fetching follower list:', error);
    throw error;
  }
}



// 팔로워 목록을 표시하는 컴포넌트
export default function FollowersList({ accountname }) {
  const [followers, setFollowers] = useState([]); // 팔로워 목록을 담을 상태입니다.
  const token = localStorage.getItem('token'); // 토큰을 가져옵니다.

  useEffect(() => {
    fetchFollowerList(accountname, token).then(setFollowers).catch(console.error);
  }, [accountname, token]);

  return (
    <>
      {followers.map(follower => (
        <FollowerLayout key={follower._id}>
          <img src={follower.image} alt={`${follower.username}의 프로필 사진`} />
          <div>
            <h3>{follower.username}</h3>
            <p>{follower.intro}</p>
          </div>
          <button>{follower.isfollow ? '언팔로우' : '팔로우'}</button>
        </FollowerLayout>
      ))}
    </>
  );
}
