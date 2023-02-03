import styled from 'styled-components';
import { JotaiCurrentUser } from '../examples/jotai/JotaiCurrentUser';
import { ReactContextCurrentUser } from '../examples/react-context/ReactContextCurrentUser';
import { ReduxToolkitCurrentUser } from '../examples/redux-toolkit/ReduxToolkitCurrentUser';
import { ElfCurrentUser } from '../examples/elf/ElfCurrentUser';

export const TopBar: React.FC = () => {
  return (
    <TopContainer>
      <ReactContextCurrentUser />
      <JotaiCurrentUser />
      <ReduxToolkitCurrentUser />
      <ElfCurrentUser />
    </TopContainer>
  );
};

const TopContainer = styled.div`
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ccc;
  background: #fff;
  height: 70px;
  display: flex;
  align-items: center;
  justify-items: center;
  padding: 0 1rem;
  gap: 1rem;
`;
