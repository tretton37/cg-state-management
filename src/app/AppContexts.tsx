import { PropsWithChildren } from 'react';
import { GlobalContextProvider } from '../examples/react-context/global-context';
import { ReactQueryProvider } from '../examples/react-query/react-query-context';
import { Provider } from 'react-redux';
import store from '../examples/redux-toolkit/Store';

export const AppContexts: React.FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <ReactQueryProvider>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </ReactQueryProvider>
    </Provider>
  );
};
