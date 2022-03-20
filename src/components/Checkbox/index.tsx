import React from 'react';
import Styles from './styles';

export interface PropsCheckbox {
  checked: boolean;
  label: string;
  onChange: () => void;
}

const Checkbox: React.FC<PropsCheckbox> = ({ checked, label, ...props }) => {
  return (
    <Styles.Label {...props}>
      <Styles.Input type="checkbox" checked={checked} />
      <Styles.Check
        checked={checked}
        // This element is purely decorative so
        // we hide it for screen readers
        aria-hidden="true"
      >
        {checked && (
          <Styles.CheckIcon iconName="check" width={14} height={14} />
        )}
      </Styles.Check>
      {label}
    </Styles.Label>
  );
};

export default Checkbox;
