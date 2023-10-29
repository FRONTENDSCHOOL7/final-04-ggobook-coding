import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProfileThumbnail } from "../../styles/GlobalStyle";
import HeaderBtn from '../../components/Header/HeaderBtn';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Spaces from '../../components/Spaces/Spaces';
import { useNavigate } from 'react-router-dom';

function Forgpt() {

  const [initUsername, setInitUsername] = useState('');
  const [initAccountname, setInitAccountname] = useState('');
  const [initIntron, setInitIntron] = useState('');
  const [initImgSrc, setInitImgSrc] = useState(''); // 이미 있는 이미지 주소



  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzdjZGI2YjJjYjIwNTY2Mzg1ZjhlZCIsImV4cCI6MTcwMzM1MTM0MywiaWF0IjoxNjk4MTY3MzQzfQ.oJlrkrlk8XQSW17M24AL_csorLzsVXxvXzDc-3tFDyo";
  const getInitInfo = async () => {
    const res = await fetch('https://api.mandarin.weniv.co.kr/user/myinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('res:', res);


    const json = await res.json();
    console.log('json:', json); // 테스트

    if (json && json.user) {
      setInitImgSrc(json.user['image'] || '');
      setImgSrc(json.user['image'] || '');

      setInitAccountname(json.user['accountname'] || '');
      setAccountname(json.user['accountname'] || '');

      setInitUsername(json.user['username'] || '');
      setUsername(json.user['username'] || '');

      setInitIntron(json.user['intro'] || '');
      setIntro(json.user['intro'] || '');
    }
  };


  useEffect(() => {
    getInitInfo();
  }, []);

  const [username, setUsername] = useState(initUsername);
  const [accountname, setAccountname] = useState(initAccountname);
  const [imgSrc, setImgSrc] = useState(initImgSrc);
  const [intro, setIntro] = useState(initIntron);


  const edit = async (editData) => {
    const reqUrl = 'https://api.mandarin.weniv.co.kr/user';
    const res = await fetch(reqUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify(editData),
    });

    const json = await res.json();

  };


  const inputUsername = (e) => {
    setUsername(e.target.value);
  };

  const inputAccountname = (e) => {
    setAccountname(e.target.value);
  };

  const inputInfo = (e) => {
    setIntro(e.target.value);
  };

  const uploadImage = async (imageFile) => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr/';
    const reqUrl = baseUrl + 'image/uploadfile';


    const form = new FormData();

    form.append('image', imageFile);

    const res = await fetch(reqUrl, {
      method: 'POST',
      body: form,

    });

    const json = await res.json();


    const imageUrl = baseUrl + json.filename;

    setImgSrc(imageUrl);

  };


  const handleChangeImage = (e) => {
    const imageFile = e.target.files[0];
    uploadImage(imageFile);
  };


  const submitEdit = (e) => {
    e.preventDefault();

    const editData = {
      user: {
        username: username,
        accountname: accountname,
        intro: intro,
        image: imgSrc,
      },
    };
    edit(editData);
  };

  // 뒤로가기 버튼 기능구현
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate("/myprofile");
  };

  return (
    <StyledDiv>
      <HeaderBtn 
      onSubmitEdit={submitEdit} 
      onNavigate={handleNavigateToLogin}
      />
        <StyledForm>
        <AddImgWrap>
          <ProfileThumbnail
              src={imgSrc === "" ? null : imgSrc}
              alt=""
          />
          <input
            id="file"
            className="btnUpload"
            type="file"
            name="file"
            accept=".jpg, .jpeg, .png, .gif, .bmp, .tif, .heic"
            // 로컬에서 이미지 등록
            onChange={handleChangeImage}
          />
          </AddImgWrap>

        <Spaces gap="140px" />
        <Input
          label="사용자 이름"
          inputBorderColor="#dbdbdb"
          value={username}
          onChange={inputUsername}
          type="text"
          id="userNameInput"
          name="username"
          placeholder={
            initUsername ? `${initUsername}` : '2~10자 이내여야 합니다.'
          }
        />
        <Spaces gap="16px" />
        <Input
          label="계정 ID"
          inputBorderColor="#dbdbdb"
          value={accountname}
          onChange={inputAccountname}
          type="text"
          id="userIdInput"
          name="accountname"
          placeholder={
            initAccountname
              ? `${initAccountname}`
              : '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
          }
        />
        <Spaces gap="16px" />
        <Input
          label="소개"
          inputBorderColor="#dbdbdb"
          value={intro}
          onChange={inputInfo}
          type="text"
          id="userIntroInput"
          name="intro"
          placeholder={
            initIntron
              ? `${initIntron}`
              : '자신과 판매할 상품에 대해 소개해 주세요!'
          }
        />
      </StyledForm>
    </StyledDiv>
  );
}


const StyledDiv = styled.div`

  height: 100vh;
  background-color: #fff;
  font-family: 'Spoqa Han Sans Neo';
`;

const StyledForm = styled.form`
  padding: 30px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

// 하늘님 코드
const AddImgWrap = styled.div`
  width: 110px;
  height: 110px;
  position: absolute;
  border-radius: 10px;
  
  //input file custom
  .btnUpload {
    display: inline-block;
    width: 36px;
    height: 36px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: url("images/upload-file.svg");
    background-size: 36px;
    
    cursor: pointer;
  }
  input[type="file"]::file-selector-button {
    background-color: transparent;
    border: none;
    color: transparent;
  }
`;
export default Forgpt;