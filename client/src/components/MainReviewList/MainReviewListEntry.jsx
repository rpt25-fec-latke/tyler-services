import React from 'react';

import {
  MainReviewListReviewBoxContainer,
  MainReviewListUserInfo,
  MainReviewListReviewInfo,
  MainReviewListUserInfoContainer,
  MainReviewListUserInfoGeneral,
  MainReviewListUserProfilePicContainer,
  MainReviewListUserProfilePic,
  MainReviewListUserNameAndProductCount,
  MainReviewListUserName,
  MainReviewListProductCount,
  MainReviewListReviewCount,
  MainReviewListUserProfilePicHoverBox,
  MainReviewListUsernameHoverBox,
  UserInfoHoverBoxProfilePic,
  UserInfoHoverBoxUsername,
  UserInfoHoverBoxOnlineStatus,
  UserInfoHoverBoxSteamLevel,
  UserInfoHoverBoxSteamLevelText,
} from '../../styled';

const MainReviewListEntry = ({ review: { profilePictureUrl, isOnline, userName, productsCount, reviewCount, steamLevel } }) => (
  <MainReviewListReviewBoxContainer>
    <MainReviewListUserInfo>
      <MainReviewListUserInfoContainer className="user_info_container">
        <MainReviewListUserInfoGeneral>
          <MainReviewListUserProfilePicContainer>
            <MainReviewListUserProfilePic src={profilePictureUrl} online={isOnline}></MainReviewListUserProfilePic>
            <MainReviewListUserProfilePicHoverBox className="user_profile_hover_box_profile_pic">
              <div>
                <UserInfoHoverBoxProfilePic src={profilePictureUrl} online={isOnline}></UserInfoHoverBoxProfilePic>
                <div>
                  <UserInfoHoverBoxSteamLevel steamLevel={steamLevel}>{steamLevel}</UserInfoHoverBoxSteamLevel>
                </div>
                <UserInfoHoverBoxSteamLevelText>Steam Level</UserInfoHoverBoxSteamLevelText>
              </div>
              <div>
                <UserInfoHoverBoxUsername online={isOnline}>{userName}</UserInfoHoverBoxUsername>
                <UserInfoHoverBoxOnlineStatus online={isOnline}>{isOnline === 1 ? 'Online' : 'Offline'}</UserInfoHoverBoxOnlineStatus>
              </div>
            </MainReviewListUserProfilePicHoverBox>
          </MainReviewListUserProfilePicContainer>
          <MainReviewListUserNameAndProductCount>
            <MainReviewListUserName>
              {userName}
              <MainReviewListUsernameHoverBox className="user_profile_hover_box_username">
                <div>
                  <UserInfoHoverBoxProfilePic src={profilePictureUrl} online={isOnline}></UserInfoHoverBoxProfilePic>
                  <div>
                    <UserInfoHoverBoxSteamLevel steamLevel={steamLevel}>{steamLevel}</UserInfoHoverBoxSteamLevel>
                  </div>
                  <UserInfoHoverBoxSteamLevelText>Steam Level</UserInfoHoverBoxSteamLevelText>
                </div>
                <div>
                  <UserInfoHoverBoxUsername online={isOnline}>{userName}</UserInfoHoverBoxUsername>
                  <UserInfoHoverBoxOnlineStatus online={isOnline}>{isOnline === 1 ? 'Online' : 'Offline'}</UserInfoHoverBoxOnlineStatus>
                </div>
              </MainReviewListUsernameHoverBox>
            </MainReviewListUserName>
            <MainReviewListProductCount>
              {`${productsCount} products in account`}
            </MainReviewListProductCount>
          </MainReviewListUserNameAndProductCount>
        </MainReviewListUserInfoGeneral>
        <MainReviewListReviewCount>
          {`${reviewCount} reviews`}
        </MainReviewListReviewCount>
      </MainReviewListUserInfoContainer>
    </MainReviewListUserInfo>
    <MainReviewListReviewInfo>
      {JSON.stringify(userName)}
    </MainReviewListReviewInfo>
  </MainReviewListReviewBoxContainer>
);

export default MainReviewListEntry;
