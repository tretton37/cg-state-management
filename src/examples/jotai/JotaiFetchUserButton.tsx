import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';
import { atomActiveUserId } from './atoms';
import { useAtom } from 'jotai';
import { useGetUserById } from './repository';

export const JotaiFetchUserButton: React.FC<DynamicFetchUserButtonProps> = ({
  id,
  onSuccess,
}) => {
  const [, setActiveUserId] = useAtom(atomActiveUserId);
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
