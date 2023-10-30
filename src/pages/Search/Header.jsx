import React, { useCallback } from "react";
import styled from "styled-components";
import { CommonBtn } from "../../styles/GlobalStyle";

/**
 * @param children
 * @returns 공통부 Header
 */
export default function Header({ children }) {
  const handlePageBack = useCallback(() => {
    // 클릭시 뒤로 가기 실행
  }, []);

  return (
    <HeaderLayout>
      <CommonBtn
        className="pageBackImg"
        $w="22px"
        $h="22px"
        $img="/images/icon-arrow-left.svg"
        alt="arrow-left"
        onClick={handlePageBack}
      />
      {children}
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  position: relative;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #dbdbdb;
  background: #fff;

  .pageBackImg {
    margin: 0 20px;
  }

  .searchInput {
    width: 316px;
    height: 32px;
    border-radius: 32px;
    background: #f2f2f2;
    padding-left: 16px;
    margin-right: 16px;
  }
`;
