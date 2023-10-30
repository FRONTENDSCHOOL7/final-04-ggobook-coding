import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Navigator from "../../components/Navigator/Navigator";
import HeaderHome from "../../components/Header/HeaderHome";
import Post from "../../components/Post/Post";

// 총 배경 ========================================================

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

// 게시글===============================================

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

export default function Home() {
  const [posts, setPosts] = useState([]);

  const URL = "https://api.mandarin.weniv.co.kr";
  const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzdjZGI2YjJjYjIwNTY2Mzg1ZjhlZCIsImV4cCI6MTcwMzM1MTM0MywiaWF0IjoxNjk4MTY3MzQzfQ.oJlrkrlk8XQSW17M24AL_csorLzsVXxvXzDc-3tFDyo`;

  //post 조회
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${URL}/post`, {
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
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
  }, []);

  //초기값 없을 경우 예외처리
  if (!posts) return;

  return (
    <HomeLayout>
      <HeaderHome />
      <Sect3>
        {/* 게시글 목록 */}
        <div className="content-container">
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </Sect3>
      {/* 하단 */}
      <Navigator />
    </HomeLayout>
  );
}
