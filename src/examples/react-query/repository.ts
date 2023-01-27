import { useMutation, useQueryClient, QueryClient } from 'react-query';
import { IUser } from '../../api/types';
import { GetUserById, SaveUser } from '../../api/user-api';

export const useUser = () => {
  const queryClient = useQueryClient();
  return {
    getUserById: makeGetUserById(queryClient),
    saveUser: useSaveUser(),
  };
};

const makeGetUserById = (client: QueryClient) => {
  return (id: number) => client.fetchQuery(`user-${id}`, () => GetUserById(id));
};

const useSaveUser = () => {
  let newUser: IUser;
  const queryClient = useQueryClient();
  const mutateFn = () => SaveUser(newUser.toJson());
  const mutation = useMutation(mutateFn, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('user-');
    },
  });
  return (user: IUser) => {
    newUser = user;
    mutation.mutate();
    return Promise.resolve(true);
  };
};
