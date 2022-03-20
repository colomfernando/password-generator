import styled from 'styled-components';
import palette from 'theme/palette';
import Checkbox from 'components/Checkbox';

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: ${palette.common.white};
  display: flex;
  flex-flow: column nowrap;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 1.4rem;
`;

const WrapperCheckbox = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const Check = styled(Checkbox)`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;

const WrapperRange = styled.div`
  display: flex;
  align-items: center;
`;
const Length = styled.input`
  align-items: center;
  margin-right: 20px;
  width: 60px;
  height: auto;
  padding: 5px 15px;
  border: 2px solid ${palette.green};
`;

export default { Wrapper, WrapperCheckbox, Title, Check, WrapperRange, Length };
