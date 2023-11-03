import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { CommonImgLayout, StyledLink } from "../../styles/GlobalStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { getToken } from "../../utils/common";
import Navigator from "../../components/Navigator/Navigator";
import PostModal from "./../../components/PostModal/PostModal";
import Modal from "./../../components/Modal/Modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { ProfileAtom } from "./ProfileAtom";
import KebabHeader from "../../components/Header/KebabHeader";
import Post from "../../components/Post/Post";

/**
 * @param
 * @returns Profile
 */
export default function Profile() {
  const URL = "https://api.mandarin.weniv.co.kr";
  const navigate = useNavigate();
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState("");
  const [list, setList] = useState([]); //상품리스트를 담을 hook
  const [selectProduct, setSelectProduct] = useState(null); //선택된 상품
  const [postList, setPostList] = useState(null);
  const [modalType, setModalType] = useState(true);
  //atom상태값 읽기
  const modalState = useRecoilValue(ProfileAtom);
  //atom 상태 수정하기
  const [isModalState, setIsModalState] = useRecoilState(ProfileAtom);
  console.log("Profile 전달받은 id", id);

  const accountname = localStorage.getItem("accountname");
  console.log("프로필 accountname", accountname);

  /**
   * 모달 중복코드 공통함수 적용
   */
  const updateModalState = useCallback((commonModalState, PostModalState) => {
    setIsModalState((prev) => ({
      ...prev,
      isCommonModal: commonModalState,
      isPostModalShow: PostModalState,
    }));
  }, []);

  useEffect(() => {
    userInfoData();
    updateModalState(null, null); //초기 렌더링시 모달 초기화
  }, []);
  //userInfo데이터가 변경될때 productListData함수 실행
  useEffect(() => {
    productListData();
  }, [userInfo]);

  useEffect(() => {
    postLists();
  }, []);

  //2.3 프로필 정보 불러오기 api
  const userInfoData = useCallback(async () => {
    try {
      const res = await fetch(`${URL}/user/myinfo`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      console.log("프로필 res", res);
      if (!res.ok) {
        throw new Error("네트워크 문제가 발생했어요.");
      }
      const userRes = await res.json();
      console.log("프로필 정보 불러오기", userRes.user);
      setUserInfo(userRes.user);
    } catch (error) {
      console.error("🚫데이터를 불러오는데 에러가 발생했어요", error);
    }
  }, []);

  //8.2 상품리스트 productListData api
  const productListData = useCallback(async () => {
    // console.log("userInfo---->", userInfo);
    if (!userInfo) return;
    try {
      const res = await fetch(`${URL}/product/${userInfo.accountname}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("네트워크 문제가 발생했어요.");
      }
      const data = await res.json();
      console.log("data", data);
      setList(data.product);
    } catch (error) {
      console.error("🚫데이터를 불러오는데 에러가 발생했어요", error);
    }
  }, [userInfo]);

  //판매중인 상품 삭제 기능 api
  const removeProduct = useCallback(async () => {
    try {
      const res = await fetch(`${URL}/product/${selectProduct.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("네트워크 문제가 발생했어요.");
      }
      const itemData = await res.json();

      const listArray = list.filter((item) => item.id !== selectProduct.id);
      console.log("list", listArray);
      console.log("상품 삭제기능", itemData);
      setList(listArray);
      return itemData;
    } catch (error) {
      // console.error("🚫등록된 상품이 없습니다.", error);
      console.error("🚫데이터를 불러오는데 에러가 발생했어요", error);
    }
  }, [selectProduct]);

  //5.3 유저별 게시글 목록
  const postLists = useCallback(async () => {
    try {
      const res = await fetch(`${URL}/post/${accountname}/userpost`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-type": "application/json",
        },
      });
      if (!res.ok) throw new Error("데이터를 불러올 수 없습니다.");
      const postData = await res.json();
      console.log("postData", postData.post);
      setPostList(postData.post);
    } catch (error) {
      console.error(error);
    }
  }, []);

  //PostModal -> 삭제버튼
  const handleRemoveButton = useCallback(() => {
    updateModalState(true, false);
    setModalType(true);
  }, []);

  //PostModal -> 수정버튼
  const handleModifyButton = useCallback(() => {
    updateModalState(true, false);
    setModalType(false);
  }, []);

  //Modal -> 선택상품 삭제
  const handleSelectedItem = useCallback(
    (selectProduct) => {
      console.log("선택상품 삭제 product", selectProduct);
      removeProduct();
      setSelectProduct(null);
      updateModalState(false, null);
    },
    [selectProduct]
  );

  //Modal -> 선택상품 수정
  const handleRenameItem = useCallback(() => {
    navigate(`/product/${selectProduct.id}/edit`);
    // navigate(`/product/${selectProduct.author.accountname}/edit`);
  }, [selectProduct]);

  //모달 취소 버튼
  const handleModalCancelButton = useCallback(() => {
    updateModalState(false, null);
  }, []);

  //userInfo 값이 없거나 list빈배열이면 컴포넌트 렌더링을 하지않는다.
  if (!userInfo || !list) return;

  return (
    <>
      <HomeLayout>
        <KebabHeader kebab={"true"} />
        <Sect1>
          <ProImg>
            <button>
              <StyledLink to={{ pathname: `/profile/${id}/followerslist` }}>
                <span>{userInfo.followerCount}</span>
                <p>followers</p>
              </StyledLink>
            </button>
            <img
              src={
                userInfo.image
                  ? userInfo.image
                  : "images/basic-profile-img-.svg"
              }
              alt="user-profile"
            />
            <button>
              <span>{userInfo.followingCount}</span>
              <p>followings</p>
            </button>
          </ProImg>
          <Intro>
            <h2>{userInfo.username}</h2>
            <p>{`@${userInfo.accountname}`}</p>
            {userInfo.intro ? (
              <p>{userInfo.intro}</p>
            ) : (
              <p>🎶내 소개를 입력해주세요!🎶</p>
            )}
          </Intro>
          <Btns>
            <StyledLink to={{ pathname: `/profile/${id}/edit` }}>
              <button className="btn-follow">프로필 수정</button>
            </StyledLink>
            <StyledLink to={{ pathname: `/product/addproduct` }}>
              <button className="btn-follow">상품 등록</button>
            </StyledLink>
          </Btns>
        </Sect1>
        <Sect2>
          {list.length > 0 ? (
            <ProductsList list={list} setSelectProduct={setSelectProduct} />
          ) : null}
        </Sect2>
        <Sect3>
          <div className="album-btns">
            <button>
              <img src="/images/icon-post-list-on.svg" alt="" />
            </button>
            <button>
              <img src="/images/icon-post-album-off.svg" alt="" />
            </button>
          </div>
          {/* 게시글 목록 */}
          <div className="contentWrap">
            <div className="content-container">
              {/* 게시글 한개 */}
              {postList &&
                postList.map((post) => (
                  <Post
                    key={post.id}
                    post={post}
                    movePage={(e) => {
                      navigate(`/post/${post.id}`);
                    }}
                  />
                ))}
            </div>
          </div>
        </Sect3>
        <Navigator />
      </HomeLayout>

      {/* 하단부 모달 */}
      {modalState.isPostModalShow && (
        <PostModal>
          <button onClick={handleRemoveButton}>삭제</button>
          <button onClick={handleModifyButton}>수정</button>
        </PostModal>
      )}
      {/* 전체 모달 */}
      {modalState.isCommonModal && (
        <Modal
          title={modalType ? "게시글을 삭제할까요?" : "상품을 수정할까요?"}
          handleModalCancelButton={handleModalCancelButton}
        >
          {modalType ? (
            <button type="button" onClick={handleSelectedItem}>
              삭제
            </button>
          ) : (
            <button type="button" onClick={handleRenameItem}>
              수정
            </button>
          )}
        </Modal>
      )}
    </>
  );
}

