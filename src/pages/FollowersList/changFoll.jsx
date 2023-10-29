
export const getFollowerList = async (accountname, loadFollowSeq) => {
  // API 엔드포인트에 맞춰 URL을 수정합니다.
  const reqUrl = `/profile/${accountname}/follower?limit=20&skip=${loadFollowSeq}`;
  const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰을 가져옵니다.

  try {
    const response = await fetch(reqUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      // 응답이 성공적이지 않을 경우 에러를 발생시킵니다.
      throw new Error(`Network response was not ok, status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Request error', error);
    throw error;
  }
};