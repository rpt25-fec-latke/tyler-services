import React from 'react';

import { LanguageTypeContainer, LanguageTypeTitle, LanguageTypeFlyoutMenu, DownArrow, FlyoutMenuText, FlyoutMenuStat, QuestionMarkImage, CustomizeButton } from '../../styled';

const LanguageTypeFilter = ({ reviewStats, updateReviewFilters, questionMarkImage }) => (
  <LanguageTypeContainer>
    <LanguageTypeTitle>
      Language
      <DownArrow className="language_down_arrow">&#9662;</DownArrow>
      <LanguageTypeFlyoutMenu className="language_type_flyout">
        <form>
          <input type="radio" className="all_languages_filter" value="all" name="languageType" onChange={(e) => { updateReviewFilters(e.target.value, 'languageType'); }} />
          <FlyoutMenuText>All Languages</FlyoutMenuText>
          <FlyoutMenuStat className="all_languages_count_stat">{`(${reviewStats.totalReviewCount})`}</FlyoutMenuStat>
          <br></br>
          <input type="radio" value="your" name="languageType" onChange={(e) => { updateReviewFilters(e.target.value, 'languageType'); }} />
          <FlyoutMenuText>Your Languages</FlyoutMenuText>
          <FlyoutMenuStat className="your_language_count_stat">{`(${reviewStats.englishLanguageReviewCount})`}</FlyoutMenuStat>
          <QuestionMarkImage src={questionMarkImage} alt="question mark"></QuestionMarkImage>
        </form>
        <CustomizeButton href="#">Customize</CustomizeButton>
      </LanguageTypeFlyoutMenu>
    </LanguageTypeTitle>
  </LanguageTypeContainer>
);
export default LanguageTypeFilter;
