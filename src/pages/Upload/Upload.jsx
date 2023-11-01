import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { CommonBtn, CommonImgLayout } from "../../styles/GlobalStyle";
import HeaderBtn from "../../components/Header/HeaderBtn";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

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
const BtnUpload = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 16px;
  padding-bottom: 16px;
  .btnUpload {
    width: 50px;
    height: 50px;
    display: inline-block;
    background: url("/images/upload-file.svg") center;
    cursor: pointer;
  }
  input[type="file"]::file-selector-button {
    background-color: transparent;
    border: none;
    color: transparent;
  }
`;

export default function Upload() {
  const URL = "https://api.mandarin.weniv.co.kr";
  const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzdjZGI2YjJjYjIwNTY2Mzg1ZjhlZCIsImV4cCI6MTcwMzM1MTM0MywiaWF0IjoxNjk4MTY3MzQzfQ.oJlrkrlk8XQSW17M24AL_csorLzsVXxvXzDc-3tFDyo`;

  const fileInput = useRef();
  const [contentTxt, setContentTxt] = useState(""); //게시글내용
  const [addFileImg, setAddFileImg] = useState(""); //이미지 등록
  const [uploadImg, setUploadImg] = useState(null);
  const navigate = useNavigate();

  //이미지 api 등록 함수
  const imgSubmit = useCallback(async () => {
    const file = uploadImg;
    const formData = new FormData();
    formData.append("image", file); //서버에서 요청하는 image key값 적용

    const res = await fetch(`${URL}/image/uploadfile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      body: formData,
    });
    return res.json();
  }, [uploadImg, TOKEN]);

  //post API 함수
  const handleAddPostSubmit = async (e) => {
    try {
      e.preventDefault();

      let uploadResult = "";
      if (addFileImg) {
        uploadResult = await imgSubmit();
        console.log("uploadResult", uploadResult);
      }

      const res = await fetch(`${URL}/post`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post: {
            content: contentTxt,
            image: `${URL}/${uploadResult.filename}`,
          },
        }),
      });

      console.log("body", res);
      if (!res.ok) {
        throw new Error("네트워크 문제가 발생했어요.");
      }
      const data = await res.json();
      console.log("PostData", data);
      alert("저장되었습니다.");
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  //로컬에서 이미지 등록
  const handleAddFileImg = useCallback(async (e) => {
    if (e.target.files.length === 0) return;

    const file = e.target.files[0];

    setUploadImg(file);
    const reader = new FileReader();
    console.log("AddPost 이미지 로드 시작: ", file, reader);
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAddFileImg(reader.result || null);
    };
  }, []);

  //로컬 이미지 삭제
  const handleDelFileImg = useCallback(() => {
    setUploadImg(null);
    setAddFileImg(null);
    fileInput.current.value = "";
  }, []);

  return (
    <>
      <Button
        width="90px"
        height="32px"
        backgroundColor="var(--mainColor)"
        color="#fff"
        type="button"
        padding="7px"
        onClick={handleAddPostSubmit}
        disabled={!addFileImg && !contentTxt}
      >
        업로드
      </Button>

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
            value={contentTxt}
            onChange={(e) => {
              setContentTxt(e.target.value);
            }}
          />
          <ImgLayoutWrap>
            <CommonImgLayout
              $w="304px"
              $h="228px"
              src={addFileImg === "" ? null : addFileImg}
            />
            <CommonBtn
              type="button"
              $w="22px"
              $h="22px"
              $img="/images/x.svg"
              alt=""
              onClick={handleDelFileImg}
            />
          </ImgLayoutWrap>
        </div>
      </LayoutUpLoad>

      {/* 하단 업로드 버튼 */}
      <BtnUpload>
        <input
          id="file"
          className="btnUpload"
          type="file"
          name="file"
          accept=".jpg, .jpeg, .png, .gif, .bmp, .tif, .heic"
          ref={fileInput}
          onChange={handleAddFileImg}
        />
      </BtnUpload>
    </>
  );
}
