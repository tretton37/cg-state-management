import { useEffect } from 'react';
import styled from 'styled-components';

import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/UserList';
import { H2 } from '../../ui/styles';
import { useGlobalContext } from './global-context';
import { useGetUsers, useUpdateUser } from './repository';

export const JotaiMain: React.FC = () => {
  const { setCurrentTheme, users } = useGlobalContext();
  const updateUserFunc = useUpdateUser();
  const fetchUsersFunc = useGetUsers();

  useEffect(() => {
    fetchUsersFunc();
  }, [fetchUsersFunc]);

  return (
    <Wrapper>
      <H2>Jotai</H2>
      <EditUser statemanager="jotai" saveUserHandler={updateUserFunc} />

      <SelectCustomTheme onSelectTheme={setCurrentTheme} />
      <UserList users={users ?? []} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
