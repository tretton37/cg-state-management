import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';
import { useUser } from './repository';

export const ReactQueryFetchUserButton: React.FC<
  DynamicFetchUserButtonProps
> = ({ id, onSuccess }) => {
  const { useGetUserById } = useUser();
  const fetchFn = useGetUserById(id);

  const onClickHandler = async () => {
    const { data } = await fetchFn();
    if (data) onSuccess(data);
  };

  return <Button onClick={onClickHandler}>Fetch user</Button>;
};
