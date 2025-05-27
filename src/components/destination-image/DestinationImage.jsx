import { DESTINATIONS_INFO } from '../../constants/destination-info';
import { DESTINATION_TABS } from '../../constants/destination-tabs';
import { StyledContainer, StyledImg } from './destination-image.styled';

const DestinationImage = ({ tab }) => {
  const tabName = DESTINATION_TABS[tab];
  const destinationName = DESTINATIONS_INFO[tabName];

  return (
    <StyledContainer>
      <StyledImg src={destinationName.img} />
    </StyledContainer>
  );
};

export default DestinationImage;
