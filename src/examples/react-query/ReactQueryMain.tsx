import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/user-list/UserList';
import { H2 } from '../../ui/styles';
import { useUser } from './repository';

export const ReactQueryMain: React.FC = () => {
  const { useSaveUser } = useUser();
  return (
    <Wrapper>
      <H2>React Query</H2>
      <EditUser
        statemanager="reactquery"
        saveUserHandler={async (user) => {
          const fn = useSaveUser(user);
          return true;
        }}
      />
      <UserList users={[]} />
      <SelectCustomTheme onSelectTheme={(theme: string) => console.log} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
