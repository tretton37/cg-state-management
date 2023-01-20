import { IUser } from '../../../api/types';
import { UserListContainer } from './styles';

export const UserList: React.FC<UserListProps> = ({ users, loading }) => {
  return (
    <UserListContainer>
      {users?.length === 0 && <li>No users found</li>}
      {loading && <li>Loading...</li>}
      {!loading && users
        ? users.map((user) => <li key={user.id}>{user.name}</li>)
        : 'loading users...'}
    </UserListContainer>
  );
};

interface UserListProps {
  users: IUser[] | undefined;
  loading?: boolean;
}
