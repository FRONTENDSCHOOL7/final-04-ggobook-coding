const url = "https://api.mandarin.weniv.co.kr";

const EditProfileAPI = async (username,accountname, intro, image) => {

  try {
    const res = await fetch(url + "/user", {
      method: "PUT",
      headers: {
        "Authorization" : "Bearer {token}",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "user": {
          "username": username,
          "accountname": accountname ,
          "intro": intro ,
          "image": image ,
        },
      }),
    });

    const resJson = await res.json();
    return resJson;
  } catch (error) {
    // 추가예정
    return error;
  }
};

export default EditProfileAPI;