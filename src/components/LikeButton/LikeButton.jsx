import React, { useState } from "react";
import styled from "styled-components";

export default function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState("/images/icon-heart.svg");

  const handleClickLikeBtn = () => {
    if (isLike) {
      setLikeCount(likeCount - 1);
      setBackgroundUrl("/images/icon-heart.svg");
    } else {
      setLikeCount(likeCount + 1);
      setBackgroundUrl("/images/icon-red-heart.svg");
    }

    setIsLike(!isLike);
  };

  return (
    <LikeArea>
      <StyledLikeBtn onClick={handleClickLikeBtn} backgroundUrl={backgroundUrl}></StyledLikeBtn>
      <Count>{likeCount}</Count>
    </LikeArea>
  );
}

const LikeArea = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLikeBtn = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  background: url(${(props) => props.backgroundUrl});
  background-size: 20px;
`;

const Count = styled.span`
  font-family: "Spoqa Han Sans Neo";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
`;
