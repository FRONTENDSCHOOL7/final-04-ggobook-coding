import React, { useCallback } from "react";
import styled from "styled-components";

const test = (e) => {
  console.log("클릭되었습니다");
};

/**
 * @param inputValue input 입력값
 * @param valueItems data내 단일 객체
 * @returns User 유저검색시 매칭되어 나오는 User의 목록
  #TODO 버튼으로 할지 아니면 router Link로 페이지 이동해야하는지
*/
export default function User({ inputValue, valueItems }) {
  console.log("valueItems", inputValue, valueItems);

  //매칭 글자 하이라이트
  //inputValue(input 입력값), colorValue(하이라이트 글씨)
  const highLightText = useCallback((text, colorValue) => {
    const parts = text.split(new RegExp(`(${colorValue})`, "gi"));
    console.log("parts", parts);
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === colorValue.toLowerCase() ? (
            <span
              key={index}
              style={{ color: "var(--mainColor)", fontWeight: 900 }}
            >
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  }, []);

  return (
    <UserParent>
      {valueItems.length === 0 && <NoticeText>조건에 맞는 계정이<br/> 없어요😥</NoticeText>}
      {valueItems.map((item) => {
        return (
          <UserLayout onClick={test} key={item._id}>
            <img src={item.image} alt="" />
            <div>
              <h3>{highLightText(item.username, inputValue)}</h3>
              <p>{item.accountname}</p>
            </div>
          </UserLayout>
        );
      })}
    </UserParent>
  );
}

const UserParent = styled.section``;

const UserLayout = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  margin: 20px 0 16px 0;
  padding: 0 16px;
  text-align: left;

  h3 {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
`;

const NoticeText = styled.p`
  font-size: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  text-align: center;

`;