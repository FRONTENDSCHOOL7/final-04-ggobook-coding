import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CommonImgThumbnail } from "../../styles/GlobalStyle";
import { getToken } from "../../utils/common";
import { useNavigate, useParams } from "react-router";
import ButtonHeader from "../../components/Header/ButtonHeader";

/**
 * @param {}
 * @returns AddProduct
 */
export default function AddProduct() {
  const URL = "https://api.mandarin.weniv.co.kr";
  const navigate = useNavigate();
  const itemID = useParams().id; //profile에서 선택된 상품의 id값
  const [addProductData, setAddProductData] = useState(null); //신규 상품등록
  const [renameData, setRenameData] = useState(null); //신규상품을 저장한 뒤 수정하는 곳에서 사용 state
  const [productName, setProductName] = useState(""); //상품명
  const [inputPrice, setInputPrice] = useState("");
  const [salesLink, setSalesLink] = useState("");
  const inputFocuseRef = useRef(null);
  const [addFileImg, setAddFileImg] = useState(""); //이미지 등록
  const [uploadImg, setUploadImg] = useState(null);
  const [accountName, setAccountName] = useState(null); //user 정보
  console.log("addProduct ID", itemID, addProductData, accountName);

  useEffect(() => {
    inputFocuseRef.current.focus();
  }, []);

  //처음 상품 정보 가져올 때 id값으로 분기 처리
  useEffect(() => {
    if (itemID) productDetailInfoData();
  }, [itemID]);

  useEffect(() => {
    userInfoData();
  }, []);

  //이미지 api 등록 함수
  const imgSubmit = useCallback(async () => {
    const file = uploadImg;
    const formData = new FormData();
    formData.append("image", file); //서버에서 요청하는 image key값 적용

    const res = await fetch(`${URL}/image/uploadfile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      body: formData,
    });
    return res.json();
  }, [uploadImg, getToken]);

  //프로필정보 불러오기
  const userInfoData = useCallback(async () => {
    try {
      const res = await fetch(`${URL}/user/myinfo`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      if (!res.ok) {
        throw new Error("네트워크 문제가 발생했어요.");
      }
      const userRes = await res.json();
      console.log("프로필 정보 불러오기", userRes);
      setAccountName(userRes.user.accountname);
    } catch (error) {
      console.error("🚫데이터를 불러오는데 에러가 발생했어요", error);
    }
  }, [URL]);

  //8.2 선택된 상품 상품 상세 가져오기 api
  const productDetailInfoData = useCallback(async () => {
    try {
      const res = await fetch(`${URL}/product/detail/${itemID}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-type": "application/json",
        },
      });
      if (!res.ok) throw new Error("네트워크 문제가 발생했어요.");
      const selectedItem = await res.json();
      setAddProductData(selectedItem);
      setProductName(selectedItem.product.itemName);
      setInputPrice(String(selectedItem.product.price));
      setSalesLink(selectedItem.product.link);
      setAddFileImg(`${URL}/${selectedItem.product.itemImage}`);
    } catch (error) {
      console.error("🚫데이터를 불러오는데 에러가 발생했어요", error);
    }
  }, [itemID]);

  //product API 함수
  const handleAddProductSubmit = useCallback(
    async (e) => {
      if (e) e.preventDefault();
      try {
        //이미지를 넣어주기 위해서 body전에 삽입하고 imgSubmit을 호출
        const uploadResult = await imgSubmit();

        //상품id가 없을 경우 신규 상품 등록
        if (!itemID) {
          const res = await fetch(`${URL}/product`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${getToken()}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              product: {
                itemName: inputFocuseRef.current.value,
                price: Number(inputPrice),
                link: salesLink,
                itemImage: uploadResult.filename,
              },
            }),
          });
          const data = await res.json();
          setAddProductData(data);

          setProductName("");
          setInputPrice("");
          setSalesLink("");
          setAddFileImg("");
          navigate(`/profile/${accountName}`); //profile어카운트네임으로 이동
          if (!res.ok) throw new Error("네트워크 문제가 발생했어요.");
        }
        //상품id가 있을 경우 수정 api 적용
        else {
          const res = await fetch(`${URL}/product/${itemID}`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${getToken()}`,
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              product: {
                itemName: inputFocuseRef.current.value,
                price: Number(inputPrice),
                link: salesLink,
                itemImage: uploadResult.filename,
              },
            }),
          });
          const renameData = await res.json();
          //setSelectData에 renameData담기
          setAddProductData(renameData);
          navigate(`/profile/${accountName}`); //상품 수정 후 프로필로 이동
          if (!res.ok) throw new Error("네트워크 문제가 발생했어요.");
        }
      } catch (error) {
        if (!inputFocuseRef.current?.value || !inputPrice || !salesLink) {
          console.error("🚫필수 입력사항을 모두 입력해주세요", error);
        } else if (!Number(inputPrice)) {
          console.error("🚫가격은 숫자로 입력하셔야 합니다.", error);
        }
      }
    },
    [inputPrice, salesLink, inputFocuseRef, imgSubmit, getToken, itemID]
  );

  //천단위 콤마찍기
  const comma = (price) => {
    const string = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return string;
  };

  //상품명, 가격, 링크 공통 input 함수
  const handelInputAddProduct = useCallback((e) => {
    const { value, id } = e.target;
    const noComma = value.replaceAll(",", "");
    //name -> 공백 제외변경
    if (id !== "name" && noComma.indexOf(" ") !== -1) return;

    if (id === "price") {
      //숫자가 아닐경우 예외 처리
      if (isNaN(noComma)) return;
      const str = value.replaceAll(",", "");
      setInputPrice(str);
    } else if (id === "link") {
      setSalesLink(value);
    } else if (id === "name" && value.length <= 15) {
      setProductName(value);
    }
  }, []);

  //로컬에서 이미지 등록
  const handleAddFileImg = useCallback(async (e) => {
    const file = e.target.files[0];
    //file등록값이 없을 경우 return
    if (!file) return;

    setUploadImg(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setAddFileImg(reader.result || null);
    };
  }, []);

  return (
    <>
      <FormAddProductParent onSubmit={handleAddProductSubmit}>
        <ButtonHeader
          disabled={
            !inputPrice.length ||
            !salesLink.length ||
            !inputFocuseRef.current.value ||
            !addFileImg
          }
          children={itemID ? "수정" : "등록"}
        />
        <LayoutAddProduct>
          <LayoutInner>
            <label>이미지 등록*</label>

            <AddImgWrap>
              <input
                id="file"
                className="btnUpload"
                type="file"
                name="file"
                accept=".jpg, .jpeg, .png, .gif, .bmp, .tif, .heic"
                onChange={handleAddFileImg}
              />
              <CommonImgThumbnail
                src={addFileImg === "" ? null : addFileImg}
                alt=""
              />
            </AddImgWrap>
          </LayoutInner>

          <LayoutInner>
            <label htmlFor="name">
              상품명*
              <input
                id="name"
                type="text"
                value={productName}
                onChange={handelInputAddProduct}
                ref={inputFocuseRef}
                placeholder="2~15자 이내여야합니다."
              />
            </label>
          </LayoutInner>
          <LayoutInner>
            <label htmlFor="price">
              가격*
              <input
                id="price"
                type="text"
                value={comma(inputPrice)}
                onChange={handelInputAddProduct}
                placeholder="숫자만 입력가능합니다."
              />
            </label>
          </LayoutInner>
          <LayoutInner>
            <label htmlFor="link">
              판매 링크*
              <input
                id="link"
                type="text"
                value={salesLink}
                onChange={handelInputAddProduct}
                placeholder="URL을 입력해주세요"
              />
            </label>
          </LayoutInner>
        </LayoutAddProduct>
      </FormAddProductParent>
    </>
  );
}

const FormAddProductParent = styled.form`
  height: 100vh;
`;

const LayoutAddProduct = styled.ul`
  position: relative;
  padding: 48px 16px;
  label,
  input {
    display: block;
  }

  input {
    height: 30px;
    margin-top: 10px;
    border-bottom: 2px solid var(--disabled);
    &:focus {
      outline: none;
      border: none;
      border-bottom: 2px solid var(--mainColor);
    }
    &[type="file"] {
      border-bottom: none;
    }
  }

  label {
    font-size: 12px;
    line-height: 14px;
    color: #767676;
    margin-bottom: 18px;
    font-weight: 500;
  }
`;

const LayoutInner = styled.li`
  position: relative;

  button {
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
  &:nth-of-type(1) {
    margin-bottom: 30px;
  }
  &:nth-child(n + 1) {
    margin-bottom: 16px;
  }
`;

const AddImgWrap = styled.div`
  position: relative;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  //input file custom
  .btnUpload {
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    display: inline-block;
    background: url("/images/img-button.svg") center;
    cursor: pointer;
  }
  input[type="file"]::file-selector-button {
    background-color: transparent;
    border: none;
    color: transparent;
  }
`;
