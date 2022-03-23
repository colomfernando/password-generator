import React, { useState } from 'react';
import Styles from './styles';
import CopyClipboard from 'components/CopyClipboard';

interface PropsPasswordContent {
  value: string;
}

const PasswordContent: React.FC<PropsPasswordContent> = ({
  value,
  ...props
}) => {
  {
    const [isValueCopy, setIsValueCopy] = useState(false);

    console.log('isValueCopy :>> ', isValueCopy);
    const copyToClipboard = async (): Promise<void> => {
      if (!value) return;

      if ('clipboard' in navigator) {
        await navigator.clipboard.writeText(value);
        return setIsValueCopy(true);
      }
    };

    return (
      <Styles.Wrapper {...props}>
        <Styles.Value>{value}</Styles.Value>
        <CopyClipboard onClick={copyToClipboard}>
          <Styles.CopyIcon iconName="copy" width={25} height={25} />
        </CopyClipboard>
        {isValueCopy && <Styles.Msg>copied value</Styles.Msg>}
      </Styles.Wrapper>
    );
  }
};

export default PasswordContent;
