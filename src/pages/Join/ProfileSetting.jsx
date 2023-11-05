import React, { useContext, useState } from "react";

import styled from "styled-components";
import Input from "../../components/Input/Input";
import Spaces from "../../components/Spaces/Spaces";
import Button from "../../components/Button/Button";
import ProfileEditBtn from "../../components/ProfileEditBtn/ProfileEditBtn";
import { UserInfoContext } from "../../context/UserInfoContext";

export default function ProfileSetting() {
  const { email, password } = useContext(UserInfoContext);

  const [imgSrc, setImgSrc] = useState(
    "https://api.mandarin.weniv.co.kr/Ellipse.png"
  );
  const [image, setImage] = useState();
  const [username, setUsername] = useState();
  const [accountname, setAccountname] = useState();
  const [intro, setIntro] = useState();
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  // 회원가입 버튼 disabled 처리
  const handleBtnDisabled = () => {
    if (username && accountname) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  };

  const inputUsername = (event) => {
    setUsername(event.target.value);
    handleBtnDisabled();
  };
  const inputAccountname = (event) => {
    setAccountname(event.target.value);
    handleBtnDisabled();
  };
  const inputIntro = (event) => {
    setIntro(event.target.value);
  };

  const inputImage = (event) => {
    const file = event.target.files[0];
    const form = new FormData();

    form.append("image", file);
  };

  const handleChangeImg = (event) => {
    const file = event.target.files[0];
    const fileName = file.name;
    // const form = new FormData();

    // form.append("image", file);

    console.log(file.name);

    if (file) {
      setImgSrc(URL.createObjectURL(file));
      setImage(fileName);
      console.log(image);
      // const imgUrl = URL.createObjectURL(file);
      // console.log(imgUrl);
    }
  };

  const join = async (username, email, password, accountname, image) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr";
    const reqPath = "/user";

    try {
      const res = await fetch(baseUrl + reqPath, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            email: email,
            password: password,
            accountname: accountname,
            intro: intro,
            image: baseUrl + "/" + image,
          },
        }),
      });

      const json = await res.json();
      console.log(json);
      alert(json.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleJoin = (event) => {
    event.preventDefault();
    join(username, email, password, accountname, intro, imgSrc);
  };

  return (
    <StyledDiv>
      <Styledh1>프로필 설정</Styledh1>
      <Spaces gap="14px" />
      <StyledP>나중에 언제든지 변경할 수 있습니다.</StyledP>

      <StyledForm>
        <ProfileEditBtn
          type="file"
          marginTop="30px"
          onChange={handleChangeImg}
          background={imgSrc}
        />
        <Spaces gap="170px" />
        <Input
          label="사용자 이름"
          inputBorderColor="#dbdbdb"
          onChange={inputUsername}
          value={username}
          placeholder="2~10자 이내여야 합니다."
          autoFocus={true}
        />
        <Spaces gap="16px" />
        <Input
          label="계정 ID"
          inputBorderColor="#dbdbdb"
          onChange={inputAccountname}
          value={accountname}
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
        <Spaces gap="16px" />
        <Input
          label="소개"
          inputBorderColor="#dbdbdb"
          onChange={inputIntro}
          value={intro}
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        />
        <Spaces gap="30px" />
        <Button
          width="322px"
          padding="13px"
          backgroundColor="var(--mainColor)"
          color="#fff"
          disabled={isBtnDisabled}
          onClick={handleJoin}
        >
          코북코딩 시작하기
        </Button>
      </StyledForm>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  padding: 30px 34px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  font-family: Spoqa Han Sans Neo;

  img {
    width: 110px;
    margin: 30px 0;
  }
`;

const Styledh1 = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
`;

const StyledP = styled.p`
  color: #767676;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
