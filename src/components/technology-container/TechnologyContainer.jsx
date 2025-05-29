import { useState } from 'react';
import TechnologyText from '../technology-text/TechnologyText';
import { StyledContainer, StyledGrid } from './technology-container.styled';
import TechnologyImage from '../technology-image/TechnologyImage';
import TechnologyTabs from '../technology-tabs/TechnologyTabs';

const TechnologyContainer = () => {
  const [tab, setTab] = useState('vehicle');

  return (
    <StyledGrid>
      <TechnologyImage tab={tab} />
      <StyledContainer>
        <TechnologyTabs
          tab={tab}
          setTab={setTab}
        />
        <TechnologyText tab={tab} />
      </StyledContainer>
    </StyledGrid>
  );
};

export default TechnologyContainer;
