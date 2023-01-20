import { GetUserById, SaveUser } from '../../api/user-api';
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { IUser } from '../../api/types';

// === Jotai Atoms === //

const atomUsersById = atom<Record<string, IUser>>({});
const atomActiveUserId = atom<number | undefined>(undefined);
const atomActiveUser = atom<IUser | undefined>(
  (get) => get(atomUsersById)[get(atomActiveUserId) ?? '']
);
const atomTheme = atomWithStorage('jotai-theme', 'red');

// === State hooks === //

export const useUser = () => {
  const [activeUserId, setActiveUserId] = useAtom(atomActiveUserId);
  const [activeUser] = useAtom(atomActiveUser);
  return {
    activeUserId,
    setActiveUserId,
    activeUser,
    getUserById: useGetUserById(),
    saveUser: useSaveUser(),
  };
};

export const useTheme = () => {
  const [theme, setTheme] = useAtom(atomTheme);
  return { theme, setTheme };
};

const useGetUserById = () => {
  const [usersById, setUsersById] = useAtom(atomUsersById);

  return async (id: number) => {
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

const useSaveUser = () => {
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
