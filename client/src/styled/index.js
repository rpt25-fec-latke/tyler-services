import styled from 'styled-components';

//----------------------------------------
// Parent Reviews styled
//----------------------------------------

export const Reviews = styled.div`
  border-top: 1px solid black;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterReviewsContainer = styled.div`
  width: 940px;
`;

export const ReviewListContainer = styled.div`
  display: flex;
`;

export const ReviewsTitle = styled.h2`
  font-family: "Motiva Sans", Sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  letter-spacing: 2px;
  font-weight: normal;
  padding-top: 2px;
  padding-bottom: 4px;
  margin: 0px;
`;

//----------------------------------------
// ReveiwsBreakdown styled
//----------------------------------------

export const ReviewsBreakdownContainer = styled.div`
  display: flex;
`;

export const OverallReviews = styled.div`
  background-color: #2a475e;
  padding: 10px;
  height: 42px;
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  width: 585px;
  box-shadow: 0 0 10px #000000;
`;

export const RecentReviews = styled.div`
  background-color: #416781;
  padding: 10px;
  height: 42px;
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  width: 320px;
  box-shadow: 0 0 10px #000000;
`;

export const SectionTitle = styled.div`
  margin-left: 0px;
  margin-bottom: 5px;
  padding-left: 0px;
  color: rgb(229, 229, 229);
  font-family: "Motiva Sans", sans-serif;
  font-size: 15px;
  font-weight: normal;
`;

export const TotalRatingGroup = styled.span`
  font-weight: bold;
  font-size: 17px;
  line-height: 9px;
  text-shadow: 1px 1px rgba( 0, 0, 0, 0.2 );
  cursor: help;
  color: ${({ type }) => {
    if (type === 'positive') {
      return '#66C0F4';
    } else if (type === 'mixed') {
      return '#a8926a';
    } else if (type === 'negative') {
      return '#c35c2c';
    } else {
      return '#929396';
    }
  }};
  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

export const RecentRatingGroup = styled.span`
  font-weight: bold;
  font-size: 17px;
  line-height: 9px;
  text-shadow: 1px 1px rgba( 0, 0, 0, 0.2 );
  cursor: help;
  color: ${({ type }) => {
    if (type === 'positive') {
      return '#66C0F4';
    } else if (type === 'mixed') {
      return '#a8926a';
    } else if (type === 'negative') {
      return '#c35c2c';
    } else {
      return '#929396';
    }
  }};
  &:hover .tooltip {
    opacity: 1;
  }
`;

export const ToolTip = styled.span`
  width: 275px;
  height: auto;
  width: max-content;
  max-width: 275px;
  padding: 5px;
  background-color:#c2c2c2;
  color: #3d3d3f;
  position: absolute;
  box-shadow: 0 0 5px #000;
  opacity: 0;
  pointer-events: auto;
  font-size: 11px;
  text-shadow: none;
  font-weight: normal;
  border-radius: 3px;
  white-space: normal;
  transition: opacity .5s;
`;

export const ReviewCount = styled.span`
  color: rgb(139, 166, 182);
  font-family: Arial, Helvetica, sans-serif ;
  font-size: 12px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const QuestionMarkImage = styled.img`
`;

//----------------------------------------
// ReveiwsFilters styled
//----------------------------------------

export const SteamLabsImageContainer = styled.div`
  height: 38px;
  line-height: 20px;
`;

export const SteamLabsImage = styled.img`
  height: 32px;
`;

export const SteamLabsText = styled.span`
  white-space: no-wrap;
  font-size: 12px;
  text-transform: none;
  position: relative;
  display: inline-block;
  bottom: 4px;
  left: 5px;
  color: #19c0d0;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const SliderDiv = styled.div`
  position: relative;
  width: 50%;
  max-width: 500px;
  height: 15px;
  margin-top: 15px;
`;

export const SliderInputLeft = styled.input`
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 10px;
  width: 100%;
  opacity: 0;
  ::-webkit-slider-thumb {
    pointer-events: all;
    width: 30px;
    height: 30px;
    border-radius: 0;
    border: 0 none;
    background-color: red;
    -webkit-appearance: none;
  }
