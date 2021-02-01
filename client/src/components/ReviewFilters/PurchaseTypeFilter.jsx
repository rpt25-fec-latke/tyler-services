import React from 'react';

import { PurchaseTypeContainer, PurchaseTypeTitle, PurchaseTypeFlyoutMenu, DownArrow } from '../../styled';

const PurchaseTypeFilter = ({ reviewStats, updateReviewFilters }) => (
  <PurchaseTypeContainer>
    <PurchaseTypeTitle>
      Purchase Type
      <DownArrow>&#9660;</DownArrow>
    </PurchaseTypeTitle>
    <div className="purchase_menu_flyout">
      <form>
        <input type="radio" id="purchase_type_all" value="all" name="purchaseType" onChange={(e) => { updateReviewFilters(e.target.value, 'purchaseType'); }} />
        <span>All</span>
        <span>{`(${reviewStats.totalReviewCount})`}</span>
        <br></br>
        <input type="radio" id="purchase_type_steam" value="steam" name="purchaseType" onChange={(e) => { updateReviewFilters(e.target.value, 'purchaseType'); }} />
        <span>Steam Purchasers</span>
        <span>{`(${reviewStats.purchaseViaSteamCount})`}</span>
        <br></br>
        <input type="radio" id="purchase_type_other" value="other" name="purchaseType" onChange={(e) => { updateReviewFilters(e.target.value, 'purchaseType'); }} />
        <span>Other</span>
        <span>{`(${reviewStats.totalReviewCount - reviewStats.purchaseViaSteamCount})`}</span>
      </form>
    </div>
  </PurchaseTypeContainer>
);

export default PurchaseTypeFilter;
