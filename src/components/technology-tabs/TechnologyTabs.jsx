import { v4 } from 'uuid';
import {
  TECHNOLOGY_TABS,
  TECHNOLOGY_TABS_DATA
} from '../../constants/technology-tabs';
import { StyledContainer, StyledTab } from './technology-tabs.styled';

const TechnologyTabs = ({ tab, setTab }) => {
  return (
    <StyledContainer>
      {TECHNOLOGY_TABS.map(eachTab => {
        return (
          <StyledTab
            key={v4()}
            onClick={() => setTab(TECHNOLOGY_TABS_DATA[eachTab])}
            $eachTab={TECHNOLOGY_TABS_DATA[eachTab]}
            $tab={tab}
          >
            {eachTab}
          </StyledTab>
        );
      })}
    </StyledContainer>
  );
};

export default TechnologyTabs;
