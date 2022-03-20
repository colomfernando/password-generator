import React from 'react';
import Styles from './styles';
import PasswordContent from 'components/PasswordContent';
import Options from 'components/Options';

const Body: React.FC = () => {
  return (
    <Styles.Body>
      <PasswordContent value="adfasdfa#@$#" />
      <Options />
    </Styles.Body>
  );
};

export default Body;
