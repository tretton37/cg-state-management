import { Label } from '../../ui';
import { ThemeDemo } from '../../ui/styles';
import { useAtom } from 'jotai';
import { atomTheme } from './atoms';

export const JotaiCurrentTheme: React.FC = () => {
  const [theme] = useAtom(atomTheme);
  return (
    <div>
      <Label>Jotai</Label>
      <ThemeDemo color={theme}>{theme}</ThemeDemo>
    </div>
  );
};
