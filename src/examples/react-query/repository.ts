import { useMutation, useQueryClient, QueryClient } from 'react-query';
import { IUser } from '../../api/types';
import { GetUserById, SaveUser } from '../../api/user-api';

export const useUser = () => {
  const queryClient = useQueryClient();
  return {
    getUserById: makeGetUserById(queryClient),
    saveUser: useSaveUser(queryClient),
  };
};

const makeGetUserById = (client: QueryClient) => {
  return (id: number) => client.fetchQuery(`user-${id}`, () => GetUserById(id));
};

const useSaveUser = (client: QueryClient) => {
  let newUser: IUser;
  const mutation = useMutation(() => SaveUser(newUser.toJson()), {
    onSuccess: () => {
      console.log('success');

      // optimistically update state
      client.setQueryData(`user-${newUser.id}`, newUser);
      // TODO: uncomment to invalidate and refetch (SaveUser fn must be fully implemented first)
      // client.invalidateQueries(`user-${newUser.id}`);
    },
  });
  return (user: IUser) => {
    newUser = user;
    mutation.mutate();
    return Promise.resolve(true);
  };
};
