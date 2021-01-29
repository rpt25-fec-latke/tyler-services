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
};
