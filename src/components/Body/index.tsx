import React from 'react';
import Styles from './styles';
import PasswordContent from 'components/PasswordContent';
import Options from 'components/Options';
import { useContext } from 'context';

const Body: React.FC = () => {
  const { state } = useContext();
  return (
    <Styles.Body>
      <PasswordContent value={state.password} />
      <Options />
    </Styles.Body>
  );
};

export default Body;
