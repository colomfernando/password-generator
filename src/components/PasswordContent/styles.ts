import styled from 'styled-components';
import palette from 'theme/palette';
import Icon from 'components/Icon';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.common.white};
  border-radius: 3px;
  padding: 15px;
  border-top-color: ${palette.green};
  border-top-width: 5px;
  border-top-style: solid;
  font-size: 2rem;
`;

const Value = styled.p`
  max-width: 520px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Msg = styled.span`
  flex-basis: 100%;
  margin-top: 10px;
  font-size: 0.9rem;
  color: ${palette.success.main};
`;

const CopyIcon = styled(Icon)``;

export default { Wrapper, Value, CopyIcon, Msg };
