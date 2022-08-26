import styled from 'styled-components';
import { Button, FormGroup, Input, Label, Select } from '../../ui';

export const SelectUser: React.FC = () => {
  return (
    <FormGroup>
      <InputWrapper>
        <FormGroup>
          <Label>User Id</Label>
          <Input type="number" min={1} max={4} />
        </FormGroup>
        <FormGroup>
          <Label>Select which state manager</Label>
          <Select>
            <option value="reactcontext">react context</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>&nbsp;</Label>
          <Button>Fetch user</Button>
        </FormGroup>
      </InputWrapper>
    </FormGroup>
  );
};

const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
