import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CommonBtn } from '../../styles/GlobalStyle';

// 헤더 ===================================================

const HeaderLayout = styled.div`
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

  /* 임시. 나중에 버튼 컴포넌트 사용할지도  */
  .btn-follow {
    border-radius: 32px;
    background: #237B46;
    color: #fff;
    width: 90px;
    padding: 4px;
    font-size: 14px;

    /* 비활성화 컬러 추가 */
    &[disabled] {
    background-color: #A7CAB5; 
    cursor: not-allowed;
    }
  }
`;

export default function HeaderBtn({ onSubmitEdit,  btnState }) {
  const navigate = useNavigate(); // useNavigate hook을 사용하여 navigate 함수를 가져옴

  // 뒤로 가기 함수
  const goBack = () => {
    navigate(-1); // 뒤로 가기
  };


  return (
    <HeaderLayout>
      <button onClick={goBack}>
        <img src="images/icon-arrow-left.svg" alt="뒤로가기" />
      </button>
      <CommonBtn 
        className="btn-follow" 
        $w="90px" 
        $h="32px"
        onClick={onSubmitEdit}
        disabled={btnState}
      >
        저장
      </CommonBtn>
    </HeaderLayout>
  );
}