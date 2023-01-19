import { Label } from '../../ui';
import { atomActiveUser } from './atoms';
import { useAtom } from 'jotai';

export const JotaiCurrentUser: React.FC = () => {
  const [user] = useAtom(atomActiveUser);

  return (
    <div>
      <Label>Jotai</Label>
      {user ? <span>{user.name}</span> : <span>No active user</span>}
    </div>
  );
};
