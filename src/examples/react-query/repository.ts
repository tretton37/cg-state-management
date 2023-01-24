import { useQuery, useMutation, useQueryClient } from 'react-query';
import { IUser } from '../../api/types';
import { GetUserById, SaveUser } from '../../api/user-api';

export const useUser = () => {
  return { useGetUserById, saveUser: useSaveUser() };
};

const useGetUserById = (id: number) => {
  const { refetch } = useQuery(`user-${id}`, () => GetUserById(id), {
    refetchOnWindowFocus: false,
    // disable automatic fetching
    enabled: false,
  });
  return refetch;
};

const useSaveUser = () => {
  let newUser: IUser;
  const queryClient = useQueryClient();
  const mutateFn = () => SaveUser(newUser.toJson());
  const mutation = useMutation(
    () => {
      return mutateFn();
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries('user-');
      },
    }
  );
  return async (user: IUser) => {
    newUser = user;
    await mutation.mutate();
    return true;
  };
};
