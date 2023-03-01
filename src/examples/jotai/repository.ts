import { GetUsers, GetUserById, SaveUser } from '../../api/user-api';
import { atom, useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { IUser } from '../../api/types';

// === Jotai Atoms === //

const atomUsers = atom<IUser[] | undefined>(undefined);
const atomUsersById = atom<Record<string, IUser>>({});
const atomActiveUserId = atom<number | undefined>(undefined);
const atomActiveUser = atom<IUser | undefined>(
  (get) => get(atomUsersById)[get(atomActiveUserId) ?? '']
);
const atomTheme = atomWithStorage('jotai-theme', 'red');

// === State hooks === //

export const useUser = () => {
  const [users, setUsers] = useAtom(atomUsers);
  const [activeUserId, setActiveUserId] = useAtom(atomActiveUserId);
  const [activeUser] = useAtom(atomActiveUser);

  if (users === undefined) {
    GetUsers().then((u) => {
      setUsers(u);
    });
  }

  return {
    users,
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
  const [users, setUsers] = useAtom(atomUsers);

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
    setUsers(users?.map((u) => (u.id === user.id ? user : u)));

    const userModel = user.toJson();
    try {
      await SaveUser(userModel);
      return true;
    } catch (err) {
      alert('An error occured, rolling back optimistic update');
      // rollback
      setUsersById({
        ...usersById,
        [user.id]: await GetUserById(user.id),
      });
      setUsers(await GetUsers());
      return false;
    }
  };
};
