import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';
import { useUser } from './repository';

export const ReactQueryFetchUserButton: React.FC<
  DynamicFetchUserButtonProps
> = ({ id, onSuccess }) => {
  const { getUserById } = useUser();

  const onClickHandler = async () => {
    const user = await getUserById(id);
    if (user) onSuccess(user);
  };

  return <Button onClick={onClickHandler}>Fetch user</Button>;
};
