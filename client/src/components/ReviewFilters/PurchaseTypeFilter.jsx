import React from 'react';

import { DropDownText } from '../../styled';

const PurchaseTypeFilter = ({ reviewStats, updatePurchaseTypeFilters }) => (
  <div className="purchase_filter_menu">
    <DropDownText>Purchase Type</DropDownText>
    <div className="purchase_menu_flyout">
      <form>
        <input type="radio" id="purchase_type_all" value="all" name="purchaseType" onChange={updatePurchaseTypeFilters} />
        <span>All</span>
        <span>{`(${reviewStats.totalReviewCount})`}</span>
        <br></br>
        <input type="radio" id="purchase_type_steam" value="steam" name="purchaseType" onChange={updatePurchaseTypeFilters} />
        <span>Steam Purchasers</span>
        <span>{`(${reviewStats.purchaseViaSteamCount})`}</span>
        <br></br>
        <input type="radio" id="purchase_type_other" value="other" name="purchaseType" onChange={updatePurchaseTypeFilters} />
        <span>Other</span>
        <span>{`(${reviewStats.totalReviewCount - reviewStats.purchaseViaSteamCount})`}</span>
      </form>
    </div>
  </div>
);

export default PurchaseTypeFilter;
