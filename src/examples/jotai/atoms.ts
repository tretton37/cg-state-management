import { atom } from 'jotai';
import { IUser } from '../../api/types';

export const atomUser = atom<IUser | undefined>(undefined);

export const atomTheme = atom('red');
