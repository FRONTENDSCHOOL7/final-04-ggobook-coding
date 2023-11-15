import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { CommonBtn, CommonImgLayout } from "../../styles/GlobalStyle";

const PostParent = styled.section`
  padding-bottom: 40px;
`;
const LayoutPost = styled.article`
  padding: 0 15px;
  padding-top: ${(props) => `${props.$space}` || `${48}`};
  display: flex;
  padding-bottom: 20px;

  .imgProfile {
    width: 42px;
    margin-right: 12px;
  }
  .btnPost {
    white-space: nowrap;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

const UserPost = styled.ul`
  width: calc(100% - 50px);
  color: #767676;
  font-size: 14px;
`;
const PostInforInner = styled.li`
  display: flex;
  align-items: ${(props) => props.$position};
  margin-bottom: 16px;
  h3 {
    margin-bottom: 5px;
    color: #000;
    font-weight: 700;
  }
  .userNickname {
    font-size: 12px;
  }
  .explanation {
    margin-left: 54px;
  }
  .subTxt {
    color: #000;
  }

  &:last-child {
    margin-bottom: 0;
  }
  .mySwiper {
    overflow: hidden;
    .swiper-pagination-bullet {
      background-color: var(--mainColor) !important;
    }
  }
`;

const BtnPostWrap = styled.span`
  display: flex;
  align-items: center;
  &:last-child {
    margin-left: 15px;
  }
`;

//코멘트-게시글
const CommentPost = styled.p`
  color: #333;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.$clamp};
`;

//코멘트-댓글
// const Comment = styled.li`
//   p {
//     color: #333;
//     font-size: 14px;
//     overflow: hidden;
//     display: -webkit-box;
//     -webkit-box-orient: vertical;
//     -webkit-line-clamp: ${(props) => props.$clamp};
//   }
// `;

const CommentLi = styled.li`
  display: flex;
  margin-bottom: 16px;
  width: 358px;

  div {
    width: 100%;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    border: 0.5px solid var(--DBDBDB, #dbdbdb);
    background: lightgray 50% / cover no-repeat;
  }
  .commentHeader {
    display: flex;
    align-items: center;
    gap: 6px;

    h3 {
      color: #000;
    }

    p {
      color: var(--767676, #767676);
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  .commentText {
    margin-top: 16px;
    color: #333;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;

//하단 댓글입력하기 영역
const CommentUpLoadWrap = styled.div`
  position: fixed;
  max-width: 390px;
  width: 100%;
  height: 60px;
  padding: 8px 0;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid #c4c4c4;
  input {
    height: 40px;
    &::placeholder {
      color: #c4c4c4;
    }
  }
  button {
    font-weight: 900;
    color: #c4c4c4;
  }
