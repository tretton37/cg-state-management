import styled from 'styled-components';
import { EditUser } from './components/EditUser';
import { SelectCustomTheme } from './components/SelectCustomTheme';

export const Main: React.FC = () => {
  return (
    <Wrapper>
      <EditUser />

      <SelectCustomTheme />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
