import { IUser } from '../../api/types';

export const UserList = ({ users }: { users: IUser[] }) => {
  return (
    <ul>
      {users
        ? users.map((user) => <li key={user.id}>{user.name}</li>)
        : 'loading users...'}
    </ul>
  );
};
