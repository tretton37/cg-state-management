import { IUser } from '../api/types';

export type StateManagerType =
  | 'zustand'
  | 'elf'
  | 'reactcontext'
  | 'reactquery'
  | 'reduxtoolkit'
  | 'jotai';

export interface DynamicFetchUserButtonProps {
  onSuccess: (user: IUser) => void;
  id: number;
}