`;

export const SliderInputRight = styled.input`
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 2;
  height: 10px;
  width: 100%;
  opacity: 0;
  ::-webkit-slider-thumb {
    pointer-events: all;
    width: 30px;
    height: 30px;
    border-radius: 0;
    border: 0 none;
    background-color: red;
    -webkit-appearance: none;
  }
`;

export const Slider = styled.div`
  position: relative;
  z-index: 1;
  height: 10px;
  margin: 0 15px;
`;

export const Track = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 7px;
  background-color: white;
`;

export const Range = styled.div`
  position: absolute;
  z-index: 2;
  left: 25%;
  right: 25%;
  height: 7px;
  top: 0;
  bottom: 0;
  background-color: #4582a5;
`;

export const ThumbLeft = styled.div`
  position: absolute;
  z-index: 3;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 7px #000000;
  transition: box-shadow .3s ease-in-out;
  left: 25%;
  transform: translate(-15px, -10px);
`;

export const ThumbRight = styled.div`
  position: absolute;
  z-index: 3;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 7px #000000;
  transition: box-shadow .3s ease-in-out;
  right: 25%;
  transform: translate(15px, -10px);
`;

export const ReviewFiltersContainer = styled.div`
`;

export const MenuOptions = styled.div`
  background-color: #203042;
  color: #4582a5;
  display: flex;
  height: 31px;
  margin-bottom: 30px;
`;

export const ReviewTypeContainer = styled.div`
`;

export const ReviewTypeTitle = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 7px 7px 7px 14px;
  height: 17px;
  width: 86.1719px;
  white-space: nowrap;
  font-size: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c6d4df;
  }
  &:hover .review_type_down_arrow {
    color: black;
  }
  &:hover .review_type_flyout {
    opacity: 1;
    visibility: visible;
  }
`;

export const ReviewTypeFlyoutMenu = styled.div`
  background-color: #c6d4df;
  position: relative;
  opacity: 0;
  cursor: default;
  right: 14px;
  top: 8px;
  height: 60x;
  width: 115.516px;
  padding: 10px;
  visibility: hidden;
  z-index: 1;
`;

export const PurchaseTypeContainer = styled.div`
`;

export const PurchaseTypeTitle = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 7px 7px 7px 14px;
  height: 17px;
  width: 102.297px;
  white-space: nowrap;
  font-size: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c6d4df;
  }
  &:hover .purchase_down_arrow {
    color: black;
  }
  &:hover .purchase_type_flyout {
    opacity: 1;
    visibility: visible;
  }
`;

export const PurchaseTypeFlyoutMenu = styled.div`
  background-color: #c6d4df;
  position: relative;
  opacity: 0;
  cursor: default;
  right: 14px;
  top: 8px;
  height: 60px;
  width: 178.438px;
  padding: 10px;
  padding-bottom: 15px;
  visibility: hidden;
  line-height: 20px;
  z-index: 1;
`;

export const LanguageTypeContainer = styled.div`
`;

export const LanguageTypeTitle = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 7px 7px 7px 14px;
  height: 17px;
  width: 73.5781px;
  white-space: nowrap;
  font-size: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c6d4df;
  }
  &:hover .language_down_arrow {
    color: black;
  }
  &:hover .language_type_flyout {
    opacity: 1;
    visibility: visible;
  }
`;

export const LanguageTypeFlyoutMenu = styled.div`
  background-color: #c6d4df;
  position: relative;
  opacity: 0;
  cursor: default;
  right: 14px;
  top: 8px;
  height: 61px;
  width: 166.484px;
  padding: 10px;
  visibility: hidden;
  z-index: 1;
`;

export const DateRangeContainer = styled.div`
`;

export const DateRangeTitle = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 7px 7px 7px 14px;
  height: 17px;
  width: 82.2812px;
  white-space: nowrap;
  font-size: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c6d4df;
  }
  &:hover .date_down_arrow {
    color: black;
  }
  &:hover .date_range_flyout {
    opacity: 1;
    visibility: visible;
  }
`;

export const DateRangeFlyoutMenu = styled.div`
  background-color: #c6d4df;
  position: relative;
  right: 14px;
  top: 8px;
  opacity: 0;
  cursor: default;
  visibility: hidden;
  width: 211.469px;
  padding: 10px;
  z-index: 1;
`;

