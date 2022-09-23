import { QueryClient, useMutation, useQueryClient } from 'react-query';
import { GetUserById, IUser } from '../../api/user-api';

export const getUserById = (
  id: number,
  client: QueryClient
): Promise<IUser> => {
  return client.fetchQuery(['user', id], () => GetUserById(id));
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation((updatedUser: IUser) => updatedUser.Save(), {
    onSuccess: (a, updatedUser) => {
      queryClient.setQueryData('users', (users: IUser[] | undefined) => {
        return users
          ? users.map((oldUser) => {
              if (oldUser.id === updatedUser.id) {
                return updatedUser;
              } else {
                return oldUser;
              }
            })
          : [];
      });
    },
  });
  return mutation.mutateAsync;
};
