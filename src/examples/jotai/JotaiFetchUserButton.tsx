import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';
import { atomActiveUser } from './atoms';
import { useAtom } from 'jotai';
import { useGetUserById } from './repository';

export const JotaiFetchUserButton: React.FC<DynamicFetchUserButtonProps> = ({
  id,
  onSuccess,
}) => {
  const [, setActiveUser] = useAtom(atomActiveUser);
  const fetchUserFunc = useGetUserById(id);
  const onClickHandler = async () => {
    const user = await fetchUserFunc();
    if (user) {
      setActiveUser(user);
      onSuccess(user);
    }
  };

  return <Button onClick={onClickHandler}>Fetch user</Button>;
};
