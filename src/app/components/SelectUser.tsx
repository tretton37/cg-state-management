import { Button, FormGroup, Input, Label } from '../../ui';

export const SelectUser: React.FC = () => {
  return (
    <FormGroup>
      <Label>User Id</Label>
      <Input type="number" min={1} max={4} />
      <Button>Fetch user</Button>
    </FormGroup>
  );
};
