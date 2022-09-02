import { useState } from 'react';
import styled from 'styled-components';
import { IUser } from '../../api/user-api';
import { StateManagerType } from '../../examples/types';
import { FormGroup, Input, Label } from '../../ui/styles';
import { FetchUserButton } from './fetch-button/FetchUserButton';

export const SelectUser: React.FC<SelectUserProps> = ({
  onSuccessHandler,
  statemanager,
}) => {
  const [selectedId, setSelectedId] = useState<number>(1);

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
          <Label>&nbsp;</Label>
          <FetchUserButton
            onSuccess={onSuccessHandler}
            statemanager={statemanager}
            id={selectedId}
          />
        </FormGroup>
      </InputWrapper>
    </FormGroup>
  );
};

interface SelectUserProps {
  statemanager: StateManagerType;
  onSuccessHandler: (user: IUser) => void;
}

const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
