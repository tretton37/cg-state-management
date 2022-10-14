import { IUser } from '../../api/user-api';

export const UserList = ({ users }: { users: IUser[] }) => (
  <ul>
    {users
      ? users.map((user) => <li key={user.id}>{user.name}</li>)
      : 'loading users...'}
  </ul>
);
