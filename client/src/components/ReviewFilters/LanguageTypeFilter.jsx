import React from 'react';

import { LanguageTypeContainer, LanguageTypeTitle, LanguageTypeFlyoutMenu, DownArrow, FlyoutMenuText, FlyoutMenuStat, QuestionMarkImage, CustomizeButton } from '../../styled';

const LanguageTypeFilter = ({ reviewStats, updateReviewFilters, questionMarkImage }) => (
  <LanguageTypeContainer>
    <LanguageTypeTitle>
      Language
      <DownArrow className="language_down_arrow">&#9662;</DownArrow>
      <LanguageTypeFlyoutMenu className="language_type_flyout">
        <form>
          <input type="radio" id="all_languages" value="all" name="languageType" onChange={(e) => { updateReviewFilters(e.target.value, 'languageType'); }} />
          <FlyoutMenuText>All Languages</FlyoutMenuText>
          <FlyoutMenuStat>{`(${reviewStats.totalReviewCount})`}</FlyoutMenuStat>
          <br></br>
          <input type="radio" id="your_language" value="your" name="languageType" onChange={(e) => { updateReviewFilters(e.target.value, 'languageType'); }} />
          <FlyoutMenuText>Your Languages</FlyoutMenuText>
          <FlyoutMenuStat>{`(${reviewStats.englighLanguageReviewCount})`}</FlyoutMenuStat>
          <QuestionMarkImage src={questionMarkImage} alt="question mark"></QuestionMarkImage>
        </form>
        <CustomizeButton href="#">Customize</CustomizeButton>
      </LanguageTypeFlyoutMenu>
    </LanguageTypeTitle>
  </LanguageTypeContainer>
);
export default LanguageTypeFilter;
