import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SplashScreen from "../pages/SplashScreen/SplashScreen";
import Login from "../pages/Login/Login";
import JoinMembership from "../pages/Join/JoinMembership";
import ProfileSetting from "../pages/Join/ProfileSetting";
import LoginEmail from "./Login/LoginEmail";
import Home from "./Home/Home2";
import Search from "./Search/Search";
import Profile from "./Profile/profile";
import ProfileModification from "./Profile/ProfileModification";
import FollowersList from "./FollowersList/FollowersList";
import AddProduct from "./AddProduct/AddProduct";
import Post from "./Post/Post";
import Upload from "./Upload/Upload";
import ChatList from "./ChatList/ChatList";
import ChatRoom from "./ChatRoom/ChatRoom";
import NotFound from "./NotFound/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        {/* 로그인 */}
        <Route path="/login" element={<Login />} />
        <Route path="/loginemail" element={<LoginEmail />} />
        <Route path="/joinmembership" element={<JoinMembership />} />
        {/* 프로필 설정 */}
        <Route path="/profilesetting" element={<ProfileSetting />} />
        {/* 홈 -> 경로 수정 필요 */}
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* 로그인 했을 경우 */}
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/:id/edit" element={<ProfileModification />} />
        {/* follower list */}
        <Route path="/profile/:id/followerslist" element={<FollowersList />} />
        {/* 상품등록 */}
        <Route path="/product/addproduct" element={<AddProduct />} />
        <Route path="/product/:id/edit" element={<AddProduct />} />
        {/* 게시물 */}
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/upload" element={<Upload />} />
        {/* 채팅 */}
        <Route path="/chatlist" element={<ChatList />} />
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