export const PlayTimeContainer = styled.div`
  margin-left: 0px;
`;

export const PlaytimeTitle = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 7px 7px 7px 14px;
  height: 17px;
  width: 76.7188px;
  white-space: nowrap;
  font-size: 10px;
  cursor: pointer;
  &:hover {
    background-color: #c6d4df;
  }
  &:hover .playtime_down_arrow {
    color: black;
  }
  &:hover .playtime_flyout {
    opacity: 1;
    visibility: visible;
  }
`;

export const PlaytimeFlyoutMenu = styled.div`
  background-color: #c6d4df;
  position: relative;
  right: 14px;
  top: 8px;
  width: 300px;
  height: 203px;
  opacity: 0;
  cursor: default;
  visibility: hidden;
  padding: 10px;
  z-index: 1;
`;

export const DownArrow = styled.span`
  font-size: 13px;
  padding-left: 8px;
  color: #66c0f4;
`;

export const DisplayAsContainer = styled.div`
  display: flex;
`;

export const DisplayAsTitle = styled.span`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 10px 20px 15px 10px;
  margin-bottom: 0px;
  padding-right: 5px;
  width: auto;
  white-space: nowrap;
  height: 6px;
  font-size: 10px;
`;

export const DisplayAsOptions = styled.select`
  height: 16px;
  background-color: #4582a5;
  font-size: 12px;
  margin: 0px;
  padding: 0px;
  border: none;
  border-radius: 2px;
  margin-top: 8px;
`;

export const CustomizeButton = styled.button`
  background-color: #636a70;
  color: #67c1f5;
  text-transform: uppercase;
  font-size: 10px;
  padding: 2px 4px;
  border: none;
  border-radius: 2px;
  &:hover {
    color: white;
    background-color: #67c1f5;
    padding: 3px 5px;
    cursor: pointer;
  }
`;

export const FlyoutMenuText = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  white-space: nowrap;
  font-size: 12px;
  line-height: 20px;
  color: #596b76;
  text-transform: none;
`;

export const FlyoutMenuStat = styled.span`
  color: #7193a6;
  font-size: 12px;
  white-space: nowrap;
  line-height: 20px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: none;
  margin-left: 3px;
  margin-right: 3px;
`;

export const StartDateText = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  white-space: nowrap;
  font-size: 12px;
  line-height: 20px;
  color: #596b76;
  text-transform: none;
  padding-right: 5px;
`;

export const EndDateText = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  white-space: nowrap;
  font-size: 12px;
  line-height: 20px;
  color: #596b76;
  text-transform: none;
  padding-right: 5px;
`;

export const PlaytimeFlyoutDescriptionText = styled.div`
  padding-bottom: 10px;
  text-transform: none;
  white-space: normal;
  margin-bottom: 10px;
  font-size: 12px;
  color: #556772;
  border-bottom: 1px solid #4582a5;
`;

export const MinHours = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: #556772;
  text-transform: none;
  padding-right: 5px;
`;

export const MinMaxBetweenText = styled.span`
  font-size: 12px;
  color: #556772;
  text-transform: none;
`;

export const MaxHours = styled.span`
  font-weight: 700;
  font-size: 12px;
  color: #556772;
  text-transform: none;
  padding-left: 5px;
