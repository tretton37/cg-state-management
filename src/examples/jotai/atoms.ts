import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { IUser } from '../../api/types';

export const atomUsersById = atom<Record<string, IUser>>({});

export const atomActiveUserId = atom<number | undefined>(undefined);

export const atomActiveUser = atom<IUser | undefined>(
  (get) => get(atomUsersById)[get(atomActiveUserId) ?? '']
);

export const atomTheme = atomWithStorage('jotai-theme', 'red');
