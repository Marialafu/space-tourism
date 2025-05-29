import { useState } from 'react';
import CrewImage from '../crew-image/CrewImage';
import CrewTabs from '../crew-tabs/CrewTabs';
import CrewText from '../crew-text/CrewText';
import { StyledContainer, StyledGrid } from './crew-container.styled';

const CrewContainer = () => {
  const [tab, setTab] = useState('commander');

  return (
    <StyledGrid>
      <StyledContainer>
        <CrewText tab={tab} />
        <CrewTabs
          setTab={setTab}
          tab={tab}
        />
      </StyledContainer>
      <CrewImage tab={tab} />
    </StyledGrid>
  );
};

export default CrewContainer;