`;

export const ShowGraphContainer = styled.div`
  margin-left: 150px;
  width: 98.3906px;
  border-radius: 2px;
  background-color: rgba(103, 193, 245, 0.2);
  color: #67c1f5;
  margin-bottom: 10px;
  white-space: nowrap;
  font-size: 12px;
  &:hover {
    background: linear-gradient(-60deg, #417a9b 5%,#67c1f5 95%);
    color: white;
    cursor: pointer;
  }
`;

export const ShowGraphText = styled.span`
  position: relative;
  left: 5px;
  bottom: 3px;
  margin-bottom: 5px;
`;

export const ShowGraphArrow = styled.span`
  position: relative;
  top: 5px;
  left: 5px;
  font-size: 17px;
  color: #c6d4df;
`;

export const FilterInfoContainer = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: solid black 1px;
`;

export const ReviewFilterPillsContainer = styled.div`
  display: flex;
  height: 27px;
`;

export const ReviewFilterPillsTitle = styled.div`
  color: #c6d4df;
  font-size: 15px;
  font-weight: 400;
  margin-right: 5px;
  padding-top: 3px;
  display: inline-block;
`;

export const ReviewFilterPillContainer = styled.div`
  border-radius: 2px;
  background-color: rgba( 255, 255, 255, 0.2 );
  color: #c6d4df;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 12px;
  padding: 5px 10px 7px 5px;
  display: inline-block;
  width: auto;
  height: 14px;
`;

export const ReviewFilterPillText = styled.span`
`;

export const ReviewFilterPillImage = styled.img`
  position: relative;
  left: 5px;
  top: 2px;
`;

export const FilteredReviewsStatContainer = styled.div`
  padding-top: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #c6d4df;
`;

export const FilteredReviewsStatNormalText = styled.span`
`;

export const FilteredReviewsStatBoldText = styled.b`
  margin-left: 5px;
  margin-right: 5px;
`;

export const FilteredReviewsStatRatingGroup = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 700;
  cursor: help;
  color: ${({ type }) => {
    if (type === 'positive') {
      return '#66C0F4';
    } else if (type === 'mixed') {
      return '#a8926a';
    } else if (type === 'negative') {
      return '#c35c2c';
    } else {
      return '#929396';
    }
  }};
`;

//----------------------------------------
// MainReviewList styled
//----------------------------------------

export const MainReviewListContainer = styled.div`
  width: 616px;
`;

export const MainReviewsSectionTitle = styled.div`
  font-family: "Motiva Sans", Sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  padding-bottom: 5px;
  height: 20px;
`;

export const MainReviewListReviewBoxContainer = styled.div`
  display: flex;
  background-color: rgba( 0, 0, 0, 0.2 );
  background-image: url('https://fec-latke-steam-reviews.s3-us-west-1.amazonaws.com/maincol_gradient_rule.png');
  background-position-x: 0%;
  background-position-y: 0%;
  margin-bottom: 26px;
  background-position: top left;
  color: #c6d4df;
  background-repeat: no-repeat;
  &:hover .user_info_container {
    opacity: 1;
  }
`;

export const MainReviewListUserInfo = styled.div`
  width: 184px;
`;

export const MainReviewListUserInfoContainer = styled.div`
  padding: 8px;
  height: 48px;
  opacity: .7;
  &:hover {
    opacity: 1;
  }
`;

export const MainReviewListUserInfoGeneral = styled.div`
  display: flex;
`;

export const MainReviewListUserProfilePicContainer = styled.div`
  padding-right: 8px;
  margin-left: -2px;
  height: 32px;
  width: 38px;
  &:hover .user_profile_hover_box_profile_pic {
    visibility: visible;
  }
`;

export const MainReviewListUserProfilePic = styled.img`
  height: 32px;
  width: 32px;
  border: 2.5px solid;
  margin: 1px;
  object-fit: cover;
  border-image-source: ${({ online }) => {
    if (online === 1) {
      return 'linear-gradient(rgb(65, 119, 143) 5%, rgb(61, 105, 123) 95%)';
    } else {
      return 'linear-gradient(rgb(81, 81, 81) 5%, rgb(71, 71, 71) 95%)';
    }
  }};
  border-image-slice: 1;
  cursor: pointer;
`;

export const MainReviewListUserNameAndProductCount = styled.div`
  width: 125px;
`;

export const MainReviewListUserName = styled.div`
  color: #c1dbf4;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  height: 15px;
  &:hover .user_profile_hover_box_username {
    visibility: visible;
  }
`;

export const MainReviewListProductCount = styled.div`
  color: #c1dbf4;
  cursor: pointer;
  font-size: 11px;
  line-height: 17px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 5px;
  &:hover {
    color: #67c1f5;
  }
`;

export const MainReviewListReviewCount = styled.div`
  color: #c1dbf4;
  cursor: pointer;
  font-size: 11px;
  line-height: 17px;
  width: 55px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    color: #67c1f5;
  }
