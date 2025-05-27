import { DESTINATIONS_INFO } from '../../constants/destination-info';
import { DESTINATION_TABS } from '../../constants/destination-tabs';
import DestinationData from '../destination-data/DestinationData';
import DestinationInfo from '../destination-info/DestinationInfo';
import DestinationTabs from '../destination-tabs/DestinationTabs';
import { StyledContainer } from './destination-text.styled';

const DestinationText = ({ tab, setTab }) => {
  const tabName = DESTINATION_TABS[tab];
  const destinationName = DESTINATIONS_INFO[tabName];

  return (
    <StyledContainer>
      <DestinationTabs
        tab={tab}
        setTab={setTab}
      />
      <DestinationInfo destination={destinationName} />
      <DestinationData destination={destinationName} />
    </StyledContainer>
  );
};

export default DestinationText;
