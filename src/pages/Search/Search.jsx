import React, { useCallback, useEffect, useRef, useState } from "react";
import User from "./User";
import styled from "styled-components";
import { getToken } from "../../utils/common";
import SearchHeader from "../../components/Header/SearchHeader";

export default function Search() {
  const URL = process.env.REACT_APP_API_URL;
  const [inputValue, setInputValue] = useState("");
  const [valueItems, setValueItems] = useState([]); //매칭된 user의 리스트
  const [selectedUser, setSelectedUser] = useState(null); //선택된 user 정보
  const inputFocusRef = useRef("");

  useEffect(() => {
    inputFocusRef.current.focus();
  }, []);

  //계정 검색
  const handleSearchInput = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  // search api 함수
  const handleSearch = useCallback(async () => {
    try {
      if (!inputValue) return;
      const res = await fetch(`${URL}/user/searchuser/?keyword=${inputValue}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      if (!res.ok) {
        throw new Error("네트워크 문제가 발생했어요.");
      }
      return res.json();
    } catch (error) {
      console.error("🚫데이터를 불러오는데 에러가 발생했어요", error);
    }
  }, [inputValue, getToken]);

  //받아온 데이터 업데이트
  const upDateData = useCallback(async () => {
    const searchRes = await handleSearch();
    console.log("searchRes", searchRes);

    //받아온 searchRes가 배열인지 조건 체크 (array 아닐수도 있으니까)
    if (Array.isArray(searchRes)) {
      const userRes = searchRes.filter(
        (list) => list.username.includes(inputValue) === true
      );
      console.log("userRes", userRes);
      setValueItems(userRes);
    }
  }, [inputValue, handleSearch]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (inputValue) upDateData();
    }, 200);
    return () => clearTimeout(delay);
  }, [inputValue, upDateData]); //inputValue 키워드 변경시 api 호출함

  return (
    <>
      <SearchHeader>
        <SearchBar
          className="searchInput"
          placeholder={"계정 검색"}
          value={inputValue}
          ref={inputFocusRef}
          onChange={handleSearchInput}
        />
      </SearchHeader>
      <SearchParent>
        {inputValue && <User inputValue={inputValue} valueItems={valueItems} />}
      </SearchParent>
    </>
  );
}

const SearchParent = styled.section`
  position: relative;
  top: 0;
  overflow: auto;
  height: 100vh;

  //스크롤바
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--mainColor); /* 스크롤바 막대 색상 */
    border: 2px solid var(--mainColor); /* 스크롤바 막대 테두리  */
    border-radius: 10px;
  }
`;

const SearchBar = styled.input`
  width: 316px;
  padding: 7px 16px;
  background-color: #f2f2f2;
  border-radius: 32px;
  color: #000;

  &::placeholder {
    color: #c4c4c4;
  }
`;