import { useContext } from 'react';
import { GetUserById } from '../../api/user-api';
import { GlobalReactContext, ReactContextState } from './global-context';

export const useGetUserById = (id: number) => {
  const ctx = useContext(GlobalReactContext);

  return async () => {
    const userFromState = getUserFromState(id, ctx);
    if (userFromState) {
      return userFromState;
    }
    const user = await GetUserById(id);

    ctx?.updateUser(user);

    return user;
  };
};

function getUserFromState(id: number, ctx: ReactContextState | undefined) {
  return ctx?.users?.find((u) => u.id === id);
}
