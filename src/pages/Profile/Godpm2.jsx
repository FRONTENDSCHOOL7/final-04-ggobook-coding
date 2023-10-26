import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeaderBtn from '../../components/Header/HeaderBtn';
import ProfileEditBtn from '../../components/ProfileEditBtn/ProfileEditBtn';
import Input from '../../components/Input/Input';
import Spaces from '../../components/Spaces/Spaces';

function Godpm2() {
  // localStorage에서 토큰 가져오기
  /* 
    [!] 토큰값은 
    개발자도구 > 애플리케이션 > 로컬스토리지 > (http://localhost:3000) 
    '키:값'의 형태로 저장되어있습니다. -> 로그인기능 구현하실때 작업을 하셨을거에요
    만약, 로그인 구현이 완료되기 전이라면 포스트맨에서 token 값을 받아 임의로 저장해줍니다.

    [PostMan 사용]
    POST : https://api.mandarin.weniv.co.kr/user/login

    Body - raw - JSON 
    {
        "user": {
                "email": "",
                "password": ""
        }
    } 

    * 유효한 아이디, 패스워드 입력해주세요
    
    -> Send 버튼 클릭!

    "token"값 복사

    브라우저 로컬스토리지에 저장
  */
  const token = localStorage.getItem('userToken');
  console.log('userToken:', token);
  /* [!] 주석을 풀어 확인해보세요! 콘솔은 잘 받아오고 있군요! 에러가 발생한다면 재로그인(토큰값을 업데이트 해보세요) */

  // 사용자 초기 정보를 저장하기 위한 상태들을 선언합니다.
  const [initUsername, setInitUsername] = useState('');
  const [initAccountname, setInitAccountname] = useState('');
  const [initIntron, setInitIntron] = useState('');
  const [initImgSrc, setInitImgSrc] = useState(''); // 이미 있는 이미지 주소

  // 사용자 정보를 가져오는 API 호출 함수입니다.
  /* 
    API 명세서 : 2.3 프로필  정보  불러오기
    -> 내가가진 '토큰값'만으로 나의 정보를 가져올수 있게 개발이 되어 있습니다!

    단순 정보를 가져오는 거니까 GET, 토큰값은 헤더 정보에 넣어 요청합니다!
  */
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzdjZGI2YjJjYjIwNTY2Mzg1ZjhlZCIsImV4cCI6MTcwMzM1MTM0MywiaWF0IjoxNjk4MTY3MzQzfQ.oJlrkrlk8XQSW17M24AL_csorLzsVXxvXzDc-3tFDyo";
  const getInitInfo = async () => {
    const res = await fetch('https://api.mandarin.weniv.co.kr/user/myinfo', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('res:', res);
    /* [!] 
      res: 응답값에 대한 정보를 알려줍니다. 
      status를 확인해서 응답이 정상적으로 이루어졌는지 확인합니다.
      200: 정상적으로 잘 받아온것입니다.
      401: 토큰이 없거나 유효하지 않을때 발생할 수 있습니다.
      기타 403,422 등의 번호가 나타날수 있습니다.
     */

    const json = await res.json();
    console.log('json:', json); // 테스트
    /* [!]
      JSON 파일 타입으로 응답값을 확인할수 있습니다.
      사용자에대한 정보들이 나옵니다!      
    */

    // API의 응답으로 받은 사용자 정보를 상태에 저장합니다.
    /*
      사용자가 정보 수정하기 전에 각 인풋에 현재 정보값을 넣어주기위해서!
      받아온 정보에 데이터가 있다면 해당 데이터로 상태값을 업데이트
    */
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
  /*
    useEffect를 빈칸으로 두면 최초 마운트 되었을때 '한번만' 안의 함수를 호출합니다.

    만약 다른 상태값들을 빈칸에 넣어준다면 해당값이 바뀔때마다 실행할수 있습니다!

  */

  // 사용자 정보를 수정하기 위한 상태들을 선언합니다.
  const [username, setUsername] = useState(initUsername);
  const [accountname, setAccountname] = useState(initAccountname);
  const [imgSrc, setImgSrc] = useState(initImgSrc);
  const [intro, setIntro] = useState(initIntron);

  // 기존 토큰으로 가져온 부분 ==================================================

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
    console.log(res);
    // [!] res 200으로 응답을 잘 하고 있군요
    const json = await res.json();
    // console.log(json);
    // 수정한 값으로 데이터가 변경되어 json으로 알려줍니다!
  };

  // 주의 뭐지?

  // 각 Input 변경 이벤트 핸들러입니다.
  /*
    각 인풋에 onChange 이벤트가 발생하면 상태값을 입력된 값들로 바꿔줍니다!
   */
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
    console.log(res);
    /* [!] input-file에 이미지를 올리고 나나 res로 잘 응답하는것 확인합니다 */
    const json = await res.json();
    console.log(json);
    /* [!] json 데이터를 확인하니 이미지의 filename 으로 경로를 만들어야겠구나 생각해 볼수 있겠죠 */

    // API의 응답으로 받은 이미지 URL을 상태에 저장합니다.
    const imageUrl = baseUrl + json.filename;
    console.log(imageUrl);
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
    edit(editData);
  };

  // (여기에는 해당 컴포넌트의 JSX 렌더링 부분이 이어져야 함)

  return (
    <StyledDiv>
      <HeaderBtn></HeaderBtn>
      <button type="button" onClick={submitEdit}>
        저장
      </button>

      <StyledForm>
        <ProfileEditBtn />
        <label htmlFor='profileImg'>
          <img src={imgSrc || initImgSrc} alt='Profile' id='imagePre' />
        </label>
        <input
          type="file"
          onChange={handleChangeImage}
          id="profileImg"
          name="image"
          accept="image/*"
        />
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
export default Godpm2;