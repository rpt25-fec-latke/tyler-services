import React from 'react';

import { PurchaseTypeContainer, PurchaseTypeTitle, PurchaseTypeFlyoutMenu, DownArrow, FlyoutMenuText, FlyoutMenuStat, QuestionMarkImage } from '../../styled';

const PurchaseTypeFilter = ({ reviewStats, updateReviewFilters, questionMarkImage }) => (
  <PurchaseTypeContainer>
    <PurchaseTypeTitle>
      Purchase Type
      <DownArrow className="purchase_down_arrow">&#9662;</DownArrow>
      <PurchaseTypeFlyoutMenu className="purchase_type_flyout">
        <form>
          <input type="radio" className="purchase_type_all_filter" value="all" name="purchaseType" onChange={(e) => { updateReviewFilters(e.target.value, 'purchaseType'); }} />
          <FlyoutMenuText>All</FlyoutMenuText>
          <FlyoutMenuStat className="purchase_type_all_count_stat">{`(${reviewStats.totalReviewCount})`}</FlyoutMenuStat>
          <br></br>
          <input type="radio" value="steam" name="purchaseType" onChange={(e) => { updateReviewFilters(e.target.value, 'purchaseType'); }} />
          <FlyoutMenuText>Steam Purchasers</FlyoutMenuText>
          <FlyoutMenuStat className="purchase_type_steam_count_stat">{`(${reviewStats.purchaseViaSteamCount})`}</FlyoutMenuStat>
          <QuestionMarkImage src={questionMarkImage} alt="question mark"></QuestionMarkImage>
          <br></br>
          <input type="radio" value="other" name="purchaseType" onChange={(e) => { updateReviewFilters(e.target.value, 'purchaseType'); }} />
          <FlyoutMenuText>Other</FlyoutMenuText>
          <FlyoutMenuStat className="purchase_type_other_count_stat">{`(${reviewStats.totalReviewCount - reviewStats.purchaseViaSteamCount})`}</FlyoutMenuStat>
          <QuestionMarkImage src={questionMarkImage} alt="question mark"></QuestionMarkImage>
        </form>
      </PurchaseTypeFlyoutMenu>
    </PurchaseTypeTitle>
  </PurchaseTypeContainer>
);

export default PurchaseTypeFilter;
