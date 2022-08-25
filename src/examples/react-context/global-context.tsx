import { createContext, PropsWithChildren } from 'react';

const GlobalContext = createContext({});

export const GlobalContextProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const ctx = {};

  return (
    <GlobalContext.Provider value={ctx}>{children}</GlobalContext.Provider>
  );
};
