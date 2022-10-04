import React from 'react';

import LogoImg from '../../assets/Logo.png';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
        <S.Image source={LogoImg} />
    </S.Container>
  );
}

export default Header;