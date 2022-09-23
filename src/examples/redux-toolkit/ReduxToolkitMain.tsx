import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { H2 } from '../../ui/styles';

export const ReduxToolkitMain: React.FC = () => {
  return (
    <Wrapper>
      <H2>ReduxToolkit</H2>
      <EditUser
        statemanager="reduxtoolkit"
        saveUserHandler={(_) => Promise.resolve(true)}
      />

      <SelectCustomTheme onSelectTheme={(theme: string) => console.log} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
