import { GetUsers, SaveUser } from '../../api/user-api';
import { useAtom } from 'jotai';
import {
  atomUsers,
  atomActiveUserId,
  atomActiveUser,
  atomTheme,
} from './atoms';
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

export const useSaveUser = () => {
  const [users, setUsers] = useAtom(atomUsers);

  return async (user: IUser): Promise<boolean> => {
    const userFromState = findUser(user.id, users);
    if (userFromState === undefined) {
      return false;
    }

    // optimistically update users state
    const newUsers = users.map((u) => (u === userFromState ? user : u));
    setUsers(newUsers);

    const userModel = user.toJson();
    const didSucceed = await SaveUser(userModel);
    // todo: handle failure
    return didSucceed;
  };
};

export const useActiveUserId = () => {
  return useAtom(atomActiveUserId);
};

export const useTheme = () => {
  return useAtom(atomTheme);
};

const findUser = (id: number, users: IUser[]) => {
  return users?.find((u) => u.id === id);
};
