import { GetUserById, SaveUser } from '../../api/user-api';
import { useAtom } from 'jotai';
import {
  atomActiveUserId,
  atomActiveUser,
  atomTheme,
  atomUsersById,
} from './atoms';
import { IUser } from '../../api/types';

export const useGetUserById = (id: number) => {
  const [usersById, setUsersById] = useAtom(atomUsersById);

  return async () => {
    const userFromState = usersById[id];
    if (userFromState) {
      return userFromState;
    }

    const newUser = await GetUserById(id);
    setUsersById({
      ...usersById,
      [id]: newUser,
    });

    return newUser;
  };
};

export const useSaveUser = () => {
  const [usersById, setUsersById] = useAtom(atomUsersById);

  return async (user: IUser): Promise<boolean> => {
    const userFromState = usersById[user.id];
    if (userFromState === undefined) {
      return false;
    }

    // optimistically update users state
    setUsersById({
      ...usersById,
      [user.id]: user,
    });

    const userModel = user.toJson();
    const didSucceed = await SaveUser(userModel);
    // todo: handle failure
    return didSucceed;
  };
};

export const useGetActiveUser = () => {
  const [activeUser] = useAtom(atomActiveUser);
  return activeUser;
};

export const useActiveUserId = () => {
  return useAtom(atomActiveUserId);
};

export const useTheme = () => {
  return useAtom(atomTheme);
};
