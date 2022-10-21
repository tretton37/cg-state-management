import { useEffect } from 'react';
import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/UserList';
import { H2 } from '../../ui/styles';
import { useAppDispatch, useAppSelector } from './Store';
import { getUsers } from './UserSlice';

export const ReduxToolkitMain: React.FC = () => {
  const users = useAppSelector((state) => state.user.users.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, [dispatch, users]);

  return (
    <Wrapper>
      <H2>ReduxToolkit</H2>
      <EditUser
        statemanager="reduxtoolkit"
        saveUserHandler={(_) => Promise.resolve(true)}
      />

      <SelectCustomTheme onSelectTheme={(theme: string) => console.log} />
      <UserList users={users ?? []} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
