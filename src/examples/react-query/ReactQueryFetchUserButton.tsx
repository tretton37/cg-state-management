import { Button } from '../../ui';
import { getUserById } from './repository';
import { DynamicFetchUserButtonProps } from '../types';
import { QueryClient, useQueryClient } from 'react-query';

export const ReactQueryFetchUserButton: React.FC<
  DynamicFetchUserButtonProps
> = ({ id, onSuccess }) => {
  const client: QueryClient = useQueryClient();

  const onClickHandler = async (): Promise<void> => {
    const user = await getUserById(id, client);
    onSuccess(user);
  };

  return <Button onClick={onClickHandler}>Fetch user</Button>;
};
