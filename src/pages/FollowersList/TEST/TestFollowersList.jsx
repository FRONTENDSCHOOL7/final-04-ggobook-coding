import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// 스타일드 컴포넌트 정의
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
async function fetchFollowersList(accountname, token) {
  const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follower`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('네트워크 응답이 올바르지 않습니다.');
    }

    const data = await response.json();
    return data; // 팔로워 데이터를 반환합니다.
  } catch (error) {
    console.error('팔로워 목록을 가져오는 중 에러가 발생했습니다:', error);
    throw error;
  }
}

// 팔로워 목록을 보여주는 컴포넌트
function Followers({ accountname }) {
  const [followers, setFollowers] = useState([]); // 팔로워 목록 상태
  const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰 가져오기

  useEffect(() => {
    fetchFollowersList(accountname, token).then(setFollowers).catch(console.error);
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

export default Followers;
