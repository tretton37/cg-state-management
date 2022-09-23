import styled from 'styled-components';
import { IUser } from '../../api/user-api';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { H2 } from '../../ui/styles';
import { useUpdateUser } from './repository';
import UserList from './UserList';

export const ReactQueryMain: React.FC = () => {
  const save = useUpdateUser();
  return (
    <Wrapper>
      <H2>React Query</H2>
      <EditUser
        statemanager="reactquery"
        saveUserHandler={(user: IUser) => save(user)}
      />
      <UserList />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