/**
 * @param {array} list 상품리스트 담긴 배열
 * @param setSelectProduct 선택된 상품확인 hook 상태변경함수
 * @returns ProductList 판매중인 상품 리스트
 */
export const ProductsList = ({ list, setSelectProduct }) => {
  console.log("productList", list);
  if (!list) return;

  return (
    <ProductsParents>
      <ProductsTitle>판매 중인 상품</ProductsTitle>
      <Swiper slidesPerView={2.5} className="productSwiper">
        {list &&
          list.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ProductItem item={item} setSelectProduct={setSelectProduct} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </ProductsParents>
  );
};

/**
 * @param item ProductList에서 전달한 단일객체
 * @param setSelectProduct 선택된 한개 상품
 * @param setIsShow 아이템 클릭시 PostModal의 상태 변경
 * @returns ProductItem
 */
export const ProductItem = ({ item, setSelectProduct }) => {
  //atom 상태 수정하기
  const [isModalState, setIsModalState] = useRecoilState(ProfileAtom);

  const handleProductItem = useCallback(() => {
    console.log("상품버튼 클릭", item);
    setSelectProduct(item);
    setIsModalState((prev) => ({
      ...prev,
      isPostModalShow: !prev.isPostModalShow,
    }));
  }, []);
  return (
    <ProductItemParent onClick={handleProductItem}>
      <StyledLink>
        <CommonImgLayout
          $w="140px"
          $h="90px"
          src={`https://api.mandarin.weniv.co.kr/${item.itemImage}`}
          alt={item.itemName}
        />
        <ProductsName>{item.itemName}</ProductsName>
        <ProductsPrice>
          {item.price ? item.price.toLocaleString() : 0}원
        </ProductsPrice>
      </StyledLink>
    </ProductItemParent>
  );
};

const HomeLayout = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
`;

const Sect1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProImg = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 41px;
  text-align: center;
  img {
    display: block;
    width: 110px;
    height: 110px;
    border: 1px solid #dbdbdb;
    border-radius: 100%;
  }
  button {
    background-color: #fff;
    border-style: none;
    span {
      font-size: 18px;
      font-weight: 700;
    }
    p {
      font-size: 10px;
      color: #767676;
    }
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 6px;
  }
  p {
    font-size: 12px;
    color: #767676;
    margin-bottom: 16px;
  }
`;

const Btns = styled.div`
  display: flex;
  /* margin-top: 24px; */
  margin-bottom: 24px;
  justify-content: center;
  gap: 10px;

  button {
    border-radius: 30px;
    border: 1px solid var(--DBDBDB, #dbdbdb);
    padding: 7px;
    background-color: #fff;
  }
  .btn-follow {
    color: #767676;
    width: 120px;
  }
`;

// section 2 =============================================

const Sect2 = styled.div`
  h2 {
    margin-top: 20px;
    margin-left: 18px;
    margin-bottom: 16px;
    font-weight: 700;
  }
`;

// section 3 =============================================

const Sect3 = styled.div`
  .album-btns {
    display: flex;
    justify-content: right;
    border-top: 6px solid var(--DBDBDB, #dbdbdb);
    border-bottom: 0.5px solid var(--DBDBDB, #dbdbdb);
    padding: 9px 0;
  }
  .content-container::-webkit-scrollbar {
    display: none;
  }
  .contentWrap {
    /* height: 300px;
    overflow: hidden; */
  }
  .content-container {
    /* 기존 높이 */
    /* height: 500px; */
    /* border: 2px solid purple; */
    padding-bottom: 100px;
    height: inherit;
    /* overflow: hidden;
    overflow-y: scroll; */
    overflow-x: visible;
    /* display: flex;
    flex-direction: column; */
    margin: 16px 16px 0;
    .content-list {
      display: flex;
      gap: 12px;
      margin-top: 12px;
    }
    .profile-img {
      width: 42px;
      height: 42px;
    }
    .content-title {
      display: flex;
      justify-content: space-between;
    }
    .content-id {
      h3 {
        margin-top: 2px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 600;
      }
      p {
        margin-top: 6px;
        margin-bottom: 16px;
        font-size: 12px;
        color: var(--767676, #767676);
      }
    }
    .content {
      display: flex;
      flex-direction: column;
    }
    .content-inner {
      font-size: 14px;
      p {
        margin-bottom: 16px;
      }
    }
    .like-comment {
      display: flex;
      button {
        display: flex;
        align-items: center;
        span {
          margin-left: 4px;
          margin-right: 4px;
          color: #767676;
        }
      }
    }
    .date {
      margin-top: 20px;
      color: #767676;
      font-size: 10px;
    }
  }

  img {
    border-radius: 10px;
  }
`;

// 판매중인 상품 리스트
const ProductsParents = styled.section`
  position: relative;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  padding: 20px 0 20px 20px;
  .productSwiper {
    overflow: hidden;
    position: relative;
    max-width: var(--appWidth);
  }
`;

const ProductsTitle = styled.p`
  font-weight: 700;
  padding-bottom: 16px;
`;

const ProductsName = styled.figcaption`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  padding: 6px 0 4px;
`;

const ProductsPrice = styled.p`
  color: var(--mainColor);
  font-weight: 700;
  font-size: 14px;
`;

const ProductItemParent = styled.div``;
