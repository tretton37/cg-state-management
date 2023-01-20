import styled from 'styled-components';
import { ElfMain } from '../examples/elf/ElfMain';
import { JotaiMain } from '../examples/jotai/JotaiMain';
import { ReactContextMain } from '../examples/react-context/ReactContextMain';
import { ReactQueryMain } from '../examples/react-query/ReactQueryMain';
import { ReduxToolkitMain } from '../examples/redux-toolkit/ReduxToolkitMain';
import { ZustandMain } from '../examples/zustand/ZustandMain';

export const Main: React.FC = () => {
  return (
    <Wrapper>
      <ReactContextMain />
      <JotaiMain />
      <ReactQueryMain />
      <ReduxToolkitMain />
      <ZustandMain />
      <ElfMain />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  > div {
    border: 1px solid #ccc;
  }
`;
