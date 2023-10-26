const URL = 'https://api.mandarin.weniv.co.kr';


const EditProfileAPI = (userInfo, token, setName) => {

  const handleEditProfileAPI = async () => {
    try {
      const res = await fetch(URL + '/user', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const data = await res.json();
      setName(data.user.accountname);
    } catch (error) {
      console.error('API 응답에 실패하였습니다.', error);
    }
  };

  return { handleEditProfileAPI };
};

export default EditProfileAPI;