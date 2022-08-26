import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';
import { useGetUserById } from './repository';

export const ReactContextFetchUserButton: React.FC<
  DynamicFetchUserButtonProps
> = ({ id, onSuccess }) => {
  const fetchUserFunc = useGetUserById(id);
  const onClickHandler = async () => {
    const user = await fetchUserFunc();
    onSuccess(user);
  };

  return <Button onClick={onClickHandler}>Fetch user</Button>;
};
