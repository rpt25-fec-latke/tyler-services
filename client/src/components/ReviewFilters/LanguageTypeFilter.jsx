import React from 'react';

const LanguageTypeFilter = ({ reviewStats, updateLanguageTypeFilters }) => (
  <div className="language_filter_menu">
    <div className="language_type_title">Language</div>
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
);
export default LanguageTypeFilter;
