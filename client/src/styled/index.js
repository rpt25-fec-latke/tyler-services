import styled from 'styled-components';

//----------------------------------------
// Parent Reviews styled
//----------------------------------------

export const Reviews = styled.div`
  border-top: 1px solid black;
  margin-top: 0px;
  display: flex;
`;

export const LeftReviewsContainer = styled.div`
  width: 475px;
`;

export const CenterReviewsContainer = styled.div`
  width: 940px;
`;

export const RightReviewsContainer = styled.div`
  width: 320px;
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

export const SteamLabsImage = styled.img`
  height: 32px;
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
  border-radius: 5px;
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
  border-radius: 5px;
  background-color: #4582a5;
`;

export const ThumbLeft = styled.div`
  position: absolute;
  z-index: 3;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid black;
  box-shadow: 0 0 0 0 rgba(98,0,238,.1);
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
  border: 1px solid black;
  box-shadow: 0 0 0 0 rgba(98,0,238,.1);
  transition: box-shadow .3s ease-in-out;
  right: 25%;
  transform: translate(15px, -10px);
`;

export const ReviewFiltersContainer = styled.div`
  background-image: none;
`;

export const MenuOptions = styled.div`
  background-color: #203042;
  color: #4582a5;
  display: flex;
`;

export const ReviewTypeContainer = styled.div`
`;

export const ReviewTypeTitle = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 10px 20px 15px 5px;
  margin-bottom: 0px;
  width: auto;
  white-space: nowrap;
  height: 11px;
  width: 68.1719px;
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
  right: 5px;
  top: 10px;
  height: 60x;
  width: 106.406px;
  padding: 10px;
  visibility: hidden;
`;

export const PurchaseTypeContainer = styled.div`
`;

export const PurchaseTypeTitle = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 10px 20px 15px 10px;
  margin-bottom: 0px;
  width: 84.2969px;
  white-space: nowrap;
  height: 11px;
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
  right: 10px;
  top: 10px;
  height: 60px;
  width: 178.438px;
  padding: 10px;
  visibility: hidden;
`;

export const LanguageTypeContainer = styled.div`
`;

export const LanguageTypeTitle = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 10px 20px 15px 10px;
  margin-bottom: 0px;
  margin-left: 0px;
  width: 55.5781px;
  white-space: nowrap;
  height: 11px;
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
  right: 10px;
  top: 10px;
  height: 61px;
  width: 166.484px;
  padding: 10px;
  visibility: hidden;
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

export const DateRangeContainer = styled.div`
`;

export const DateRangeTitle = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 10px 20px 15px 10px;
  margin-bottom: 0px;
  width: auto;
  white-space: nowrap;
  height: 11px;
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
  position: absolute;
  opacity: 0;
  cursor: default;
  visibility: hidden;
`;

export const PlayTimeContainer = styled.div`
  margin-left: 0px
`;

export const PlaytimeTitle = styled.div`
  text-transform: uppercase;
  border-left: solid 1px #2a475e;
  padding: 10px 20px 15px 10px;
  margin-bottom: 0px;
  width: auto;
  white-space: nowrap;
  height: 11px;
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
  position: absolute;
  opacity: 0;
  cursor: default;
  visibility: hidden;
`;

export const DownArrow = styled.span`
  font-size: 13px;
  padding-left: 5px;
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
  height: 11px;
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

//----------------------------------------
// MainReviewList styled
//----------------------------------------

export const MainReviewListContainer = styled.div`
  width: 616px;
`;

//----------------------------------------
// RecentReviewList styled
//----------------------------------------

export const RecentReviewListContainer = styled.div`
  width: 308px;
`;
