import React from "react";
import { styled } from "styled-components";

const UserLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0 16px 0;
  padding: 0 16px;

  h3 {
    padding-bottom: 6px;
    font-size: 14px;
  }

  p {
    font-size: 12px;
    color: #767676;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export default function User() {
  return (
    <>
      <UserLayout>
        <img src="/images/img-profile-default.svg" alt="사용자 프로필 사진" />
        <div>
          <h3>애월읍 위니브 감귤농장</h3>
          <p>@weniv_Mandarin</p>
        </div>
      </UserLayout>
    </>
  );
}
