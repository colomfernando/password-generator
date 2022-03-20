import styled from 'styled-components';
import palette from 'theme/palette';
import Icon from 'components/Icon';

interface Checked {
  checked: boolean;
}

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Input = styled.input``;

const Check = styled.span<Checked>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ checked }) =>
    checked ? palette.green : palette.common.white};
  border: 1px solid
    ${({ checked }) => (checked ? palette.green : palette.common.black)};
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const CheckIcon = styled(Icon)`
  color: ${palette.common.white};
`;

export default { Input, Label, Check, CheckIcon };
