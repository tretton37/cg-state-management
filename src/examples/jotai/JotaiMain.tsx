import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/user-list/UserList';
import { H2 } from '../../ui/styles';
import { atomUser } from './atoms';
import { useAtom } from 'jotai';
import { SaveUser } from '../../api/user-api';

export const JotaiMain: React.FC = () => {
  const [, setUser] = useAtom(atomUser);
  return (
    <Wrapper>
      <H2>Jotai</H2>
      <EditUser
        statemanager="jotai"
        saveUserHandler={async (user) => {
          setUser(user);
          // eslint-disable-next-line
          // @ts-ignore
          await SaveUser({ user });
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
