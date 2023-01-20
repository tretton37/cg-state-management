import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/UserList';
import { H2 } from '../../ui/styles';

export const ElfMain: React.FC = () => {
  return (
    <Wrapper>
      <H2>Elf</H2>
      <EditUser
        statemanager="elf"
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
