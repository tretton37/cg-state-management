import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/user-list/UserList';
import { H2 } from '../../ui/styles';
import { useUser } from './repository';

export const ReactQueryMain: React.FC = () => {
  const { users, saveUser } = useUser();
  return (
    <Wrapper>
      <H2>React Query</H2>
      <EditUser statemanager="reactquery" saveUserHandler={saveUser} />
      <UserList users={users} />
      <SelectCustomTheme onSelectTheme={(theme: string) => console.log} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
