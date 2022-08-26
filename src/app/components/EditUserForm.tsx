import { Button, FormGroup, Input, Label } from '../../ui';
import { SelectUser } from './SelectUser';

export const EditUserForm: React.FC = () => {
  // We need to store which method we fetched the user
  // So that when we save it, we use the same method to save it
  return (
    <div>
      <SelectUser />
      <div>
        Form that opens when user is fetched
        <FormGroup>
          <Label>Name</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Id</Label>
        </FormGroup>
        <FormGroup>
          <Label>Birthdate</Label>
        </FormGroup>
      </div>
      <FormGroup>
        <Button>save user</Button>
      </FormGroup>
    </div>
  );
};
