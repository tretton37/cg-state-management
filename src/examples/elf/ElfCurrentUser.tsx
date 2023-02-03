import { Label } from '../../ui';
import { useCurrentUser } from './repositories/user.repository';

export const ElfCurrentUser: React.FC = () => {
  const user = useCurrentUser();

  return (
    <div>
      <Label>Elf</Label>
      <span>{user?.name}</span>
    </div>
  );
};
