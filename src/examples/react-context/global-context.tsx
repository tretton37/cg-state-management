import { createContext, PropsWithChildren, useState, useCallback } from 'react';
import { IUser } from '../../api/user-api';
import { defaultGlobalState } from '../defaultGlobalState';
import { IGlobalState, ITheme } from '../IGlobalState';

const defaultReactContextState: ReactContextState = {
  ...defaultGlobalState,
  users: [],
  updateUser: function (user: IUser): void {
    throw new Error('updateUser not implemented.');
  },
};

export const GlobalReactContext = createContext<ReactContextState>(
  defaultReactContextState
);

export const GlobalContextProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [contextState, setContextState] = useState<ReactContextState>(
    () => defaultReactContextState
  );

  const updateUser = useCallback(
    (user: IUser) => {
      const existingUser = contextState.users.find((u) => u.id === user.id);
      if (existingUser) {
        const idx = contextState.users.indexOf(existingUser);
        contextState.users[idx] = user;
      } else {
        contextState.users.push(user);
      }
      setContextState(contextState);
    },
    [contextState, setContextState]
  );

  const ctx = contextState;

  if (ctx.updateUser !== updateUser) {
    ctx.updateUser = updateUser;
  }

  const setCurrentTheme = (theme: ITheme) => {
    setContextState({ ...contextState, customTheme: theme });
  };

  if (ctx.setCurrentTheme !== setCurrentTheme) {
    ctx.setCurrentTheme = setCurrentTheme;
  }

  return (
    <GlobalReactContext.Provider value={ctx}>
      {children}
    </GlobalReactContext.Provider>
  );
};

export interface ReactContextState extends IGlobalState {
  users: IUser[];
  updateUser: (user: IUser) => void;
}
