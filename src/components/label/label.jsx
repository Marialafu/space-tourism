import { useLocation } from 'react-router-dom';
import { StyledContainer, StyledNumber, StyledTitle } from './label.styled';
import { LABELS } from '../../constants/labels';

const Label = () => {
  const location = useLocation();
  const label = getLabelByLocation(location);

  return (
    <StyledContainer>
      <StyledNumber>{label.number}</StyledNumber>
      <StyledTitle>{label.tag}</StyledTitle>
    </StyledContainer>
  );
};

const getLabelByLocation = location => {
  const pathName = location.pathname.slice(1);
  return LABELS[pathName];
};

export default Label;
