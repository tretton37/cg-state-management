import { Label } from '../../ui';
import { ThemeDemo } from '../../ui/styles';
import { useTheme } from './repository';

export const JotaiCurrentTheme: React.FC = () => {
  const [theme] = useTheme();
  return (
    <div>
      <Label>Jotai</Label>
      <ThemeDemo color={theme}>{theme}</ThemeDemo>
    </div>
  );
};
