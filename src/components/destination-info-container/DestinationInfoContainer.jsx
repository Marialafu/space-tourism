import { useState } from 'react';
import DestinationImage from '../destination-image/DestinationImage';
import DestinationText from '../destination-text/DestinationText';
import { StyledGrid } from './destination-container.styled';
import { DESTINATION_TABS_DATA } from '../../constants/destination-tabs';

const DestinationInfoContainer = () => {
  const [tab, setTab] = useState(DESTINATION_TABS_DATA.moon);

  return (
    <StyledGrid>
      <DestinationImage tab={tab} />
      <DestinationText
        tab={tab}
        setTab={setTab}
      />
    </StyledGrid>
  );
};

export default DestinationInfoContainer;
