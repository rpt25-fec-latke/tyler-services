import React from 'react';

import { LanguageTypeContainer, LanguageTypeTitle, LanguageTypeFlyoutMenu, DownArrow } from '../../styled';

const LanguageTypeFilter = ({ reviewStats, updateReviewFilters }) => (
  <LanguageTypeContainer>
    <LanguageTypeTitle>
      Language
      <DownArrow>&#9660;</DownArrow>
    </LanguageTypeTitle>
    <div className="language_menu_flyout">
      <form>
        <input type="radio" id="all_languages" value="all" name="languageType" onChange={(e) => { updateReviewFilters(e.target.value, 'languageType'); }} />
        <span>All Languages</span>
        <span>{`(${reviewStats.totalReviewCount})`}</span>
        <br></br>
        <input type="radio" id="your_language" value="your" name="languageType" onChange={(e) => { updateReviewFilters(e.target.value, 'languageType'); }} />
        <span>Your Languages</span>
        <span>{`(${reviewStats.englighLanguageReviewCount})`}</span>
      </form>
    </div>
  </LanguageTypeContainer>
);
export default LanguageTypeFilter;
