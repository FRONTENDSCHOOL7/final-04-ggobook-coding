import { atom } from 'recoil';

export const ProfileAtom = atom({
  key: "ProfileAtom",
  default: {
    isCommonModal: false, //공통 모달
    isPostModalShow: false, //하단 포스트 모달
  },
});