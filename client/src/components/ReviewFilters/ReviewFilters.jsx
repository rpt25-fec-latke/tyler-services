import React from 'react';

const ReviewFilters = ({ reviewStats, updateRatingTypeFilters, updatePurchaseTypeFilters, updateLanguageTypeFilters }) => (
  <div className="review_filters">
    <div className="review_type_filter_menu">
      <div className="review_type_tile">Review Type</div>
      <div className="menu_flyout">
        <form>
          <label htmlFor="review_type_all">
            All
            <input type="radio" id="review_type_all" value="all" name="reviewType" onChange={updateRatingTypeFilters}></input>
          </label>
          <span>{`(${reviewStats.totalReviewCount})`}</span>
          <br></br>
          <label htmlFor="review_type_positive">
            Positive
            <input type="radio" id="review_type_positive" value="positive" name="reviewType" onChange={updateRatingTypeFilters}></input>
          </label>
          <span>{`(${reviewStats.totalPositiveReviewCount})`}</span>
          <br></br>
          <label htmlFor="review_type_negative">
            Negative
            <input type="radio" id="review_type_negative" value="negative" name="reviewType" onChange={updateRatingTypeFilters}></input>
          </label>
          <span>{`(${reviewStats.totalReviewCount - reviewStats.totalPositiveReviewCount})`}</span>
        </form>
      </div>
    </div>
    <div className="purchase_filter_menu">
      <div className="purchase_type_tile">Purchase Type</div>
      <div className="menu_flyout">
        <form>
          <label htmlFor="purchase_type_all">
            All
            <input type="radio" id="purchase_type_all" value="all" name="purchaseType" onChange={updatePurchaseTypeFilters}></input>
          </label>
          <span>{`(${reviewStats.totalReviewCount})`}</span>
          <br></br>
          <label htmlFor="purchase_type_steam">
            Steam Purchasers
            <input type="radio" id="purchase_type_steam" value="steam" name="purchaseType" onChange={updatePurchaseTypeFilters}></input>
          </label>
          <span>{`(${reviewStats.purchaseViaSteamCount})`}</span>
          <br></br>
          <label htmlFor="purchase_type_other">
            Other
            <input type="radio" id="purchase_type_other" value="other" name="purchaseType" onChange={updatePurchaseTypeFilters}></input>
          </label>
          <span>{`(${reviewStats.totalReviewCount - reviewStats.purchaseViaSteamCount})`}</span>
        </form>
      </div>
    </div>
    <div className="language_filter_menu">
      <div className="language_type_tile">Language</div>
      <div className="menu_flyout">
        <form>
          <label htmlFor="all_languages">
            All Languages
            <input type="radio" id="all_languages" value="all" name="languageType" onChange={updateLanguageTypeFilters}></input>
          </label>
          <span>{`(${reviewStats.totalReviewCount})`}</span>
          <br></br>
          <label htmlFor="your_language">
            Your Languages
            <input type="radio" id="your_language" value="your" name="languageType" onChange={updateLanguageTypeFilters}></input>
          </label>
          <span>{`(${reviewStats.englighLanguageReviewCount})`}</span>
        </form>
      </div>
    </div>
  </div>
);

export default ReviewFilters;

// For aligning buttons left: https://stackoverflow.com/questions/4457609/what-is-the-best-way-to-left-align-radio-buttons-on-top-of-each-other
