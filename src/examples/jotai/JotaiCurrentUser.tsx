import { Label } from '../../ui';
import { atomUser } from './atoms';
import { useAtom } from 'jotai';

export const JotaiCurrentUser: React.FC = () => {
  const [user] = useAtom(atomUser);

  return (
    <div>
      <Label>Jotai</Label>
      {user ? <span>{user.name}</span> : <span>Not implemented</span>}
    </div>
  );
};
