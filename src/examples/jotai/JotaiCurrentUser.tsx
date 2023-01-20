import { Label } from '../../ui';
import { useUser } from './repository';

export const JotaiCurrentUser: React.FC = () => {
  const { activeUser } = useUser();

  return (
    <div>
      <Label>Jotai</Label>
      {activeUser ? (
        <span>{activeUser.name}</span>
      ) : (
        <span>No active user</span>
      )}
    </div>
  );
};
