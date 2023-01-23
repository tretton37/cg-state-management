import { useQuery } from 'react-query';
import { GetUserById } from '../../api/user-api';

export const useUser = () => {
  return { useGetUserById };
};

const useGetUserById = (id: number) => {
  const { refetch } = useQuery(`user-${id}`, () => GetUserById(id), {
    refetchOnWindowFocus: false,
    // disable automatic fetching
    enabled: false,
  });
  return refetch;
};
