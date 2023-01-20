import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';
import { useGetUserById, useActiveUserId } from './repository';

export const JotaiFetchUserButton: React.FC<DynamicFetchUserButtonProps> = ({
  id,
  onSuccess,
}) => {
  const [, setActiveUserId] = useActiveUserId();
  const fetchUserFunc = useGetUserById(id);
  const onClickHandler = async () => {
    const user = await fetchUserFunc();
    if (user) {
      setActiveUserId(user.id);
      onSuccess(user);
    }
  };

  return <Button onClick={onClickHandler}>Fetch user</Button>;
};
