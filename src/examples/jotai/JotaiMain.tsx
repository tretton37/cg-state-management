import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/user-list/UserList';
import { H2 } from '../../ui/styles';
import { useUser, useTheme } from './repository';

export const JotaiMain: React.FC = () => {
  const { users, saveUser } = useUser();
  const { setTheme } = useTheme();

  return (
    <Wrapper>
      <H2>Jotai</H2>
      <EditUser statemanager="jotai" saveUserHandler={saveUser} />
      <UserList users={users} />

      <SelectCustomTheme onSelectTheme={setTheme} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
