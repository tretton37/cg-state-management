import styled from 'styled-components';
import { JotaiCurrentTheme } from '../examples/jotai/JotaiCurrentTheme';
import { ReactContextCurrentTheme } from '../examples/react-context/ReactContextCurrentTheme';
import { ReduxToolkitCurrentTheme } from '../examples/redux-toolkit/ReduxToolkitCurrentTheme';

export const BottomBar: React.FC = () => {
  return (
    <BottomContainer>
      <ReactContextCurrentTheme />
      <JotaiCurrentTheme />
      <ReduxToolkitCurrentTheme />
    </BottomContainer>
  );
};

const BottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-top: 1px solid #ccc;
  background: #fff;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0 1rem;
  gap: 1rem;
`;
