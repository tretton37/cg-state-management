import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';
import { useUser } from './repository';

export const JotaiFetchUserButton: React.FC<DynamicFetchUserButtonProps> = ({
  id,
  onSuccess,
}) => {
  const { getUserById, setActiveUserId } = useUser();
  const onClickHandler = async () => {
    const user = await getUserById(id);
    if (user) {
      setActiveUserId(user.id);
      onSuccess(user);
    }
  };

  return <Button onClick={onClickHandler}>Fetch user</Button>;
};
