function GetFollowerListAPI(){
    
    const followerListAPI = async () => {
        const url = "https://api.mandarin.weniv.co.kr";
        const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰을 가져옵니다.

        try {
            const res = await fetch(`${url}/profile/:accountname/follower`, {
                method: "GET",
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            const data = await res.json();
            return data.post;
        } catch (error) {
            return error;
        };
    };
    return {followerListAPI}
};

export default GetFollowerListAPI;