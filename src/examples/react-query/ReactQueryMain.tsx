import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { H2 } from '../../ui/styles';

export const ReactQueryMain: React.FC = () => {
  return (
    <Wrapper>
      <H2>React Query</H2>
      <EditUser
        statemanager="reactquery"
        saveUserHandler={(_) => Promise.resolve(true)}
      />

      <SelectCustomTheme onSelectTheme={(theme: string) => console.log} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
