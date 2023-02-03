import { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { EditUser } from '../../app/components/edit-user/EditUser';
import { SelectCustomTheme } from '../../app/components/SelectCustomTheme';
import { UserList } from '../../app/components/user-list';
import { H2 } from '../../ui/styles';
import { GlobalReactContext } from './global-context';

export const ReactContextMain: React.FC = () => {
  const ctx = useContext(GlobalReactContext);

  const onSelectThemeHandler = useCallback(
    (color: string) => {
      const newTheme = { ...ctx.customTheme, favoriteColor: color };
      ctx.setCurrentTheme(newTheme);
    },
    [ctx]
  );

  return (
    <Wrapper>
      <H2>React Context</H2>
      <EditUser
        statemanager="reactcontext"
        saveUserHandler={(_) => Promise.resolve(true)}
      />
      <UserList users={[]} />
      <SelectCustomTheme onSelectTheme={onSelectThemeHandler} />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  padding: 2rem;
`;
