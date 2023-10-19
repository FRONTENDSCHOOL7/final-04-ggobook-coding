import React from "react";
import styled from "styled-components";
import { CommonBtn, CommonImgLayout } from "../../styles/GlobalStyle";

const LayoutUpLoad = styled.article`
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

  textarea {
    overflow-y: scroll;
    resize: none;
    height: 50px;

    //스크롤바
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--mainColor); /* 스크롤바 막대 색상 */
      border: 2px solid var(--mainColor); /* 스크롤바 막대 테두리  */
      border-radius: 10px;
    }
  }
`;

//이미지 업로드 되서 삽입되는 영역
const ImgLayoutWrap = styled.div`
  position: relative;
  button {
    position: absolute;
    top: 6px;
    right: 6px;
  }
`;

//업로드 버튼
const BtnUpload = styled.span`
  position: fixed;
  max-width: var(--appWidth);
  width: 100%;
  bottom: 10px;

  ${CommonBtn} {
    display: flex;
    margin-right: 20px;
  }
`;

export default function Upload() {
  return (
    <div>
      <LayoutUpLoad $space="48px">
        <div>
          <img
            className="imgProfile"
            src="/images/img-profile-default.svg"
            alt="profile"
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="게시글 입력하기"
          />
          <ImgLayoutWrap>
            <CommonImgLayout $w="304px" $h="228px" src="https://via.placeholder.com/304x228.jpg" />
            <CommonBtn
              type="button"
              $w="22px"
              $h="22px"
              $img="/images/x.svg"
              alt=""
            />
          </ImgLayoutWrap>
        </div>
      </LayoutUpLoad>
      {/* 하단 업로드 버튼 */}
      <BtnUpload>
        <CommonBtn
          $w="50px"
          $h="50px"
          $img="/images/upload-file.svg"
          alt="uploadbutton"
        />
      </BtnUpload>
    </div>
  );
}
