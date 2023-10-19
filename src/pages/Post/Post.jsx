import React from "react";
import styled from "styled-components";

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
  width: 100%;
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

const BtnPostWrap = styled.span`
  display: flex;
  align-items: center;
  &:last-child {
    margin-left: 15px;
  }
`;

//코멘트
const Comment = styled.p`
  color: #333;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.$clamp};
`;

//하단 댓글입력하기 영역
const CommentUpLoadWrap = styled.div`
  position: fixed;
  max-width: 390px;
  width: 100%;
  height: 40px;
  padding: 5px 0;
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

/**
 * 공통으로 적용되는 버튼
 * props -> img, w(width), h(height)
 */
const CommonBtn = styled.button`
  margin-left: auto;
  width: ${(props) => props.$w};
  height: ${(props) => props.$h};
  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
  background-position: center;
`;

/**
 * 공통으로 적용될 수 있는 이미지레이아웃
 * props -> w(width), h(height)
 */
const CommonImgLayout = styled.img`
  max-width: ${(props) => props.$w};
  height: ${(props) => props.$h};
  display: block;
  width: 100%;
  border: 1px solid #dbdbdb;
  background-color: #3f3c3c;
  border-radius: 10px;
  box-sizing: border-box;
`;

export default function Post() {
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
                <h3>생활코딩</h3>
                <p className="userNickname">@weniv_Mandarin</p>
              </div>
              <CommonBtn
                type="button"
                $img="/images/s-icon-more-vertical.svg"
                $w="24px"
                $h="24px"
                alt="more-vertical"
              />
            </PostInforInner>
            <PostInforInner>
              <Comment $clamp="0">
                옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
                넣는 풍부하게 뛰노는 인생의 힘있다.
              </Comment>
            </PostInforInner>
            <PostInforInner>
              <CommonImgLayout $w="304px" $h="228px" src="" alt="" />
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
                <span>23</span>
              </BtnPostWrap>
              <BtnPostWrap>
                <CommonBtn
                  type="button"
                  $img="/images/icon-message-circle.svg"
                  $w="20px"
                  $h="20px"
                  alt="message-circle"
                />
                <span>1000</span>
              </BtnPostWrap>
            </PostInforInner>
            <PostInforInner>2023년10월18일</PostInforInner>
          </UserPost>
        </LayoutPost>

        <LayoutPost $space="16px">
          <div>
            <img
              className="imgProfile"
              src="/images/img-profile-default.svg"
              alt="profile"
            />
          </div>
          <UserPost>
            <PostInforInner $position="center">
              <div>
                <h3>지나가던 user</h3>
              </div>
              <CommonBtn
                type="button"
                $img="/images/icon-more-vertical.svg"
                $w="20px"
                $h="20px"
                alt="more-vertical"
              />
            </PostInforInner>
            <PostInforInner>
              <Comment $clamp="2">
                우와 최고최고우와 최고최고우와 최고최고우와 최고최고우와
                최고최고우와 최고최고우와 최고최고우와 최고최고우와 최고최고우와
                최고최고우와 최고최고
              </Comment>
            </PostInforInner>
          </UserPost>
        </LayoutPost>
        <LayoutPost $space="16px">
          <div>
            <img
              className="imgProfile"
              src="/images/img-profile-default.svg"
              alt="profile"
            />
          </div>
          <UserPost>
            <PostInforInner $position="center">
              <div>
                <h3>지나가던 user</h3>
              </div>
              <CommonBtn
                type="button"
                $img="/images/icon-more-vertical.svg"
                $w="20px"
                $h="20px"
                alt="more-vertical"
              />
            </PostInforInner>
            <PostInforInner>
              <Comment $clamp="2">
                우와 최고최고우와 최고최고우와 최고최고우와 최고최고우와
                최고최고우와 최고최고우와 최고최고우와 최고최고우와 최고최고우와
                최고최고우와 최고최고
              </Comment>
            </PostInforInner>
          </UserPost>
        </LayoutPost>
        <LayoutPost $space="16px">
          <div>
            <img
              className="imgProfile"
              src="/images/img-profile-default.svg"
              alt="profile"
            />
          </div>
          <UserPost>
            <PostInforInner $position="center">
              <div>
                <h3>지나가던 user</h3>
              </div>
              <CommonBtn
                type="button"
                $img="/images/icon-more-vertical.svg"
                $w="20px"
                $h="20px"
                alt="more-vertical"
              />
            </PostInforInner>
            <PostInforInner>
              <Comment $clamp="2">
                우와 최고최고우와 최고최고우와 최고최고우와 최고최고우와
                최고최고우와 최고최고우와 최고최고우와 최고최고우와 최고최고우와
                최고최고우와 최고최고
              </Comment>
            </PostInforInner>
          </UserPost>
        </LayoutPost>
        <LayoutPost $space="16px">
          <div>
            <img
              className="imgProfile"
              src="/images/img-profile-default.svg"
              alt="profile"
            />
          </div>
          <UserPost>
            <PostInforInner $position="center">
              <div>
                <h3>지나가던 user</h3>
              </div>
              <CommonBtn
                type="button"
                $img="/images/icon-more-vertical.svg"
                $w="20px"
                $h="20px"
                alt="more-vertical"
              />
            </PostInforInner>
            <PostInforInner>
              <Comment $clamp="2">
                우와 최고최고우와 최고최고우와 최고최고우와 최고최고우와
                최고최고우와 최고최고우와 최고최고우와 최고최고우와 최고최고우와
                최고최고우와 최고최고
              </Comment>
            </PostInforInner>
          </UserPost>
        </LayoutPost>
        <LayoutPost $space="16px">
          <div>
            <img
              className="imgProfile"
              src="/images/img-profile-default.svg"
              alt="profile"
            />
          </div>
          <UserPost>
            <PostInforInner $position="center">
              <div>
                <h3>지나가던 user</h3>
              </div>
              <CommonBtn
                type="button"
                $img="/images/icon-more-vertical.svg"
                $w="20px"
                $h="20px"
                alt="more-vertical"
              />
            </PostInforInner>
            <PostInforInner>
              <Comment $clamp="2">
                우와 최고최고우와 최고최고우와 최고최고우와 최고최고우와
                최고최고우와 최고최고우와 최고최고우와 최고최고우와 최고최고우와
                최고최고우와 최고최고
              </Comment>
            </PostInforInner>
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
              <input type="text" placeholder="댓글 입력하기" />
              <button className="btnPost" type="button">
                게시
              </button>
            </PostInforInner>
          </UserPost>
        </LayoutPost>
      </CommentUpLoadWrap>
    </>
  );
}
