import React from 'react';
import Styles from './styles';

export interface PropsCheckbox {
  checked: boolean;
  label: string;
  onChange: () => void;
}

const Checkbox: React.FC<PropsCheckbox> = ({
  checked,
  label,
  onChange,
  ...props
}) => {
  return (
    <Styles.Label {...props}>
      <Styles.Input type="checkbox" checked={checked} onChange={onChange} />
      <Styles.Check checked={checked} aria-hidden="true">
        {checked && (
          <Styles.CheckIcon iconName="check" width={14} height={14} />
        )}
      </Styles.Check>
      {label}
    </Styles.Label>
  );
};

export default Checkbox;
