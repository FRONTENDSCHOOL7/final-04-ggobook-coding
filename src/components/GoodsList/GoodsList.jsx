import React from "react";
import { CommonImgLayout } from "../../styles/GlobalStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

const GoodsParents = styled.section`
  position: relative;
  background-color: #fff;
  border-top: 1px solid #E0E0E0;
  border-bottom: 1px solid #E0E0E0;
  padding: 20px 0 20px 20px;
  .goodsSwiper {
    overflow: hidden;
    position: relative;
    max-width: var(--appWidth);
  }
`;

const GoodsTitle = styled.p`
  font-weight: 700;
  padding-bottom: 16px;
`;

const GoodsName = styled.figcaption`
  font-size: 14px;
  padding: 6px 0 4px;
`;

const GoodsPrice = styled.p`
  color: var(--mainColor);
  font-weight: 700;
`;

export default function GoodsList() {
  return (
    <GoodsParents>
      <GoodsTitle>판매 중인 상품</GoodsTitle>
      <Swiper slidesPerView={2.5} className="goodsSwiper">
        <SwiperSlide>
          <CommonImgLayout
            $w="140px"
            $h="90px"
            src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_640.jpg"
            alt=""
          />
          <GoodsName>상품1</GoodsName>
          <GoodsPrice>35,000원</GoodsPrice>
        </SwiperSlide>
        <SwiperSlide>
          <CommonImgLayout
            $w="140px"
            $h="90px"
            src="https://cdn.pixabay.com/photo/2021/05/15/10/07/zookti-6255408_640.jpg"
            alt=""
          />
          <GoodsName>상품1</GoodsName>
          <GoodsPrice>35,000원</GoodsPrice>
        </SwiperSlide>
        <SwiperSlide>
          <CommonImgLayout
            $w="140px"
            $h="90px"
            src="https://cdn.pixabay.com/photo/2021/05/15/10/07/zookti-6255408_640.jpg"
            alt=""
          />
          <GoodsName>상품1</GoodsName>
          <GoodsPrice>35,000원</GoodsPrice>
        </SwiperSlide>
        <SwiperSlide>
          <CommonImgLayout
            $w="140px"
            $h="90px"
            src="https://cdn.pixabay.com/photo/2021/05/15/10/07/zookti-6255408_640.jpg"
            alt=""
          />
          <GoodsName>상품1</GoodsName>
          <GoodsPrice>35,000원</GoodsPrice>
        </SwiperSlide>
      </Swiper>
    </GoodsParents>
  );
}
