import React from 'react';

import {
  Container,
  HeaderLogo,
  HeaderUser
 } from './styles';

 interface HeaderProps{
   black:boolean;
 }

const Header: React.FC<HeaderProps> = ({black}) => {
  return (
    <Container>
      <header className={black ? "black":""}>
        <HeaderLogo>
          <a href="/" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
          </a>
        </HeaderLogo>
        <HeaderUser>
        <a href="/" >
            <img src="https://occ-0-642-3852.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABa3biOZIj5B3s2D9LMSrIdIHBKMTwpQdNEGch2Tl4N76my7eMfE5zrcdFNIdEwiUGmfx6BUMJf15FoW7Zl042lMfbHSG.png?r=f08" alt="Netflix User Profile Icon"/>
          </a>
        </HeaderUser>
      </header>
    </Container>
  );
};

export default Header;
