import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { H2 } from '../../ui/styles';
import UserList from './UserList';

export const ReactQueryMain: React.FC = () => {
  return (
    <Wrapper>
      <H2>React Query</H2>
      <EditUser
        statemanager="reactquery"
        saveUserHandler={(_) => Promise.resolve(true)}
      />
      <UserList />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
