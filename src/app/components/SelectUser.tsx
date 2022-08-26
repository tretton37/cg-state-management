import { useState } from 'react';
import styled from 'styled-components';
import { IUser } from '../../api/user-api';
import { StateManagerType } from '../../examples/types';
import { FormGroup, Input, Label, Select } from '../../ui/styles';
import { FetchUserButton } from './fetch-button/FetchUserButton';

export const SelectUser: React.FC<SelectUserProps> = ({ onSuccessHandler }) => {
  const [selectedStateManager, setSelectedStateManager] =
    useState<StateManagerType>('reactcontext');
  const [selectedId, setSelectedId] = useState<number>(1);

  const onSuccess = (user: IUser) => {
    onSuccessHandler(user);
  };

  const onSelectHandler: React.ChangeEventHandler<HTMLSelectElement> = (ev) => {
    setSelectedStateManager(ev.target.value as StateManagerType);
  };

  const onChangeIdHandler: React.ChangeEventHandler<HTMLInputElement> = (
    ev
  ) => {
    setSelectedId(Number(ev.target.value));
  };

  return (
    <FormGroup>
      <InputWrapper>
        <FormGroup>
          <Label>User Id</Label>
          <Input
            type="number"
            min={1}
            max={4}
            value={selectedId}
            onChange={onChangeIdHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label>Select which state manager</Label>
          <Select onChange={onSelectHandler}>
            <option value="reactcontext">React Context</option>
            <option value="reactquery">React Query</option>
            <option value="reduxtoolkit">Redux Toolkit</option>
            <option value="jotai">Jotai</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>&nbsp;</Label>
          <FetchUserButton
            onSuccess={onSuccess}
            statemanager={selectedStateManager}
            id={selectedId}
          />
        </FormGroup>
      </InputWrapper>
    </FormGroup>
  );
};

interface SelectUserProps {
  onSuccessHandler: (user: IUser) => void;
}

const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
