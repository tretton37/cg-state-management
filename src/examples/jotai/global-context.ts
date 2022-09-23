import { atom, useAtom } from 'jotai';

const themeAtom = atom('red');
const userAtom = atom(undefined);

export function useGlobalContext() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  return {
    theme,
    setTheme,
    currentUser,
    setCurrentUser,
  };
}
