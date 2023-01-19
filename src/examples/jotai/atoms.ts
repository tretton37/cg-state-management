import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { IUser } from '../../api/types';

export const atomUsers = atom<IUser[]>([]);

export const atomActiveUserId = atom<number | undefined>(undefined);

export const atomActiveUser = atom((get) =>
  get(atomUsers).find((u) => u.id === get(atomActiveUserId))
);

export const atomTheme = atomWithStorage('jotai-theme', 'red');
