import { v4 } from 'uuid';
import { GLOBAL_MENU } from '../../constants/menu-info';
import {
  StyledHamburguer,
  StyledLink,
  StyledMenu,
  StyledMenuItem,
  StyledMenuItemContainer,
  StyledNumberItem,
  StyledX
} from './menu.styled';
import { useState } from 'react';

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <StyledHamburguer
        src='/assets/images/shared/icon-hamburger.svg'
        alt='icon-hamburguer'
        onClick={() => setOpenMenu(!openMenu)}
      />
      {openMenu && (
        <StyledX
          src='/assets/images/shared/icon-close.svg'
          alt='icon-close'
          onClick={() => setOpenMenu(!openMenu)}
        />
      )}
      <nav>
        <StyledMenu $openMenu={openMenu}>
          {GLOBAL_MENU.map(item => (
            <StyledMenuItemContainer key={v4()}>
              <StyledNumberItem>0{item.value}</StyledNumberItem>
              <StyledMenuItem>
                <StyledLink to={item.link}>{item.name}</StyledLink>
              </StyledMenuItem>
            </StyledMenuItemContainer>
          ))}
        </StyledMenu>
      </nav>
    </>
  );
};

export default Menu;
