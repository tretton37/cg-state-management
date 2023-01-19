import { GetUsers } from '../../api/user-api';
import { useAtom } from 'jotai';
import { atomUsers } from './atoms';
import { IUser } from '../../api/types';

export const useGetUserById = (id: number) => {
  const [users, setUsers] = useAtom(atomUsers);

  return async () => {
    const userFromState = findUser(id, users);
    if (userFromState) {
      return userFromState;
    }

    const newUsers = await GetUsers();
    setUsers(newUsers);

    return findUser(id, newUsers);
  };
};

function findUser(id: number, users: IUser[]) {
  return users?.find((u) => u.id === id);
}
