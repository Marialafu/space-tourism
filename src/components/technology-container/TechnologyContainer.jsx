import { useState } from 'react';
import TechnologyText from '../technology-text/TechnologyText';
import { StyledGrid } from './technology-container.styled';
import TechnologyImage from '../technology-image/TechnologyImage';
import TechnologyTabs from '../technology-tabs/TechnologyTabs';

const TechnologyContainer = () => {
  const [tab, setTab] = useState('vehicle');

  return (
    <StyledGrid>
      <TechnologyImage tab={tab} />
      <TechnologyTabs
        tab={tab}
        setTab={setTab}
      />
      <TechnologyText tab={tab} />
    </StyledGrid>
  );
};

export default TechnologyContainer;
