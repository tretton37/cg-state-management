import {
  useMutation,
  useQueryClient,
  QueryClient,
  useQuery,
} from 'react-query';
import { IUser } from '../../api/types';
import { GetUsers, GetUserById, SaveUser } from '../../api/user-api';

export const useUser = () => {
  const queryClient = useQueryClient();
  const { data: users } = useQuery('users', GetUsers);
  return {
    users: users ?? [],
    getUserById: makeGetUserById(queryClient),
    saveUser: useSaveUser(queryClient, users),
  };
};

const makeGetUserById = (client: QueryClient) => {
  return (id: number) => client.fetchQuery(`user-${id}`, () => GetUserById(id));
};

const useSaveUser = (
  client: QueryClient,
  users: IUser[] | undefined = undefined
) => {
  let newUser: IUser;
  const mutation = useMutation(
    () => {
      console.log('mutating');
      console.log(newUser);
      console.log(newUser.toJson());

      return SaveUser(newUser.toJson());
    },
    {
      onSuccess: () => {
        console.log('success');

        // TODO: uncomment to invalidate and refetch (SaveUser fn must be fully implemented first)
        // client.invalidateQueries(`user-${newUser.id}`);
        // client.invalidateQueries('users');
      },
      onError: () => {
        alert('An error occured, rolling back optimistic update');
      },
    }
  );
  return (user: IUser) => {
    debugger;
    newUser = { ...user };

    console.log('newuser:', newUser);

    // optimistically update state
    client.setQueryData(`user-${newUser.id}`, newUser);
    if (users !== undefined) {
      client.setQueryData(
        'users',
        users.map((user) => (user.id === newUser.id ? newUser : user))
      );
    }
    console.log('updated');

    mutation.mutate();
    return Promise.resolve(true);
  };
};
