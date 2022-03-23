import React from 'react';
import Styles from './styles';

interface PropsCopyClipboard {
  onClick: () => void;
}

const CopyClipboard: React.FC<PropsCopyClipboard> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <Styles.Wrapper onClick={onClick} {...props}>
      {children}
    </Styles.Wrapper>
  );
};

export default CopyClipboard;
