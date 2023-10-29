

function ChangFoll2() {
    
// APi
const token = localStorage.getItem('userToken');
const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follower`;

    try {
      const res = await fetch(`${url}/post/feed`, {
        method: "GET",
        headers: {
          Authorization : `Bearer ${token}`,
          "Content-type": "application/json",
        },
    });
    const data = await res.json()
    return data.post;
} catch (error) {
    return error;
};
};


// 구조

// 함수 

