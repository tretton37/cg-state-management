import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { GetUsers } from '../../api/user-api';

const UserList = (): ReactElement => {
  const { data, isLoading } = useQuery('users', GetUsers);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UserList;
