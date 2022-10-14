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

const getUserFromState = (id: number, ctx: JotaiContext) =>
  ctx?.users?.find((u) => u.id === id);

const getUpdatedUsers = (users: IUser[], user: IUser): IUser[] =>
  users.map((u) => (u.id === user.id ? user : u));

const saveUserToContext = (ctx: JotaiContext, user: IUser): void => {
  if (!ctx.users?.length) {
    ctx.setUsers([user]);
  } else {
    ctx.setUsers(getUpdatedUsers(ctx.users, user));
  }
};

export const useGetUsers = () => {
  const ctx = useGlobalContext();

  return async () => {
    if (ctx.users) {
      return ctx.users;
    }
    const users = await GetUsers();
    ctx.setUsers(users);

    return users;
  };
};

export const useUpdateUser = () => {
  const ctx = useGlobalContext();

  return async (user: IUser) => {
    saveUserToContext(ctx, user);

    try {
      return await user.Save();
    } catch (e) {
      ctx.setUsers(ctx.users ?? []);
    }
    return false;
  };
};
