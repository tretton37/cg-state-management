import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/user-list/UserList';
import { H2 } from '../../ui/styles';

export const ZustandMain: React.FC = () => {
  return (
    <Wrapper>
      <H2>Zustand</H2>
      <EditUser
        statemanager="zustand"
        saveUserHandler={(_) => Promise.resolve(true)}
      />
      <UserList users={[]} />

      <SelectCustomTheme onSelectTheme={(theme: string) => console.log} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
