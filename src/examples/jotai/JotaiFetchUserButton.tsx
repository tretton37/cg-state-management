import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';
import { GetUserById } from '../../api/user-api';
import { atomUser } from './atoms';
import { useAtom } from 'jotai';

export const JotaiFetchUserButton: React.FC<DynamicFetchUserButtonProps> = ({
  id,
  onSuccess,
}) => {
  const [, setUser] = useAtom(atomUser);
  const onClickHandler = async () => {
    const user = await GetUserById(id);
    setUser(user);
    onSuccess(user);
  };

  return <Button onClick={onClickHandler}>Fetch user</Button>;
};
