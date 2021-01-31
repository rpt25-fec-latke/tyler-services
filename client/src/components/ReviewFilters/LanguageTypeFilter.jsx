import React from 'react';

import { DropDownText } from '../../styled';

const LanguageTypeFilter = ({ reviewStats, updateLanguageTypeFilters }) => (
  <div className="language_filter_menu">
    <DropDownText>Language</DropDownText>
    <div className="language_menu_flyout">
      <form>
        <input type="radio" id="all_languages" value="all" name="languageType" onChange={updateLanguageTypeFilters} />
        <span>All Languages</span>
        <span>{`(${reviewStats.totalReviewCount})`}</span>
        <br></br>
        <input type="radio" id="your_language" value="your" name="languageType" onChange={updateLanguageTypeFilters} />
        <span>Your Languages</span>
        <span>{`(${reviewStats.englighLanguageReviewCount})`}</span>
      </form>
    </div>
  </div>
);
export default LanguageTypeFilter;
