import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'

// 헤더 ===================================================

const HeaderLayout = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
  button {
    margin: 13px 16px;
    background: #fff;
    border-style: none;
  }
`

const HeaderTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  padding-left: 8px;

`;
export default function HeaderProfile() {
  const navigate = useNavigate(); // useNavigate hook을 사용하여 navigate 함수를 가져옴

  // 뒤로 가기 함수
  const goBack = () => {
    navigate(-1); // 뒤로 가기
  };

  return (
    <HeaderLayout>
      {/* onClick 이벤트에 goBack 함수를 연결 */}
      <button onClick={goBack}> 
        <img src="images/icon-arrow-left.svg" alt="Go back" />
      </button>
      <HeaderTitle>Followers</HeaderTitle>
    </HeaderLayout>
  );
}