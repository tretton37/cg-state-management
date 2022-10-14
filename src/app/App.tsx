import React from 'react';
import { AppContexts } from './AppContexts';
import { TopBar } from './TopBar';
import { BottomBar } from './BottomBar';
import { Main } from './Main';
import styled from 'styled-components';

export const App: React.FC = () => (
  <AppContexts>
    <PageWrapper>
      <TopBar />
      <Main />
      <BottomBar />
    </PageWrapper>
  </AppContexts>
);

const PageWrapper = styled.div`
  height: 100vh;
`;
