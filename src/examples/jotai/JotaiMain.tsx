import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/user-list/UserList';
import { H2 } from '../../ui/styles';
import { atomTheme } from './atoms';
import { useAtom } from 'jotai';
import { useSaveUser } from './repository';

export const JotaiMain: React.FC = () => {
  const [, setTheme] = useAtom(atomTheme);
  const saveUserFn = useSaveUser();

  return (
    <Wrapper>
      <H2>Jotai</H2>
      <EditUser statemanager="jotai" saveUserHandler={saveUserFn} />
      <UserList users={[]} />

      <SelectCustomTheme onSelectTheme={setTheme} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
