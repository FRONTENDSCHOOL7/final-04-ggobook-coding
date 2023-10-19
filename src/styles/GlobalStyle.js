//reset css
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts.css";

export const GlobalStyle = createGlobalStyle`
  :root{
    --mainColor: #237B46;
    --disabled: #A7CAB5;
    --appWidth: 390px;
  }

  ${reset};
  * {box-sizing: border-box;}
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    font-family: 'SpoqaHanSansNeo-R';
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    background: unset;
    border: unset;
    cursor: pointer;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    background: unset;
    border: unset;
    font: inherit;
    &::placeholder {
      color: #dbdbdb;
    }
  }
  textarea {
    font: inherit;
    width: 100%;
    border: unset;
    background-color: unset;
    &::placeholder {
      color: #C4C4C4;
    }
  }
  img {
    display: block;
    vertical-align: top;
    width: 100%;
  }

  @font-face {
    font-family: 'SpoqaHanSansNeo-R';
    src: url(/fonts/SpoqaHanSansNeo-Regular.otf);
    font-weight: normal;
    font-style: normal;
  }
  //숨김처리
  .a11y {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  //추가로 적용해야할 공통 CSS 추가
`;
//공통 Layout 적용
export const CommonLayOut = styled.section`
  margin: 0 auto;
  max-width: var(--appWidth);
  height: 100vh;
  background-color: beige;
`;

//Layout 좌우 패딩
export const PaddingLayOut = styled.div`
  ${(props) => `padding: 0 ${props.padding}px`}
`;

//
export const CommonImgThumbnail = styled.img`
  width: 100%;
  height: 200px;
  display: block;
  border-radius: 10px;
  background-color: gray;
`;

/**
 * 공통으로 적용되는 버튼
 * 방법: 버튼 내부에 이미지 적용시 사용
 * <CommonBtn type="button" $w="22px" $h="22px" $img="/images/x.svg" alt=""/>
 * props -> img, w(width), h(height), img
 */
export const CommonBtn = styled.button`
  margin-left: auto;
  width: ${(props) => props.$w};
  height: ${(props) => props.$h};
  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
  background-position: center;
`;

/**
 * 공통으로 적용될 수 있는 이미지레이아웃
 * props -> w(width), h(height)
 */
export const CommonImgLayout = styled.img`
  max-width: ${(props) => props.$w};
  height: ${(props) => props.$h};
  display: block;
  width: 100%;
  border: 1px solid #dbdbdb;
  background-color: #3f3c3c;
  border-radius: 10px;
  box-sizing: border-box;
`;