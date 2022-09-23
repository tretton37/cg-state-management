import { Label } from '../../ui';
import { ThemeDemo } from '../../ui/styles';
import { useGlobalContext } from './global-context';

export const JotaiCurrentTheme: React.FC = () => {
  const { theme } = useGlobalContext();
  return (
    <div>
      <Label>Jotai</Label>
      <ThemeDemo color={theme}>{theme}</ThemeDemo>
    </div>
  );
};
