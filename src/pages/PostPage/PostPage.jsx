import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { CommonBtn } from "../../styles/GlobalStyle";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../../components/Post/Post";
import Modal from "../../components/Modal/Modal";
import KebabHeader from "../../components/Header/KebabHeader";

const PageLayout = styled.div`
  height: 100vh;
`;
const PostLayout = styled.article`
  padding: 20px 16px;
`;
const CommentLayout = styled.article`
  padding: 11px 16px;
  padding-top: ${(props) => `${props.$space}` || `${48}`};
  display: flex;
  padding-bottom: 60px;
  border-top: 1px solid #c4c4c4;

  .imgProfile {
    width: 36px;
    margin-right: 12px;
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
`;

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
const CommentUpLoadWrap = styled.article`
  position: fixed;
  max-width: 390px;
  width: 100%;
  height: 60px;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0;
  background-color: #fff;

  input {
    height: 40px;
    &::placeholder {
      color: #c4c4c4;
    }
  }
  button {
    font-weight: 900;
    color: var(--mainColor);
    white-space: nowrap;
  }

  button:disabled {
    color: #c4c4c4;
  }
`;

export default function PostPage() {
  // ============= POSTS(게시글) 시작 =============
  const [post, setPost] = useState(null);
  const [inputComment, setInputComment] = useState("");
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);
  const [modalType, setModalType] = useState("post");
  const [commentId, setCommentId] = useState("");
  const { id } = useParams();

  const URL = "https://api.mandarin.weniv.co.kr";
  const TOKEN = localStorage.getItem("token");
  const postId = id;

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
        // console.log(data);
        console.log("게시물을 성공적으로 삭제했습니다.");
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //초기값 없을 경우 예외처리
  if (!post) return;

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
        setInputComment("");
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

  //comment 삭제
  const handleDelComment = () => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    fetch(`${URL}/post/${postId}/comments/${commentId}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("댓글을 삭제하는 데 실패했습니다.");
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        console.log("댓글을 성공적으로 삭제했습니다.");
        setModalState(false);
        fetchComments();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //게시글 삭제 버튼 클릭시
  const handleModalPostDelButton = () => {
    setModalState(true);
  };

  //모달 취소 버튼
  const handleModalCancelButton = () => {
    setModalState(false);
  };

  // ============= COMMENTS(댓글) 끝 =============

  return (
    <PageLayout>
      <KebabHeader />
      <PostLayout>
        {/* 게시글 */}
        <Post post={post} del={handleModalPostDelButton} comments={comments} />
      </PostLayout>
      {/* 댓글 */}
      <CommentLayout $space="16px">
        <UserPost>
          {comments.map((comment) => (
            <CommentLi key={comment.id}>
              <img
                className="imgProfile"
                src={comment.author.image}
                // src="/images/img-profile-default.svg"
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
                    onClick={(e) => {
                      setModalState(true);
                      setModalType("comment");
                      setCommentId(comment.id);
                    }}
                  />
                </div>
                <p className="commentText">{comment.content}</p>
              </div>
            </CommentLi>
          ))}
        </UserPost>
      </CommentLayout>

      {/* 댓글입력부분 */}
      <CommentUpLoadWrap>
        <CommentLayout>
          <div>
            <img
              className="imgProfile"
              src="/images/img-profile-default.svg"
              // 로그인한 사용자 img 보여주는 처리 해야함
              alt="profile"
            />
          </div>
          <UserPost>
            <PostInforInner>
              <label className="a11y">댓글을 입력해주세요.</label>
              <input
                type="text"
                placeholder="댓글 입력하기"
                value={inputComment}
                onChange={(e) => setInputComment(e.target.value)}
              />
              <button
                className="btnPostComment"
                type="button"
                onClick={handlePostComments}
                disabled={!inputComment}
              >
                게시
              </button>
            </PostInforInner>
          </UserPost>
        </CommentLayout>
      </CommentUpLoadWrap>

      {/* 삭제 모달 */}
      {modalState && (
        <Modal
          title={
            modalType === "post" ? "게시글을 삭제할까요?" : "댓글을 삭제할까요?"
          }
          handleModalCancelButton={handleModalCancelButton}
        >
          {modalType === "post" ? (
            <button type="button" onClick={handleDelPost}>
              삭제
            </button>
          ) : (
            <button type="button" onClick={handleDelComment}>
              삭제
            </button>
          )}
        </Modal>
      )}
    </PageLayout>
  );
}
