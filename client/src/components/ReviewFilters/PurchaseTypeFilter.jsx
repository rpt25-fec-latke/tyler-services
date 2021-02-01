import React from 'react';

import { PurchaseTypeContainer, PurchaseTypeTitle, PurchaseTypeFlyoutMenu, DownArrow, FlyoutMenuText, FlyoutMenuStat, QuestionMarkImage } from '../../styled';

const PurchaseTypeFilter = ({ reviewStats, updateReviewFilters, questionMarkImage }) => (
  <PurchaseTypeContainer>
    <PurchaseTypeTitle>
      Purchase Type
      <DownArrow className="purchase_down_arrow">&#9662;</DownArrow>
      <PurchaseTypeFlyoutMenu className="purchase_type_flyout">
        <form>
          <input type="radio" id="purchase_type_all" value="all" name="purchaseType" onChange={(e) => { updateReviewFilters(e.target.value, 'purchaseType'); }} />
          <FlyoutMenuText>All</FlyoutMenuText>
          <FlyoutMenuStat>{`(${reviewStats.totalReviewCount})`}</FlyoutMenuStat>
          <br></br>
          <input type="radio" id="purchase_type_steam" value="steam" name="purchaseType" onChange={(e) => { updateReviewFilters(e.target.value, 'purchaseType'); }} />
          <FlyoutMenuText>Steam Purchasers</FlyoutMenuText>
          <FlyoutMenuStat>{`(${reviewStats.purchaseViaSteamCount})`}</FlyoutMenuStat>
          <QuestionMarkImage src={questionMarkImage} alt="question mark"></QuestionMarkImage>
          <br></br>
          <input type="radio" id="purchase_type_other" value="other" name="purchaseType" onChange={(e) => { updateReviewFilters(e.target.value, 'purchaseType'); }} />
          <FlyoutMenuText>Other</FlyoutMenuText>
          <FlyoutMenuStat>{`(${reviewStats.totalReviewCount - reviewStats.purchaseViaSteamCount})`}</FlyoutMenuStat>
          <QuestionMarkImage src={questionMarkImage} alt="question mark"></QuestionMarkImage>
        </form>
      </PurchaseTypeFlyoutMenu>
    </PurchaseTypeTitle>
  </PurchaseTypeContainer>
);

export default PurchaseTypeFilter;
