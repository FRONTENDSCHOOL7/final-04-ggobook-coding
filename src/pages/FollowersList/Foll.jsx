import React from 'react';
import styled from 'styled-components';

import BasicLayout from '../../../../layout/BasicLayout';
import { useLocation } from 'react-router-dom';
// import { FollowerWrapper, FollowerList, FollowItem } from './FollowersPageStyle';
import { getFollowers } from '../../../../api/followApi';
import UserSimpleInfo from '../../../../components/common/UserSimpleInfo/UserSimpleInfo/UserSimpleInfo';
import useObserver from '../../../../hooks/useObserver';
import useInfiniteDataQuery from '../../../../hooks/useInfiniteDataQuery';
import { useRecoilValue } from 'recoil';
import { myProfileDataAtom } from '../../../../atoms/myProfile';
import { FOLLOWLIMIT } from '../../../../constants/pagenation';

// 총 배경 ================================================

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

const FollowerWrapper = styled.section`
  padding: 16px;

  button {
    width: 68px;
  }
`;

const FollowerList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const FollowItem = styled.li`
  & > div > div {
    width: calc(100% - 78px);
  }
`;

const accountname = useLocation().state.accountname;

const myProfileData = useRecoilValue(myProfileDataAtom);

const {
  data: followers,
  fetchNextPage,
  isLoading,
  hasNextPage,
} = useInfiniteDataQuery(['followers', accountname], getFollowers, {
  limit: FOLLOWLIMIT,
  select: (data) => {
    return data.pages.flatMap((page) => page.data);
  },
  enabled: !!accountname,
});

const observerRef = useObserver(hasNextPage, fetchNextPage, isLoading);

export default function Foll() {
  return (
    <HomeLayout type='follow' title='팔로워'>
      <FollowerWrapper>
        <FollowerList>
          {followers?.map((follower) => (
            <FollowItem key={follower._id}>
              <UserSimpleInfo
                profile={follower}
                type='follow'
                isLink={true}
                isMyProfile={myProfileData.accountname === follower.accountname}
              />
            </FollowItem>
          ))}
        </FollowerList>
        <div ref={observerRef} style={{ minHeight: '1px' }}></div>
      </FollowerWrapper>
    </HomeLayout>
  );
}

