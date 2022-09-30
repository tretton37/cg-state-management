import { atom, useAtom } from 'jotai';
import { IUser } from '../../api/user-api';
import { IGlobalState } from '../IGlobalState';

const themeColorAtom = atom<string>('red');
const userAtom = atom<IUser | undefined>(undefined);
const usersAtom = atom<IUser[] | undefined>(undefined);

export interface JotaiContext
  extends Omit<IGlobalState, 'customTheme' | 'setCurrentTheme'> {
  users: IUser[] | undefined;
  setUsers: (users: IUser[]) => void;
  customTheme: string;
  setCurrentTheme: (color: string) => void;
}

export function useGlobalContext(): JotaiContext {
  const [customTheme, setCurrentTheme] = useAtom(themeColorAtom);
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  const [users, setUsers] = useAtom(usersAtom);

  return {
    customTheme,
    setCurrentTheme,
    currentUser,
    setCurrentUser,
    users,
    setUsers,
  };
}
