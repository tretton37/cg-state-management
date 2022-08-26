import { createContext, PropsWithChildren, useState } from 'react';
import { defaultGlobalState } from '../defaultGlobalState';
import { IGlobalState } from '../IGlobalState';

const GlobalContext = createContext<IGlobalState | undefined>(undefined);

export const GlobalContextProvider: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [ctx, _] = useState<IGlobalState>(() => defaultGlobalState);

  return (
    <GlobalContext.Provider value={ctx}>{children}</GlobalContext.Provider>
  );
};
