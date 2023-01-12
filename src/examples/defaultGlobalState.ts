import { IUser } from '../api/types';
import { IGlobalState, ITheme } from './IGlobalState';

export const defaultGlobalState: IGlobalState = {
  currentUser: undefined,
  customTheme: { favoriteColor: 'red' },
  setCurrentUser: function (user: IUser): void {
    throw new Error('Function not implemented.');
  },
  setCurrentTheme: function (theme: ITheme): void {
    throw new Error('Function not implemented.');
  },
};
