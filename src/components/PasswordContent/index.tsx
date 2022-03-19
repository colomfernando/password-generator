import React from 'react';
import Styles from './styles';

interface PropsPasswordContent {
  value: string;
}

const PasswordContent: React.FC<PropsPasswordContent> = ({
  value,
  ...props
}) => {
  return <Styles.Wrapper {...props}>{value}</Styles.Wrapper>;
};

export default PasswordContent;