`;

export const MainReviewListUserProfilePicHoverBox = styled.div`
  position: relative;
  display: flex;
  background: rgb(100,96,96);
  background: linear-gradient(0deg, rgba(100,96,96,1) 14%, rgba(34,37,43,1) 40%, rgba(100,96,96,1) 40%, rgba(93,90,91,1) 61%);
  height: 100px;
  width: 100px;
  right: 336px;
  bottom: 50px;
  width: 330px;
  height: 169px;
  visibility: hidden;
  z-index: 1;
  padding-left: 15px;
  padding-top: 15px;
  overflow: hidden;
`;

export const MainReviewListUsernameHoverBox = styled.div`
  position: relative;
  display: flex;
  background: rgb(100,96,96);
  background: linear-gradient(0deg, rgba(100,96,96,1) 14%, rgba(34,37,43,1) 40%, rgba(100,96,96,1) 40%, rgba(93,90,91,1) 61%);
  height: 100px;
  width: 100px;
  right: 336px;
  bottom: 40px;
  width: 330px;
  height: 169px;
  visibility: hidden;
  z-index: 1;
  padding-left: 15px;
  padding-top: 15px;
  overflow: hidden;
`;

export const UserInfoHoverBoxProfilePic = styled.img`
  height: 110px;
  width: 110px;
  border: 5px solid;
  border-image-source: ${({ online }) => {
    if (online === 1) {
      return 'linear-gradient(rgb(65, 119, 143) 5%, rgb(61, 105, 123) 95%)';
    } else {
      return 'linear-gradient(rgb(81, 81, 81) 5%, rgb(71, 71, 71) 95%)';
    }
  }};
  border-image-slice: 1;
`;

export const UserInfoHoverBoxUsername = styled.div`
  color: ${({ online }) => {
    if (online === 1) {
      return '#66c0f4';
    } else {
      return '#807e7e';
    }
  }};
  text-shadow: 2px 2px 5px black;
  font-weight: normal;
  font-size: 25px;
  padding-top: 25px;
  padding-left: 10px;
`;

export const UserInfoHoverBoxOnlineStatus = styled.div`
  color: ${({ online }) => {
    if (online === 1) {
      return '#66c0f4';
    } else {
      return '#807e7e';
    }
  }};
  text-shadow: 2px 2px 5px black;
  font-size: 12px;
  font-weight: normal;
  padding-left: 10px;
  padding-top: 5px;
`;

export const UserInfoHoverBoxSteamLevel = styled.div`
  display: inline-block;
  margin-left: 20px;
  margin-top: 10px;
  width: 23px;
  height: 20px;
  text-align: center;
  padding-top: 3px;
  border: 2px solid;
  border-color: ${({ steamLevel }) => {
    if (steamLevel < 10) {
      return '#999999';
    } else if (steamLevel < 20 && steamLevel >= 10) {
      return '#bd2d48';
    } else if (steamLevel < 30 && steamLevel >= 20) {
      return '#d25d48';
    } else if (steamLevel < 40 && steamLevel >= 30) {
      return '#fad129';
    } else if (steamLevel < 50 && steamLevel >= 40) {
      return '#67895c';
    } else if (steamLevel < 60 && steamLevel >= 50) {
      return '#548dd9';
    } else if (steamLevel < 70 && steamLevel >= 60) {
      return '#7953c4';
    } else if (steamLevel < 80 && steamLevel >= 70) {
      return '#bc56c6';
    } else if (steamLevel < 90 && steamLevel >= 80) {
      return '#4f2239';
    } else if (steamLevel < 100 && steamLevel >= 90) {
      return '#977b53';
    }
  }};
  border-radius: 50%;
  color: white;
  font-size: 16px;
  font-weight: normal;
`;

export const UserInfoHoverBoxSteamLevelText = styled.div`
  position: relative;
  left: 60px;
  bottom: 22px;
  color: #b5b5b5;
  font-size: 16px;
  font-weight: normal;
`;

export const MainReviewListReviewInfo = styled.div`
`;

//----------------------------------------
// RecentReviewList styled
//----------------------------------------

export const RecentReviewListContainer = styled.div`
  width: 308px;
  margin-left: 14px;
`;

export const RecentReviewsSectionTitle = styled.div`
  font-family: "Motiva Sans", Sans-serif;
  text-transform: uppercase;
  font-size: 14px;
  color: white;
  letter-spacing: 2px;
  font-weight: 400;
  padding-bottom: 5px;
  height: 20px;
`;
