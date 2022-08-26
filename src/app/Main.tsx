import styled from 'styled-components';
import { EditUserForm } from './components/EditUserForm';
import { SelectCustomTheme } from './components/SelectCustomTheme';

export const Main: React.FC = () => {
  return (
    <Wrapper>
      <EditUserForm />

      <SelectCustomTheme />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
