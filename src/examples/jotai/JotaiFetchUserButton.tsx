import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';
import { useGlobalContext } from './global-context';
import { useGetUserById } from './repository';

export const JotaiFetchUserButton: React.FC<DynamicFetchUserButtonProps> = ({
  id,
  onSuccess,
}) => {
  const { currentUser, setCurrentUser } = useGlobalContext();
  const getUserFunc = useGetUserById(id);

  const onClickHandler = async () => {
    if (currentUser?.id === id) return onSuccess(currentUser);

    const user = await getUserFunc();
    setCurrentUser(user);
    return onSuccess(user);
  };

  return <Button onClick={onClickHandler}>Fetch user</Button>;
};
