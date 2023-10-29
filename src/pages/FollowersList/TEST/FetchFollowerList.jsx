async function fetchFollowerList(accountname) {
    const url = `https://api.mandarin.weniv.co.kr/profile/${accountname}/follower`;
    const token = localStorage.getItem('token'); // 여기서 토큰을 동적으로 가져옵니다.

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok'); // 실패 응답 처리
        }

        const data = await response.json(); // 응답 데이터를 JSON으로 파싱

        // API 응답 처리
        if (data.length === 0) {
            // 팔로워가 없는 경우의 처리
            console.log('팔로워가 없습니다.');
        } else {
            // 팔로워 목록을 처리하는 로직
        }
        return data; // 팔로워 데이터 반환
    } catch (error) {
        console.error('Error fetching follower list:', error);
        throw error; // 에러를 호출자에게 전파
    }
}
