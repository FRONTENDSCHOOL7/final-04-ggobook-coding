import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const NavLayout = styled.nav`
  border-top: 1px solid #dbdbdb;
  background: #fff;
  padding: 12px 0 6px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  max-width: 390px;

  ul {
    display: flex;
    justify-content: space-around;
  }

  img {
    width: 24px;
    height: 24px;
    margin: 0 auto 4px;
  }

  li {
    text-align: center;
  }

  a {
    text-decoration: none;
    font-size: 10px;
    color: #767676;
    line-height: 14px;
  }

  .active {
    color: var(--mainColor);
  }

  img {
    fill: var(--mainColor);
  }
`;

let navigators = [
  { id: 1, name: "홈", path: "/home", img: "/images/icon-home.svg" },
  {
    id: 2,
    name: "채팅",
    path: "/chatlist",
    img: "/images/icon-message-circle.svg",
  },
  {
    id: 3,
    name: "게시글 작성",
    path: "/post/upload",
    img: "/images/icon-edit.svg",
  },
  { id: 4, name: "프로필", path: "/profile", img: "/images/icon-user.svg" },
];

let navList = [];
navigators.map((nav) =>
  navList.push(
    <li key={nav.id}>
      <NavLink exact="true" to={nav.path}>
        <img src={nav.img} /> {nav.name}
      </NavLink>
    </li>
  )
);

export default function Navigator() {
  return (
    <NavLayout>
      <ul>{navList}</ul>
    </NavLayout>
  );
}
