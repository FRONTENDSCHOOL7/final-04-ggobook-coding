import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProfileThumbnail } from "../../styles/GlobalStyle";
import HeaderBtn from '../../components/Header/HeaderBtn';
import Input from '../../components/Input/Input';
import Spaces from '../../components/Spaces/Spaces';


function ProfileModification() {
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzdjZGI2YjJjYjIwNTY2Mzg1ZjhlZCIsImV4cCI6MTcwMzM1MTM0MywiaWF0IjoxNjk4MTY3MzQzfQ.oJlrkrlk8XQSW17M24AL_csorLzsVXxvXzDc-3tFDyo";
  // localStorage에서 토큰 가져오기. 지금은 테스트를 위해 직접 넣은 상태.
  // const token = localStorage.getItem('userToken');
  const token =  localStorage.getItem("token");
  console.log("token", token);


  // 사용자 초기 정보를 저장하기 위한 상태들을 선언합니다.
  const [initUsername, setInitUsername] = useState('');
  const [initAccountname, setInitAccountname] = useState('');
  const [initIntron, setInitIntron] = useState('');
  const [initImgSrc, setInitImgSrc] = useState(''); 


  // 사용자 정보를 가져오는 API 호출 함수입니다.
  const getInitInfo = async () => {
    const res = await fetch('https://api.mandarin.weniv.co.kr/user/myinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log('res:', res);
    const json = await res.json();
    // console.log('json:', json); 

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

  /*
    useEffect를 빈칸으로 두면 최초 마운트 되었을때 '한번만' 안의 함수를 호출합니다.

    만약 다른 상태값들을 빈칸에 넣어준다면 해당값이 바뀔때마다 실행할수 있습니다!
  */

    
  // 사용자 정보를 수정하기 위한 상태들을 선언합니다.
  const [username, setUsername] = useState(initUsername);
  const [accountname, setAccountname] = useState(initAccountname);
  const [imgSrc, setImgSrc] = useState(initImgSrc);
  const [intro, setIntro] = useState(initIntron);


  // ┗ ========== 기존 토큰으로 가져온 부분 =================┛

  // 프로필 정보를 수정하는 API 호출 함수입니다.
  /*
    명세서: 3.1 프로필 수정
    이제 PUT으로 API 연결하고,데이터를 수정할것이니 
    수정한 데이터를 body에 담에 요청을 보냅니다.
  */
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
    // console.log(res);
    // [!] res 200으로 응답을 잘 하고 있군요
    const json = await res.json();
    
    // console.log(json);
    // 수정한 값으로 데이터가 변경되어 json으로 알려줍니다!
  };



  // 각 Input 변경 이벤트 핸들러입니다.
  // 각 인풋에 onChange 이벤트가 발생하면 상태값을 입력된 값들로 바꿔줍니다!

  const inputUsername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value)
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

    // [!]baseUrl 변수를 전역으로 관리하시고 함수 통일하셔도 좋을것 같습니다!

    // 폼 데이터 만들기
    /*
      명세서 : 1.1 한개의 이미지(프로필, 상품)
      프로필 이미지는 앞의 이름, 소개와 같은 string 데이터와 다르게 '멀티미디어' 데이터기때문에
      기존과는 다른 형태로 데이터를 보내줘야합니다.
      폼데이터를 만들고, 해당 데이터에 appen으로 데이터를 추가하셔서 body로 전송해주시면 됩니다.
      이때 컨텐츠의 형태가 기존의  'Content-type': 'application/json'가 아니라
      "Content-type" : "multipart/form-data" 로 전송됩니다(이부분은 기본값이라 생략해도 됩니다)

    */
    const form = new FormData();
    // 폼 데이터에 값 추가하기
    // 폼 데이터에 .append("키","값")
    form.append('image', imageFile);
    // 폼바디에 넣어서 요청하기
    const res = await fetch(reqUrl, {
      method: 'POST',
      body: form,
      /*
      headers: {
        'Content-type': 'multipart/form-data',
      }
      */
    });
    
    // console.log(res);
    /* [!] input-file에 이미지를 올리고 나나 res로 잘 응답하는것 확인합니다 */
    const json = await res.json();
    // console.log(json);
    /* [!] json 데이터를 확인하니 이미지의 filename 으로 경로를 만들어야겠구나 생각해 볼수 있겠죠 */

    // API의 응답으로 받은 이미지 URL을 상태에 저장합니다.
    const imageUrl = baseUrl + json.filename;
    // console.log(imageUrl);
    /* [!] 이미지 파일 경로를 찍어봅니다. 클릭해서 해당 경로로 이미지가 잘 나오는지 확인해봅니다! */
    setImgSrc(imageUrl);
    // 이미지 경로로 상태를 업데이트해줍니다!
  };

  // 이미지 변경 이벤트 핸들러입니다.
  const handleChangeImage = (e) => {
    const imageFile = e.target.files[0];
    uploadImage(imageFile);
  };

  // 수정 버튼을 클릭할 때 실행되는 이벤트 핸들러입니다.
  const submitEdit = (e) => {
    e.preventDefault();
    // 기본 submit 버튼기능을 막습니다.

    // 수정할 정보를 객체로 만들어 API 호출 함수에 전달합니다.
    const editData = {
      user: {
        username: username,
        accountname: accountname,
        intro: intro,
        image: imgSrc,
      },
    };
    console.log(editData)
    edit(editData);
  };


  
    




 // ┌ ====== 유효성을 통한 버튼 활성화 기능 ==========┐

    // 닉네임 에러, 아이디 에러, 소개 에러 상태 관리
    const [usernameErr, setUsernameErr] = useState("");
    const [accountnameErr, setAccountnameErr] = useState("");
    const [introErr, setIntroErr] = useState("");
    

  // 각 input 유효성 검사
  // 사용자 이름 input
  const UsernameValid = () => {
    if (!username) {
      setUsernameErr("필수 입력 항목입니다.");
    } else if (username.length < 2) {
      console.log(username.length < 2)
      SetBtnState(true);
      setUsernameErr("2자 이상 닉네임을 입력해 주세요.");
    } else if (username.length > 10) {
      setUsernameErr("10자 이하 닉네임을 입력해 주세요.");
    } else {
      setUsernameErr("");
    } 
  };

    // 계정 ID Input
    const accountnameReg = /^[A-Za-z0-9_.]{5,}$/;

    const AccountnameValid = () => {
      if (!accountname) {
        setAccountnameErr("필수 입력 항목입니다.");
      } else if (!accountnameReg.test(accountname)) {
        setAccountnameErr("아이디 형식이 올바르지 않습니다.");
      } else {
        setAccountnameErr("");
      }
    };

    
    // 소개 Input
    const IntroValid = () => {
      if (!intro) {
        setIntroErr("필수 입력 항목입니다.");
      } else {
        setIntroErr("");
      }
    };

    // 버튼 비활성화 상태 관리
    const [btnState, SetBtnState] = useState(true);

  
    // 버튼 활성화
    const btnActive = () => {
    if (
      !usernameErr &&
      !accountnameErr &&
      !introErr &&
      username &&
      accountname &&
      intro
    ) {
      SetBtnState(false);
    } else {
      SetBtnState(true);
    }
  };

  // input창이 바뀔 때마다 btnActive로 확인 후 버튼 활성화
  useEffect(() => {
    btnActive();
  }, [username, accountname, intro, usernameErr, accountnameErr, introErr]);
  // }, [username, accountname, intro]);






  return (
    <StyledDiv>
      
      <HeaderBtn 
      onSubmitEdit={submitEdit} 
      // onNavigate={handleNavigateToLogin} 
      btnState={btnState} 
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
          // 유효성용
          onBlur={UsernameValid}
          type="text"
          id="userNameInput"
          name="username"
          placeholder={
            initUsername  
            ? '2~10자 이내여야 합니다.' 
            : `${initUsername}`
          }
        />
        <Spaces gap="16px" />
        <Input
          label="계정 ID"
          inputBorderColor="#dbdbdb"
          value={accountname}
          onChange={inputAccountname}
          //유효성용
          onBlur={AccountnameValid}
          type="text"
          id="userIdInput"
          name="accountname"
          placeholder={
            initAccountname 
            ? '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.' 
            : `${initAccountname}`
            
          }
        />
        <Spaces gap="16px" />
        <Input
          label="소개"
          inputBorderColor="#dbdbdb"
          value={intro}
          onChange={inputInfo}
          // 유효성용
          onBlur={IntroValid}
          type="text"
          id="userIntroInput"
          name="intro"
          placeholder={
            initIntron
              ? '자신과 판매할 상품에 대해 소개해 주세요!'
              : `${initIntron}`
          }
        />
      </StyledForm>
    </StyledDiv>
    
  );
}


// 배경
const StyledDiv = styled.div`
  height: 100vh;
  background-color: #fff;
  font-family: 'Spoqa Han Sans Neo';
`;

// 중앙 
const StyledForm = styled.form`
  padding: 30px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

// 프로필 & 업로드 이미지
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
export default ProfileModification;