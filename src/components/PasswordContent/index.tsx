import React from 'react';
import Styles from './styles';

interface PropsPasswordContent {
  value: string;
}

const PasswordContent: React.FC<PropsPasswordContent> = ({
  value,
  ...props
}) => {
  return (
    <Styles.Wrapper {...props}>
      <Styles.Value>{value}</Styles.Value>
      <Styles.CopyIcon iconName="copy" width={25} height={25} />
    </Styles.Wrapper>
  );
};

export default PasswordContent;
