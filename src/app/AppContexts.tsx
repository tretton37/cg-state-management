import { PropsWithChildren } from 'react';
import { GlobalContextProvider } from '../examples/react-context/global-context';
import { ReactQueryProvider } from '../examples/react-query/react-query-context';

export const AppContexts: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <ReactQueryProvider>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </ReactQueryProvider>
  );
};
