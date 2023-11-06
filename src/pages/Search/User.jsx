import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

/**
 * @param inputValue input 입력값
 * @param valueItems data내 단일 객체
 * @returns User 유저검색시 매칭되어 나오는 User의 목록
 */
export default function User({ inputValue, valueItems }) {
  const URL = "https://api.mandarin.weniv.co.kr";
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null); //선택한 user

  useEffect(() => {
    if(selectedUser) navigate(`/profile/${selectedUser}`);
  }, [selectedUser]);

  //클릭했을 때 선택한 user의 id로 이동
  const handelUserProfile = useCallback((selectedItem) => {
    setSelectedUser(selectedItem.accountname);
  }, []);


  //프로필 이미지 조건 처리
  const userProfileImg = useCallback((imgPath) => {
    const regExp = /heroku|undefined|null|blob|mandarin.api|Ellipse/;
    const errorPaths = [
      "http://146.56.183.55:5050/Ellipse.png",
      "https://mandarin.api.weniv.co.kr/", //잘못된 api주소
    ];
    // errorPaths의 조건에 부합할 경우
    if(errorPaths.includes(imgPath) === true) {
      return `https://api.mandarin.weniv.co.kr/Ellipse.png`;
    }
    //http로 시작하지 않는 이미지
    if(!imgPath.startsWith("http")) {
      return `https://api.mandarin.weniv.co.kr/Ellipse.png`;
    }
    if(regExp.test(imgPath)) {
      return `https://api.mandarin.weniv.co.kr/Ellipse.png`;
    }
    return imgPath;
  }, []);

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
      {valueItems.length === 0 && (
        <NoticeText>
          조건에 맞는 계정이
          <br /> 없어요😥
        </NoticeText>
      )}
      {valueItems.map((item) => {
        return (
          <UserLayout onClick={()=>handelUserProfile(item)} key={item._id}>
            <img src={userProfileImg(item.image)} alt={item.username} />
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
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #dbdbdb;
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
