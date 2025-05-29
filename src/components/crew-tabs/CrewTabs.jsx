import { v4 } from 'uuid';
import { CREW_TABS, CREW_TABS_DATA } from '../../constants/crew-tabs';
import { StyledTab, StyledTabContainer } from './crew-tabs.styled';

const CrewTabs = ({ tab, setTab }) => {
  return (
    <StyledTabContainer>
      {CREW_TABS.map(eachTab => (
        <StyledTab
          key={v4()}
          onClick={() => setTab(CREW_TABS_DATA[eachTab])}
          $tab={tab}
          $eachTab={CREW_TABS_DATA[eachTab]}
        />
      ))}
    </StyledTabContainer>
  );
};

export default CrewTabs;
