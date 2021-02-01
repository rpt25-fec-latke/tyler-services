import styled from 'styled-components';

//----------------------------------------
// ReveiwsBreakdown styled
//----------------------------------------

const OverallReviews = styled.div`
  background-color: #2a475e;
  padding: 10px;
  min-height: 38px;
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  width: 585px;
`;

const RecentReviews = styled.div`
  background-color: #416781;
  padding: 10px;
  min-height: 38px;
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  width: 320px;
`;

const SectionTitle = styled.div`
  margin-left: 0px;
  margin-bottom: 5px;
  padding-left: 0px;
  color: rgb(229, 229, 229);
  font-family: "Motiva Sans", sans-serif;
  font-size: 15px;
  font-weight: normal;
`;

const TotalRatingGroup = styled.span`
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

const RecentRatingGroup = styled.span`
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

const ToolTip = styled.span`
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

const ReviewCount = styled.span`
  color: rgb(139, 166, 182);
  font-family: Arial, Helvetica, sans-serif ;
  font-size: 12px;
  padding-left: 5px;
  padding-right: 5px;
`;

const QuestionMarkImage = styled.img`
  visibility: visible;
  opacity: 1;
`;

//----------------------------------------
// ReveiwsFilters styled
//----------------------------------------

const SteamLabsImage = styled.img`
  height: 32px;
`;

const SliderDiv = styled.div`
  position: relative;
  width: 50%;
  max-width: 500px;
  height: 15px;
  margin-top: 15px;
`;

const SliderInputLeft = styled.input`
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

const SliderInputRight = styled.input`
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

const Slider = styled.div`
  position: relative;
  z-index: 1;
  height: 10px;
  margin: 0 15px;
`;

const Track = styled.div`
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

const Range = styled.div`
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

const ThumbLeft = styled.div`
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

const ThumbRight = styled.div`
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

const ReviewFiltersContainer = styled.div`
  background-color: #203042;
  color: #4582a5;
`;

const ReviewTypeContainer = styled.div`
`;

const ReviewTypeTitle = styled.div`
  text-transform: uppercase;
  border-left: solid 2px #2a475e;
`;

const ReviewTypeFlyoutMenu = styled.div`
`;

const PurchaseTypeContainer = styled.div`
`;

const PurchaseTypeTitle = styled.div`
  text-transform: uppercase;
`;

const PurchaseTypeFlyoutMenu = styled.div`
`;

const LanguageTypeContainer = styled.div`
`;

const LanguageTypeTitle = styled.div`
  text-transform: uppercase;
`;

const LanguageTypeFlyoutMenu = styled.div`
`;

const DateRangeContainer = styled.div`
`;

const DateRangeTitle = styled.div`
  text-transform: uppercase;
`;

const DateRangeFlyoutMenu = styled.div`
`;

const PlayTimeContainer = styled.div`
  margin-left: 0px
`;

const PlaytimeTitle = styled.div`
  text-transform: uppercase;
`;

const PlaytimeFlyoutMenu = styled.div`
`;

const DownArrow = styled.span`
  font-size: 8px;
`;

const DisplayAsTitle = styled.span`
  text-transform: uppercase;
`;

//----------------------------------------
// MainReviewList styled
//----------------------------------------

//----------------------------------------
// RecentReviewList styled
//----------------------------------------

export {
  OverallReviews,
  RecentReviews,
  SectionTitle,
  TotalRatingGroup,
  RecentRatingGroup,
  ToolTip,
  ReviewCount,
  QuestionMarkImage,
  SteamLabsImage,
  SliderDiv,
  SliderInputLeft,
  SliderInputRight,
  Slider,
  Track,
  Range,
  ThumbLeft,
  ThumbRight,
  ReviewFiltersContainer,
  ReviewTypeContainer,
  ReviewTypeTitle,
  ReviewTypeFlyoutMenu,
  PurchaseTypeContainer,
  PurchaseTypeTitle,
  PurchaseTypeFlyoutMenu,
  LanguageTypeContainer,
  LanguageTypeTitle,
  LanguageTypeFlyoutMenu,
  DateRangeContainer,
  DateRangeTitle,
  DateRangeFlyoutMenu,
  PlayTimeContainer,
  PlaytimeTitle,
  PlaytimeFlyoutMenu,
  DownArrow,
  DisplayAsTitle,
};
