import styled from 'styled-components';

import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { H2 } from '../../ui/styles';
import { useGlobalContext } from './global-context';

export const JotaiMain: React.FC = () => {
  const { setTheme } = useGlobalContext();
  return (
    <Wrapper>
      <H2>Jotai</H2>
      <EditUser
        statemanager="jotai"
        saveUserHandler={(_) => Promise.resolve(true)}
      />

      <SelectCustomTheme onSelectTheme={(theme: string) => setTheme(theme)} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
