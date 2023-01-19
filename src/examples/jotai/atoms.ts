import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { IUser } from '../../api/types';

export const atomUser = atom<IUser | undefined>(undefined);

export const atomTheme = atomWithStorage('jotai-theme', 'red');
