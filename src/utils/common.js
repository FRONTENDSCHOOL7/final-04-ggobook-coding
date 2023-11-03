//공통함수를 모아두는 페이지입니다.

// TOKEN
// export const getToken = () => {
//   return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzdjZGI2YjJjYjIwNTY2Mzg1ZjhlZCIsImV4cCI6MTcwMzM1MTM0MywiaWF0IjoxNjk4MTY3MzQzfQ.oJlrkrlk8XQSW17M24AL_csorLzsVXxvXzDc-3tFDyo`;
// }

export const getToken = (key) => {
  return localStorage.getItem(key);
}