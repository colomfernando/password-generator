import styled from 'styled-components';
import palette from 'theme/palette';
import Checkbox from 'components/Checkbox';
import breakpoints from 'theme/breakpoints';
// import breakpoints from 'theme/breakpoints';

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
  flex-flow: column nowrap;
  margin-bottom: 40px;
  ${breakpoints.md`
		flex-flow: row;
	`}
`;

const Check = styled(Checkbox)`
  ${breakpoints.md`
		&:not(:last-child) {
			margin-right: 25px;
		}
	`}
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
