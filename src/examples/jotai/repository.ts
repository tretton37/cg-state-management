import { GetUserById, GetUsers, IUser } from '../../api/user-api';
import { JotaiContext, useGlobalContext } from './global-context';

export const useGetUserById = (id: number) => {
  const ctx = useGlobalContext();

  return async () => {
    const userFromState = getUserFromState(id, ctx);
    if (userFromState) {
      return userFromState;
    }
    const user = await GetUserById(id);
    ctx.setCurrentUser(user);

    return user;
  };
};

function getUserFromState(id: number, ctx: JotaiContext) {
  return ctx?.users?.find((u) => u.id === id);
}

export const useGetUsers = () => {
  const ctx = useGlobalContext();

  return async () => {
    const usersFromState = ctx.users;
    if (usersFromState) {
      return usersFromState;
    }
    const users = await GetUsers();
    ctx.setUsers(users);

    return users;
  };
};

export const useUpdateUser = () => {
  const ctx = useGlobalContext();

  return async (user: IUser) => {
    const usersFromState = ctx.users;

    if (!usersFromState?.length) {
      ctx.setUsers([user]);
    } else {
      const updatedUsers = usersFromState.map((u) =>
        u.id === user.id ? user : u
      );
      ctx.setUsers(updatedUsers);
    }

    const users = await user.Save();

    return users;
  };
};
