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
  IsRecommendedTopBar,
  RecommendedImage,
  RecommendedGeneralInfo,
  RecommendedTitle,
  RecommendedPlayTimeInfo,
  PurchasedOrActivagedImage,
  ReviewDateBar,
  EarlyAccessReviewPill,
  ReviewPostedDateText,
  ReviewText,
  IsHelpfulVoteContainer,
  IsReviewHelpfulText,
  IsReviewHelpfulVoteButtonsContainer,
  YesButtonContainer,
  YesButtonImage,
  YesButtonText,
  NoButtonContainer,
  NoButtonImage,
  NoButtonText,
  FunnyButtonContainer,
  FunnyButtonImage,
  FunnyButtonText,
  AwardButtonContainer,
  AwardButtonImage,
  AwardButtonText,
  IsHelpfulCountContainer,
  IsHelpfulStatMessagesContainer,
  StatMessagesContainer,
  HelpfulMessageStat,
  FunnyMessageStat,
  CommentCount,
  CommentCountNumber,
  CommentCountImage,
  AwardStats,
  AwardStatButton,
  AwardStatInfoHoverBox,
  AwardImage,
  AwardCount,
} from '../../styled';

const MainReviewListEntry = ({ review, review: {
  profilePictureUrl,
  isOnline,
  userName,
  productsCount,
  reviewCount,
  steamLevel,
  isRecommended,
  hoursOnRecord,
  userHoursOnRecordAtTimeOfReview,
  isPurchasedOrActivatedViaSteamFlags,
  isEarlyAccessReview,
  reviewDate,
  reviewText,
  isHelpfulCount,
  isFunnyCount,
  commentCount,
}, thumbsUpLogo, thumbsDownLogo, purchasedViaSteamImage, activatedViaSteamImage, awardImages }) => {
  const awardList = {};
  Object.keys(review).map((key) => { key.toLowerCase().indexOf('award') !== -1 && review[key] ? awardList[key] = review[key] : null; });
  return (
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
              <MainReviewListUserName className="username">
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
              <MainReviewListProductCount className="product_count">
                {`${productsCount} products in account`}
              </MainReviewListProductCount>
            </MainReviewListUserNameAndProductCount>
          </MainReviewListUserInfoGeneral>
          <MainReviewListReviewCount className="review_count">
            {`${reviewCount} reviews`}
          </MainReviewListReviewCount>
        </MainReviewListUserInfoContainer>
      </MainReviewListUserInfo>
      <MainReviewListReviewInfo>
        <IsRecommendedTopBar>
          <RecommendedImage src={isRecommended ? thumbsUpLogo : thumbsDownLogo}></RecommendedImage>
          <RecommendedGeneralInfo>
            <RecommendedTitle className="is_recommended_text">{isRecommended ? 'Recommended' : 'Not Recommended'}</RecommendedTitle>
            <RecommendedPlayTimeInfo>{`${hoursOnRecord} hrs on record (${userHoursOnRecordAtTimeOfReview} hrs at review time)`}</RecommendedPlayTimeInfo>
          </RecommendedGeneralInfo>
          <PurchasedOrActivagedImage src={isPurchasedOrActivatedViaSteamFlags === 'purchased' ? purchasedViaSteamImage : activatedViaSteamImage}></PurchasedOrActivagedImage>
        </IsRecommendedTopBar>
        <ReviewDateBar>
          {isEarlyAccessReview ? <EarlyAccessReviewPill>Early Access Review</EarlyAccessReviewPill> : null}
          <ReviewPostedDateText>{`Posted: ${(new Date(reviewDate)).toLocaleString('default', { month: 'long' })} ${(new Date(reviewDate)).getDate()}, ${(new Date(reviewDate)).getFullYear()}`}</ReviewPostedDateText>
        </ReviewDateBar>
        <ReviewText className="review_text">{reviewText}</ReviewText>
        <IsHelpfulVoteContainer>
          <IsReviewHelpfulText>Was this review helpful?</IsReviewHelpfulText>
          <IsReviewHelpfulVoteButtonsContainer>
            <YesButtonContainer>
              <YesButtonImage className="yes_button_image" src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/thumbs-up-22.png"></YesButtonImage>
              <YesButtonText>Yes</YesButtonText>
            </YesButtonContainer>
            <NoButtonContainer>
              <NoButtonImage className="no_button_image" src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/download-1.png"></NoButtonImage>
              <NoButtonText>No</NoButtonText>
            </NoButtonContainer>
            <FunnyButtonContainer>
              <FunnyButtonImage className="funny_button_image" src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/download.png"></FunnyButtonImage>
              <FunnyButtonText>Funny</FunnyButtonText>
            </FunnyButtonContainer>
            <AwardButtonContainer>
              <AwardButtonImage className="award_button_image" src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/download.svg"></AwardButtonImage>
              <AwardButtonText>Award</AwardButtonText>
            </AwardButtonContainer>
          </IsReviewHelpfulVoteButtonsContainer>
        </IsHelpfulVoteContainer>
        <IsHelpfulCountContainer>
          <IsHelpfulStatMessagesContainer>
            <StatMessagesContainer>
              {isHelpfulCount ? <HelpfulMessageStat className="is_helpful_count">{`${isHelpfulCount} people found this review helpful`}</HelpfulMessageStat> : null}
              {isFunnyCount ? <FunnyMessageStat>{`${isFunnyCount} people found this review funny`}</FunnyMessageStat> : null}
            </StatMessagesContainer>
            <CommentCount>
              {commentCount ? <CommentCountNumber className="comment_count">{commentCount}</CommentCountNumber> : null}
              {commentCount ? <CommentCountImage src="https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/comment_box.png"></CommentCountImage> : null}
            </CommentCount>
          </IsHelpfulStatMessagesContainer>
          <AwardStats>
            {Object.keys(awardList).map((award, i) => {
              return (
                <AwardStatButton key={i}>
                  <AwardImage src={awardImages[award]}></AwardImage>
                  {awardList[award] > 1 ? <AwardCount>{awardList[award]}</AwardCount> : null}
                </AwardStatButton>
              );
            })}
          </AwardStats>
        </IsHelpfulCountContainer>
      </MainReviewListReviewInfo>
    </MainReviewListReviewBoxContainer>
  );
};

export default MainReviewListEntry;
