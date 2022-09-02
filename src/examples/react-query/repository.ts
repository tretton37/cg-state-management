import { QueryClient } from 'react-query';
import { GetUserById, IUser } from '../../api/user-api';

export const getUserById = (
  id: number,
  client: QueryClient
): Promise<IUser> => {
  return client.fetchQuery(['user', id], () => GetUserById(id));
};
