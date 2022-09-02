import styled from 'styled-components';
import { JotaiMain } from '../examples/jotai/JotaiMain';
import { ReactContextMain } from '../examples/react-context/ReactContextMain';
import { ReactQueryMain } from '../examples/react-query/ReactQueryMain';
import { HR } from '../ui/styles';

export const Main: React.FC = () => {
  return (
    <Wrapper>
      Maybe some form of navigation
      <ReactContextMain />
      <HR />
      <JotaiMain />
      <HR />
      <ReactQueryMain />
      <HR />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
