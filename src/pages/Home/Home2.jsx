import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Navigator from "../../components/Navigator/Navigator";
import HeaderHome from "../../components/Header/HeaderHome";
import Post from "../../components/Post/Post";

//총 배경 ========================================================

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

//게시글===============================================

const Sect3 = styled.div`
  .content-container::-webkit-scrollbar {
    display: none;
  }
  .content-container {
    height: 600px;
    overflow-y: scroll;
    overflow-x: visible;
    display: flex;
    flex-direction: column;
    margin: 16px 16px 0;
  }
`;

//팔로우 한 User가 없을 때===============================================
const MiddleSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh; //100에서 자연스러워 보이는 부분으로 변경했음
  font-size: 14px;

  img {
    margin-bottom: 20px;
    width: 100px;
    height: 100px;
  }
`;

const Button = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: center;
  gap: 10px;
  button {
    border-radius: 30px;
    border: 1px solid var(--DBDBDB, #dbdbdb);
    padding: 7px;
    background-color: #fff;
  }
  .btn-search {
    background: #237b46;
    color: #fff;
    width: 120px;
  }
`;

export default function Home() {
  const [posts, setPosts] = useState([]);

  const URL = "https://api.mandarin.weniv.co.kr";
  const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzdjZGI2YjJjYjIwNTY2Mzg1ZjhlZCIsImV4cCI6MTcwMzM1MTM0MywiaWF0IjoxNjk4MTY3MzQzfQ.oJlrkrlk8XQSW17M24AL_csorLzsVXxvXzDc-3tFDyo`;

  //post 조회
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${URL}/post/feed`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("데이터를 불러올 수 없습니다.");
        }

        const data = await response.json();
        setPosts(data.posts);
        // console.log(posts);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, []);

  //팔로우한 유저가 없을 경우
  if (posts.length === 0) {
    return (
      <HomeLayout>
        <HeaderHome />
        <MiddleSearch>
          <img src="/images/symbol-logo-gray.svg" alt="" />
          <div style={{ color: "#767676" }}>유저를 검색해 팔로우 해보세요!</div>
          <Button>
            <button className="btn-search">검색하기</button>
          </Button>
        </MiddleSearch>
        <Navigator />
      </HomeLayout>
    );
  }

  //팔로우한 유저가 있을 경우
  return (
    <HomeLayout>
      <HeaderHome />
      <Sect3>
        {/* 게시글 목록 */}
        <div className="content-container">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </Sect3>
      {/* 하단 */}
      <Navigator />
    </HomeLayout>
  );
}
