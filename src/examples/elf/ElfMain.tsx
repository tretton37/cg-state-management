import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/user-list/UserList';
import { H2 } from '../../ui/styles';
import { useUsers } from './repositories/user.repository';

export const ElfMain: React.FC = () => {
  const { data: users, isLoading } = useUsers();
  return (
    <Wrapper>
      <H2>Elf</H2>
      <EditUser
        statemanager="elf"
        saveUserHandler={(_) => Promise.resolve(true)}
      />

      <UserList users={users} loading={isLoading} />

      <SelectCustomTheme onSelectTheme={(theme: string) => console.log} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
