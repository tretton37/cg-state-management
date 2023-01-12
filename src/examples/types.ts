import { IUser } from '../api/types';

export type StateManagerType =
  | 'reactcontext'
  | 'reactquery'
  | 'reduxtoolkit'
  | 'jotai';

export interface DynamicFetchUserButtonProps {
  onSuccess: (user: IUser) => void;
  id: number;
}
