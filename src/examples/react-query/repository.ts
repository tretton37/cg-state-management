import { useQuery, useMutation, useQueryClient } from 'react-query';
import { IUser } from '../../api/types';
import { GetUserById, SaveUser } from '../../api/user-api';

export const useUser = () => {
  return { useGetUserById, useSaveUser };
};

const useGetUserById = (id: number) => {
  const { refetch } = useQuery(`user-${id}`, () => GetUserById(id), {
    refetchOnWindowFocus: false,
    // disable automatic fetching
    enabled: false,
  });
  return refetch;
};

const useSaveUser = (user: IUser) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    () => {
      return SaveUser(user.toJson());
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries('user-');
      },
    }
  );
  return mutation.mutate;
};
