import React from 'react';

const PurchaseTypeFilter = ({ reviewStats, updatePurchaseTypeFilters }) => (
  <div className="purchase_filter_menu">
    <div className="purchase_type_title">Purchase Type</div>
    <div className="menu_flyout">
      <form>
        <label htmlFor="purchase_type_all">
          All
          <input type="radio" id="purchase_type_all" value="all" name="purchaseType" onChange={updatePurchaseTypeFilters}></input>
        </label>
        <span>{`(${reviewStats.totalReviewCount})`}</span>
        <label htmlFor="purchase_type_steam">
          Steam Purchasers
          <input type="radio" id="purchase_type_steam" value="steam" name="purchaseType" onChange={updatePurchaseTypeFilters}></input>
        </label>
        <span>{`(${reviewStats.purchaseViaSteamCount})`}</span>
        <label htmlFor="purchase_type_other">
          Other
          <input type="radio" id="purchase_type_other" value="other" name="purchaseType" onChange={updatePurchaseTypeFilters}></input>
        </label>
        <span>{`(${reviewStats.totalReviewCount - reviewStats.purchaseViaSteamCount})`}</span>
      </form>
    </div>
  </div>
);

export default PurchaseTypeFilter;
