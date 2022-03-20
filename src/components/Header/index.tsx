import React from 'react';
import Styles from './styles';
import Title from 'components/Title';

const Header: React.FC = () => {
  return (
    <Styles.Header>
      <Title />
    </Styles.Header>
  );
};

export default Header;
