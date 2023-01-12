import { IUser } from '../api/types';

export interface IGlobalState {
  currentUser: IUser | undefined;
  customTheme: ITheme | undefined;
  setCurrentUser: (user: IUser) => void;
  setCurrentTheme: (theme: ITheme) => void;
}

export interface ITheme {
  favoriteColor: string;
}
