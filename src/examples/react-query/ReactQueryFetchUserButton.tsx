import { Button } from '../../ui';
import { DynamicFetchUserButtonProps } from '../types';

export const ReactQueryFetchUserButton: React.FC<
  DynamicFetchUserButtonProps
> = ({ id, onSuccess }) => {
  const onClickHandler = async () => {
    console.error('Not implemented');
  };

  return <Button onClick={onClickHandler}>Not implemented</Button>;
};
