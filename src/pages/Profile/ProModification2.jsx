import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import HeaderBtn from "../../components/Header/HeaderBtn";
import ProfileEditBtn from "../../components/ProfileEditBtn/ProfileEditBtn";
import Input from "../../components/Input/Input";
import Spaces from "../../components/Spaces/Spaces";

function ProModification2() {
  // localStorage에서 토큰 가져오기
  const token = localStorage.getItem('userToken');

  // 사용자 초기 정보를 저장하기 위한 상태들을 선언합니다.
  const [initUsername, setInitUsername] = useState('');
  const [initAccountname, setInitAccountname] = useState('');
  const [initIntron, setInitIntron] = useState('');
  const [initImgSrc, setInitImgSrc] = useState(''); // 이미 있는 이미지 주소


  // 사용자 정보를 가져오는 API 호출 함수입니다.
  const getInitInfo = async () => {
    const res = await fetch('https://api.mandarin.weniv.co.kr/user/myinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await res.json();
    console.log(json); // 테스트


    // API의 응답으로 받은 사용자 정보를 상태에 저장합니다.
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


  // 컴포넌트가 마운트될 때 사용자 정보를 가져오는 함수를 호출합니다.
  useEffect(() => {
    getInitInfo();
  }, []);
  //  주의 - 빈칸? 


  // 사용자 정보를 수정하기 위한 상태들을 선언합니다.
  const [username, setUsername] = useState(initUsername);
  const [accountname, setAccountname] = useState(initAccountname);
  const [imgSrc, setImgSrc] = useState(initImgSrc);
  const [intro, setIntro] = useState(initIntron);

  // 기존 토큰으로 가져온 부분 ==================================================



// 프로필 정보를 수정하는 API 호출 함수입니다.
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

  // 주의 뭐지?

  // 각 Input 변경 이벤트 핸들러입니다.
  const inputUsername = (e) => {
    setUsername(e.target.value);
  };

  const inputAccountname = (e) => {
    setAccountname(e.target.value);
  };

  const inputInfo = (e) => {
    setIntro(e.target.value);
  };

  // 이미지를 업로드하는 API 호출 함수입니다.
  const uploadImage = async (imageFile) => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr/';
    const reqUrl = baseUrl + 'image/uploadfile';
    // 폼 데이터 만들기
    const form = new FormData();
    // 폼 데이터에 값 추가하기
    // 폼 데이터에 .append("키","값")
    form.append('image', imageFile);
    // 폼바디에 넣어서 요청하기
    const res = await fetch(reqUrl, {
      method: 'POST',
      body: form,
    });
    const json = await res.json();
    console.log(baseUrl + json.filename);  // 테스트용

  // API의 응답으로 받은 이미지 URL을 상태에 저장합니다.
    const imageUrl = baseUrl + json.filename;
    setImgSrc(imageUrl);
  };

  // 이미지 변경 이벤트 핸들러입니다.
  const handleChangeImage = (e) => {
    const imageFile = e.target.files[0];
    uploadImage(imageFile);
  };

  // 수정 버튼을 클릭할 때 실행되는 이벤트 핸들러입니다.
  const submitEdit = (e) => {
    e.preventDefault();

    // 수정할 정보를 객체로 만들어 API 호출 함수에 전달합니다.
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

  // (여기에는 해당 컴포넌트의 JSX 렌더링 부분이 이어져야 함)

  return (
    <StyledDiv>
      <HeaderBtn>
      </HeaderBtn>
      <button type='button' onClick={submitEdit}>
          저장
        </button>

      <StyledForm>
        
        {/* <ProfileEditBtn />
        <label htmlFor='profileImg'>
          <img src={imgSrc || initImgSrc} alt='Profile' id='imagePre' />
        </label> */}
        <input
          type='file'
          onChange={handleChangeImage}
          id='profileImg'
          name='image'
          accept='image/*'
        />
        <Spaces gap="140px" />
        <Input
          label="사용자 이름"
          inputBorderColor="#dbdbdb"
          value={username}
          onChange={inputUsername}
          type='text'
          id='userNameInput'
          name='username'
          placeholder={initUsername ? `${initUsername}` : '2~10자 이내여야 합니다.'}
        />
        <Spaces gap="16px" />
        <Input
          label="계정 ID"
          inputBorderColor="#dbdbdb"
          value={accountname}
          onChange={inputAccountname}
          type='text'
          id='userIdInput'
          name='accountname'
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
          type='text'
          id='userIntroInput'
          name='intro'
          placeholder={initIntron ? `${initIntron}` : '자신과 판매할 상품에 대해 소개해 주세요!'}
        />
      </StyledForm>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  height: 100vh;
  background-color: #fff;
  font-family: "Spoqa Han Sans Neo";
`;

const StyledForm = styled.form`
  padding: 30px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default ProModification2;
