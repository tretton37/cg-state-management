import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/user-list/UserList';
import { H2 } from '../../ui/styles';
import { atomActiveUser, atomTheme } from './atoms';
import { useAtom } from 'jotai';
import { SaveUser } from '../../api/user-api';

export const JotaiMain: React.FC = () => {
  const [, setActiveUser] = useAtom(atomActiveUser);
  const [, setTheme] = useAtom(atomTheme);
  return (
    <Wrapper>
      <H2>Jotai</H2>
      <EditUser
        statemanager="jotai"
        saveUserHandler={async (user) => {
          setActiveUser(user);
          const userModel = user.toJson();
          await SaveUser(userModel);
          return true;
        }}
      />
      <UserList users={[]} />

      <SelectCustomTheme onSelectTheme={setTheme} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
