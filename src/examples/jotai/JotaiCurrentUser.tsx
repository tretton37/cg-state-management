import { Label } from '../../ui';
import { useGetActiveUser } from './repository';

export const JotaiCurrentUser: React.FC = () => {
  const user = useGetActiveUser();

  return (
    <div>
      <Label>Jotai</Label>
      {user ? <span>{user.name}</span> : <span>No active user</span>}
    </div>
  );
};
