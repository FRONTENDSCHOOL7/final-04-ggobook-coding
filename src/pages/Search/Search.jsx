import React, { useCallback, useEffect, useRef, useState } from "react";
import User from "./User";
import Header from "./Header";
import styled from "styled-components";

export default function Search() {
  const URL = process.env.REACT_APP_API_URL;
  const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzdjZGI2YjJjYjIwNTY2Mzg1ZjhlZCIsImV4cCI6MTcwMzM1MTM0MywiaWF0IjoxNjk4MTY3MzQzfQ.oJlrkrlk8XQSW17M24AL_csorLzsVXxvXzDc-3tFDyo`;
  const [inputValue, setInputValue] = useState("");
  const [valueItems, setValueItems] = useState([]);
  const inputFocusRef = useRef("");

  useEffect(() => {
    inputFocusRef.current.focus();
  }, []);

  //계정 검색
  const handleSearchInput = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  //계정 검색 후 초기화
  // const handleRemoveInputValue = useCallback((e) => {
  //   if(e.key === "Enter") {
  //     setInputValue("");
  //   }
  // }, []);

  // search api 함수
  const handleSearch = useCallback(async () => {
    try {
      //input value 특수 문자 처리(url에 안전하지 않은 문자, 공백 포함될 수 있으므로 인코딩처리)
      if (!inputValue) return;
      const res = await fetch(
        `${URL}/user/searchuser/?keyword=${encodeURIComponent(inputValue)}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("네트워크 문제가 발생했어요.");
      }
      return res.json();
    } catch (error) {
      console.error("🚫데이터를 불러오는데 에러가 발생했어요", error);
    }
  }, [inputValue, TOKEN]);

  //받아온 데이터 업데이트
  const upDateData = useCallback(async () => {
    const searchRes = await handleSearch();
    console.log("serachRes", searchRes);

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
      <Header>
        {/* children 삽입부 */}
        <input
          className="searchInput"
          placeholder="계정 검색"
          value={inputValue}
          ref={inputFocusRef}
          onChange={handleSearchInput}
        />

        {/* button */}
        {/* <Button
          width="90px"
          height="32px"
          backgroundColor="var(--disabled)"
          color="#fff"
          type="submit"
          padding="7px"
        >
          등록
        </Button> */}
      </Header>
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