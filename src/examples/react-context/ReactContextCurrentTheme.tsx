import { useContext } from 'react';
import { Label } from '../../ui';
import { ThemeDemo } from '../../ui/styles';
import { GlobalReactContext } from './global-context';

export const ReactContextCurrentTheme: React.FC = () => {
  const ctx = useContext(GlobalReactContext);
  const color = ctx.customTheme?.favoriteColor ?? 'red';
  return (
    <div>
      <Label>React Context</Label>
      <ThemeDemo color={color}>{color}</ThemeDemo>
    </div>
  );
};
