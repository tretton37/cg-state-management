import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';
import { getUser, setCurrentUser } from './repositories/user.repository';
import { User } from '../../api/user';

export const ElfFetchUserButton: React.FC<DynamicFetchUserButtonProps> = ({
  id,
  onSuccess,
}) => {
  const onClickHandler = () => {
    setCurrentUser(id);
    const userModel = getUser(id);

    if (userModel) {
      const user = new User(userModel);
      onSuccess(user);
    }
  };

  return <Button onClick={onClickHandler}>Fetch user</Button>;
};