`;

export default function Post() {
  // ============= POSTS(게시글) 시작 =============
  const [post, setPost] = useState(null);
  const [inputComment, setInputComment] = useState("");
  const [comments, setComments] = useState([]);

  const URL = "https://api.mandarin.weniv.co.kr";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzc0N2I4YjJjYjIwNTY2Mzg1YWI1NCIsImV4cCI6MTcwMzMwNTcxMSwiaWF0IjoxNjk4MTIxNzExfQ.brpNyCu-V5BFPyXv7A4SN8JkuZgnW9M2OL8eLvyj1Uo";
  const postId = "6539bee0b2cb205663877b85";

  //post 조회
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${URL}/post/${postId}`, {
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
        setPost(data.post);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPosts();
    fetchComments();
  }, []);

  //post 삭제
  const handleDelPost = () => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    fetch(`${URL}/post/${postId}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("게시물을 삭제하는 데 실패했습니다.");
        }
        return response.json();
      })
      .then((data) => {
        // ???? 삭제 후 처리 해줘야 함

        console.log(data);
        console.log("게시물을 성공적으로 삭제했습니다.");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //초기값 없을 경우 예외처리
  if (!post) return;

  //날짜포멧 맞추기 (YYYY년 MM월 DD일)
  let postDate = post.updatedAt;
  postDate = `${postDate.substring(0, 4)}년 ${postDate.substring(
    5,
    7
  )}월 ${postDate.substring(8, 10)}일`;

  // ============= POSTS(게시글) 끝 =============

  // ============= COMMENTS(댓글) 시작 =============
  //댓글 입력
  const handlePostComments = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: {
          content: inputComment,
        },
      }),
    };

    fetch(`${URL}/post/${postId}/comments`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("댓글을 작성하는 데 실패했습니다.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("comments", data);
        console.log("댓글을 성공적으로 작성했습니다.");
        fetchComments();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //댓글 조회
  async function fetchComments() {
    try {
      const response = await fetch(`${URL}/post/${postId}/comments`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("댓글을 불러올 수 없습니다.");
      }

      const data = await response.json();
      setComments(data.comments);
      console.log(data.comments);
    } catch (error) {
      console.error(error);
    }
  }

  // ============= COMMENTS(댓글) 끝 =============

  const postProps = {
    username: post.author.username,
    accountname: post.author.accountname,
    handleDelpost: handleDelPost,
    content: post.content,
    image: post.image,
    heartCount: post.heartCount,
    commentCount: post.commentCount,
    postDate: postDate,
  };
  return (
    <>
      <PostParent>
        <LayoutPost $space="48px">
          <div>
            <img
              className="imgProfile"
              src="/images/img-profile-default.svg"
              alt="profile"
            />
          </div>
          <UserPost>
            <PostInforInner>
              <div>
                <h3>{post.author.username}</h3>
                <p className="userNickname">{post.author.accountname}</p>
              </div>
              <CommonBtn
                type="button"
                $img="/images/s-icon-more-vertical.svg"
                $w="24px"
                $h="24px"
                alt="more-vertical"
                onClick={handleDelPost}
              />
            </PostInforInner>
            <PostInforInner>
              <CommentPost $clamp="0">{post.content}</CommentPost>
            </PostInforInner>
            <PostInforInner>
              <Swiper
                pagination={true}
                modules={[Pagination]}
                spaceBetween={0}
                className="mySwiper"
              >
                <SwiperSlide>
                  <CommonImgLayout
                    $w="304px"
                    $h="228px"
                    src={
                      post.image === ""
                        ? null
                        : post.image.replace(
                            "uploadFiles/",
                            "https://api.mandarin.weniv.co.kr/"
                          )
                    }
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <CommonImgLayout
                    $w="304px"
                    $h="228px"
                    src="https://cdn.pixabay.com/photo/2021/05/15/10/07/zookti-6255408_640.jpg"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </PostInforInner>
            <PostInforInner>
              <BtnPostWrap>
                <CommonBtn
                  type="button"
                  $img="/images/icon-heart.svg"
                  $w="20px"
                  $h="20px"
                  alt="heart"
                />
                <span>{post.heartCount}</span>
              </BtnPostWrap>
              <BtnPostWrap>
                <CommonBtn
                  type="button"
                  $img="/images/icon-message-circle.svg"
                  $w="20px"
                  $h="20px"
                  alt="message-circle"
                />
                <span>{post.commentCount}</span>
              </BtnPostWrap>
            </PostInforInner>
            <PostInforInner>{postDate}</PostInforInner>
          </UserPost>
        </LayoutPost>

        {/* 댓글 */}
        <LayoutPost $space="16px">
          <UserPost>
            {comments.map((comment) => (
              <CommentLi key={comment.id}>
                <img
                  className="imgProfile"
                  // src={comment.author.image}
                  src="/images/img-profile-default.svg"
                  alt="profile"
                />
                <div>
                  <div className="commentHeader">
                    <h3>{comment.author.username}</h3>
                    <p>5분 전</p>
                    <CommonBtn
                      type="button"
                      $img="/images/icon-more-vertical.svg"
                      $w="20px"
                      $h="20px"
                      alt="more-vertical"
                    />
                  </div>
                  <p className="commentText">{comment.content}</p>
                </div>
              </CommentLi>
            ))}
          </UserPost>
        </LayoutPost>
      </PostParent>

      {/* 댓글입력부분 */}
      <CommentUpLoadWrap>
        <LayoutPost>
          <div>
            <img
              className="imgProfile"
              src="/images/img-profile-default.svg"
              alt="profile"
            />
          </div>
          <UserPost>
            <PostInforInner>
              <label className="a11y">댓글을 입력해주세요.</label>
              <input
                type="text"
                placeholder="댓글 입력하기"
                onChange={(e) => setInputComment(e.target.value)}
              />
              <button
                className="btnPost"
                type="button"
                onClick={handlePostComments}
              >
                게시
              </button>
            </PostInforInner>
          </UserPost>
        </LayoutPost>
      </CommentUpLoadWrap>
    </>
  );
}
