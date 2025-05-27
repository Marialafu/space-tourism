import { v4 } from 'uuid';
import {
  DESTINATION_TABS,
  DESTINATION_TABS_DATA
} from '../../constants/destination-tabs';
import { StyledContainer, StyledTab } from './destination-tabs.styled';

const DestinationTabs = ({ tab, setTab }) => {
  return (
    <StyledContainer>
      {DESTINATION_TABS.map((eachTab, index) => (
        <StyledTab
          key={v4()}
          onClick={() => setTab(DESTINATION_TABS_DATA[eachTab])}
          $tab={tab}
          $eachTab={index}
        >
          {eachTab}
        </StyledTab>
      ))}
    </StyledContainer>
  );
};

export default DestinationTabs;
