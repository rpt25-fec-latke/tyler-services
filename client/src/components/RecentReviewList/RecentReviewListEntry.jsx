import React from 'react';

import {
  RecentReviewListBoxContainer,
  RecentReviewsTopBar,
  RecommendedImage,
  RecentReviewsTopBarUserName,
  RecentReviewsTopBarTotalPlaytime,
  RecentReviewsPurchasedOrActivagedImage,
  RecentReviewReviewDateBar,
  EarlyAccessReviewPill,
  RecentReviewsReviewPostedDateText,
  RecentReviewsReviewText,
  RecentReviewsBottomFiller,
  RecentReviewsIsReviewHelpfulText,
  RecentReviewsIsReviewHelpfulVoteButtonsContainer,
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
  RecentReviewsStatMessagesContainer,
  HelpfulMessageStat,

} from '../../styled';

const RecentReviewListEntry = ({ review: {
  isRecommended,
  userName,
  hoursOnRecord,
  isPurchasedOrActivatedViaSteamFlags,
  isEarlyAccessReview,
  reviewDate,
  reviewText,
  isHelpfulCount,
  isFunnyCount,
}, thumbsUpLogo, thumbsDownLogo, purchasedViaSteamImage, activatedViaSteamImage }) => (
  <RecentReviewListBoxContainer>
    <RecentReviewsTopBar>
      <RecommendedImage src={isRecommended ? thumbsUpLogo : thumbsDownLogo}></RecommendedImage>
      <RecentReviewsTopBarUserName>{userName}</RecentReviewsTopBarUserName>
      <RecentReviewsTopBarTotalPlaytime>{`${hoursOnRecord} hrs`}</RecentReviewsTopBarTotalPlaytime>
      <RecentReviewsPurchasedOrActivagedImage src={isPurchasedOrActivatedViaSteamFlags === 'purchased' ? purchasedViaSteamImage : activatedViaSteamImage}></RecentReviewsPurchasedOrActivagedImage>
    </RecentReviewsTopBar>
    <RecentReviewReviewDateBar>
      {isEarlyAccessReview ? <EarlyAccessReviewPill>Early Access Review</EarlyAccessReviewPill> : null}
      <RecentReviewsReviewPostedDateText>{`Posted: ${(new Date(reviewDate)).toLocaleString('default', { month: 'long' })} ${(new Date(reviewDate)).getDate()}`}</RecentReviewsReviewPostedDateText>
    </RecentReviewReviewDateBar>
    <RecentReviewsReviewText>{reviewText}</RecentReviewsReviewText>
    <RecentReviewsBottomFiller />
    <RecentReviewsIsReviewHelpfulText>Helpful?</RecentReviewsIsReviewHelpfulText>
    <RecentReviewsIsReviewHelpfulVoteButtonsContainer>
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
    </RecentReviewsIsReviewHelpfulVoteButtonsContainer>
    <RecentReviewsStatMessagesContainer>
      {isHelpfulCount ? <HelpfulMessageStat>{`${isHelpfulCount} people found this review helpful`}</HelpfulMessageStat> : null}
    </RecentReviewsStatMessagesContainer>
  </RecentReviewListBoxContainer>
);

export default RecentReviewListEntry;
