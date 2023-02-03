import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';
import { getUser, setCurrentUser } from './repositories/user.repository';

export const ElfFetchUserButton: React.FC<DynamicFetchUserButtonProps> = ({
  id,
  onSuccess,
}) => {
  const onClickHandler = () => {
    setCurrentUser(id);
    // getUser(id);
    // onSuccess();
  };

  return <Button onClick={onClickHandler}>Fetch user</Button>;
};
